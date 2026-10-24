# Contexto del proyecto

Portfolio personal de **David Jacas Leila**, estudiante de Ingeniería en Sistemas
de Información (UTN-FRT). Sitio estático bilingüe publicado en GitHub Pages.

Este archivo guarda las decisiones que no se deducen leyendo el código. Claude
Code lo carga solo al abrir el proyecto; para una persona es simplemente un .md.

## Stack

Astro 7 · Tailwind CSS 4 · TypeScript 6 · sin framework de UI ni JavaScript de
cliente más allá de cuatro scripts chicos: tema, menú, galería y spotlight.

Node 22.12 o superior, fijado en `.nvmrc` (24) y en `engines`.

## Comandos

| Comando           | Qué hace                                       |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`     |
| `npm run build`   | `astro check` + build en `dist/`               |
| `npm run preview` | Sirve `dist/` como lo va a servir GitHub Pages |
| `npm run og`      | Regenera `public/og-image.png`                 |
| `npm run format`  | Prettier sobre todo el proyecto                |

`npm run build` corre el chequeo de tipos **antes** del build: si hay un error de
tipos, no se genera nada. Dejarlo así, es lo que atrapa los errores antes del
deploy.

## Cómo está organizado

```
src/
├── site.config.ts   URL, base y locales. Lo lee astro.config.mjs
├── data/content.ts  TODO el contenido editorial
├── i18n/            ui.ts (etiquetas) + utils.ts (locale, rutas)
├── layouts/         BaseLayout.astro
├── components/      una sección por archivo
├── pages/           index.astro (es), en/index.astro, 404.astro
├── styles/          global.css: tokens, base y componentes
└── assets/          foto de perfil y capturas de proyectos
```

## Decisiones que importan

### El contenido vive en dos archivos, no en los componentes

`src/data/content.ts` tiene perfil, proyectos, formación, habilidades e idiomas.
`src/i18n/ui.ts` tiene las etiquetas de interfaz.

Los campos neutrales (fechas, tecnologías, enlaces) se escriben **una sola vez**;
el texto traducible se agrupa en `{ es: '…', en: '…' }`. Así las dos versiones
del sitio no se pueden desincronizar: si falta un idioma, falla el build.

Al agregar una etiqueta nueva hay que ponerla en los dos idiomas de `ui.ts`, el
tipo lo exige.

### Bilingüe sin duplicar páginas

`src/pages/index.astro` y `src/pages/en/index.astro` son dos líneas cada uno:
pasan el locale a `HomePage.astro`, que arma la página. Toda la estructura está
definida una sola vez.

El español es el idioma por defecto y no lleva prefijo (`/`); el inglés va en
`/en/`.

### `BASE_PATH` cambia según el repositorio

En `src/site.config.ts`:

- repo `<usuario>.github.io` entonces `BASE_PATH = '/'` — **es el caso actual**
- cualquier otro repo entonces `BASE_PATH = '/<nombre-del-repo>/'`

Si se cambia, hay que actualizar también la URL del `Sitemap` en
`public/robots.txt`. No hay nada que sincronice esas dos cosas solas.

Las rutas internas se construyen con `localizePath()` o con
`import.meta.env.BASE_URL`, nunca a mano.

### El tema se aplica antes del primer pintado

Hay un script **inline** en el `<head>` de `BaseLayout.astro` que lee
`localStorage` y pone la clase `dark` antes de que el navegador pinte. Si se
mueve a un script externo o diferido, vuelve el parpadeo blanco al cargar en
modo oscuro.

Modo oscuro por **clase**, no por media query: hace falta para que el botón de
tema pueda sobreescribir la preferencia del sistema.

### Las animaciones de aparición fallan hacia «visible»

Por defecto `.reveal` es visible. El estado oculto se activa solo cuando ese
mismo script de `<head>` marca `data-reveal="on"`, y lo hace únicamente si hay
JavaScript, existe `IntersectionObserver` y el usuario no pidió reducir el
movimiento.

Es a propósito: si algo falla, el peor caso es perder la animación, nunca el
contenido. **No invertir esta lógica.**

### Spotlight en el borde

Puerto a CSS del mismo efecto que David tiene en su app WinUI 3. La idea: el
degradado no va de fondo, va del borde. Un degradado radial se pinta sobre un
anillo de 1,5 px recortado con `mask-composite`, y su centro sigue al puntero.

Cualquier elemento con la clase `spotlight` lo hereda. Los estilos están en
`global.css` y el seguimiento del puntero en `Spotlight.astro`, que se incluye
**una sola vez** en el layout y funciona por delegación de eventos.

Tres cosas que lo rompen si se tocan:

1. El brillo es un `::before` sobre la caja de borde. Si se mete dentro del
   contenido, el `padding` de la tarjeta lo desalinea.
2. `pointer-events: none` es el equivalente a `IsHitTestVisible="False"` en
   WinUI. Sin eso se come los eventos de puntero y el efecto no sigue al mouse.
3. Todo va dentro de un `@supports (mask-composite: …)`. Sin esa guarda, un
   navegador que no lo soporte pinta un rectángulo de color sobre la tarjeta.

**El efecto no se puede verificar por software.** Los movimientos de mouse
sintéticos y las capturas programáticas no lo muestran encendido aunque esté
funcionando perfecto. Se prueba a mano.

### Proyectos con página propia

Un proyecto puede tener una página de caso de estudio además de su tarjeta en la
home. El patrón, usando el CCE como referencia:

- En `content.ts`, el proyecto declara `caseStudyPath: '/projects/<slug>'`. Eso
  solo hace aparecer el distintivo de destacado y el botón hacia la página; la
  ruta hay que crearla aparte.
- El contenido largo vive en su propio componente (`CceCaseStudy.astro`), con
  los textos de esa página adentro, no en `content.ts`. `content.ts` guarda lo
  que comparten la tarjeta y la página.
- Las rutas se crean **dos veces**, una por idioma: `src/pages/projects/<slug>.astro`
  y `src/pages/en/projects/<slug>.astro`, cada una de dos líneas pasando el
  locale, igual que la home.
- El enlace se arma con `localizePath(project.caseStudyPath, locale)`, nunca a
  mano.

Campos opcionales de proyecto que conviene conocer:

- `status` reemplaza al período en la tarjeta cuando el proyecto no entra en un
  rango de fechas limpio (el CCE usa «En pruebas · 2026»).
- `href` es el sitio público; agrega un segundo botón junto al del caso de
  estudio.
- `role` es opcional: los proyectos que no lo declaran no muestran esa línea.

### El header se adapta a las páginas internas

Los enlaces del menú son anclas (`#about`, `#projects`…), que solo funcionan
estando en la home. Desde una página interna se les antepone la ruta de la home,
y el selector de idioma conserva la página actual en vez de volver al inicio.
Si se agregan páginas internas nuevas, esto ya funciona solo.

### Galería de capturas

Las capturas se leen con `import.meta.glob` desde
`src/assets/proyectos/<slug>/<tema>/`, con `<tema>` igual a `claro` u `oscuro`.
Copiar el archivo alcanza: no hay que registrarlo en ningún lado.

- Se ordenan **alfabéticamente**, por eso van numeradas (`01-`, `02-`…).
- El texto alternativo sale del campo `captions` del proyecto, con el nombre del
  archivo sin extensión como clave.
- Si un tema no tiene capturas propias, se usan las del otro en ambos.
- El intercambio claro/oscuro es puro CSS (`dark:`), sin JavaScript ni recarga.

El visor es un `<dialog>` nativo: trae foco atrapado, cierre con Escape y capa
modal sin código propio.

Dos detalles del visor que costaron:

- El `<figure>` usa `w-fit`: el ancho lo define la imagen. Con un contenedor de
  ancho fijo, el pie y los controles quedan flotando lejos de los bordes reales
  de la captura.
- Las imágenes se declaran `lazy`, pero al mostrarlas hay que pasarlas a `eager`
  desde JavaScript. Mientras están ocultas el navegador no tiene motivo para
  descargarlas y el visor puede quedar en blanco.

### Foto de perfil opcional

`src/assets/perfil.<ext>`, detectada con `import.meta.glob`. Si no existe, el
hero cae en las iniciales y no se rompe nada.

### Fuentes

Self-hosted y **solo el subconjunto latino**, declarado a mano en `global.css`.
Fontsource solo publica el CSS con todos los subconjuntos; importarlo entero
suma unos 180 kB de cirílico, griego y vietnamita que este sitio nunca usa.

## Publicación

GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`. En el
repositorio: **Settings → Pages → Source: GitHub Actions**, no «Deploy from a
branch».

URL: https://jakuarg.github.io

## Convenciones

- Comentarios y nombres internos en **español**; el contenido del sitio es
  bilingüe.
- Prettier con 120 columnas y comillas simples. Correr `npm run format` antes de
  commitear.
- `.gitattributes` normaliza los finales de línea a LF. Sin eso, el build en
  Linux ve como modificados archivos que no cambiaron.
- Nada de `any` ni de `@ts-ignore`: el build falla con `astro check`.

## Datos del proyecto que no están en el código

- El sistema de **Transporte Leila** fue un trabajo académico y de
  investigación: **nunca se implementó en producción**. El texto del sitio lo
  dice explícitamente. No describirlo como un sistema en producción.
- El **CCE** está **instalado y en pruebas con datos ficticios** durante 2026;
  el uso académico real se proyecta para el ciclo 2027. No describirlo como un
  sistema en producción ni decir que ya lo usan los 500 estudiantes.
- **POS Autopartes** es el otro proyecto actual y el primero pensado para
  venderse. Las cifras de la tarjeta (12.141 líneas, 38 servicios, 19 pantallas,
  15 tablas) salieron de medir el repositorio `POSAutopartes_WINUI`.
- El análisis comercial del POS (precios, mantenimiento, debilidades conocidas)
  se dejó **deliberadamente fuera** del sitio: es estrategia de negocio y un
  mapa de debilidades, no material de portfolio.
