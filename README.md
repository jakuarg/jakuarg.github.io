# Portfolio — David Jacas Leila

Portfolio personal bilingüe (español / inglés) construido con [Astro](https://astro.build) y
[Tailwind CSS 4](https://tailwindcss.com), pensado para publicarse en GitHub Pages.

- Sitio 100 % estático: no envía JavaScript salvo el mínimo para tema, menú y animaciones.
- Modo claro / oscuro con preferencia recordada y sin parpadeo al cargar.
- Accesible: navegación por teclado, `skip link`, foco visible y respeto por `prefers-reduced-motion`.
- SEO: metadatos Open Graph, `hreflang`, JSON-LD de tipo `Person` y `sitemap`.

## Requisitos

Node.js 22.12 o superior (el repositorio fija la versión 24 en `.nvmrc`), que es lo que pide Astro 7.

## Comandos

| Comando           | Qué hace                                    |
| ----------------- | ------------------------------------------- |
| `npm install`     | Instala las dependencias                    |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`  |
| `npm run build`   | Verifica tipos y genera el sitio en `dist/` |
| `npm run preview` | Sirve localmente lo que se va a publicar    |
| `npm run og`      | Regenera `public/og-image.png`              |
| `npm run format`  | Formatea el código con Prettier             |

> Con la configuración por defecto el sitio se sirve bajo `/Portfolio_2026/`,
> así que en desarrollo la URL es `http://localhost:4321/Portfolio_2026/`.

## Cómo editar el contenido

Todo el texto vive en dos archivos; no hace falta tocar los componentes.

- [`src/data/content.ts`](src/data/content.ts) — perfil, proyectos, formación, habilidades e idiomas.
  Los campos que no cambian entre idiomas (fechas, tecnologías, enlaces) se escriben una sola vez;
  el texto traducible se agrupa en `{ es: '…', en: '…' }`.
- [`src/i18n/ui.ts`](src/i18n/ui.ts) — etiquetas de la interfaz (navegación, botones).

El CV en PDF está en `public/cv-david-jacas-leila.pdf`; para actualizarlo basta con reemplazar el archivo.

### Capturas de los proyectos

Van en `src/assets/proyectos/<slug-del-proyecto>/`. La galería lee la carpeta sola: copiar el archivo alcanza,
no hay que registrarlo en ningún lado. Se ordenan alfabéticamente, así que conviene numerarlas (`01-…`, `02-…`).
El texto alternativo se define en el campo `captions` del proyecto, usando el nombre del archivo sin extensión
como clave. Astro genera las versiones optimizadas en el build.

Ver [`src/assets/proyectos/pos-autopartes/LEEME.md`](src/assets/proyectos/pos-autopartes/LEEME.md).

### Spotlight en el borde de las tarjetas

Cualquier elemento con la clase `spotlight` enciende un degradado que sigue al puntero, pintado solo sobre el
borde. Es la versión web de la misma idea: el degradado va en el borde, no en el fondo. Los estilos están en
[`src/styles/global.css`](src/styles/global.css) y el seguimiento del puntero en
[`src/components/Spotlight.astro`](src/components/Spotlight.astro), que se incluye una sola vez en el layout y
funciona por delegación de eventos.

Se desactiva solo en pantallas táctiles y en navegadores sin `mask-composite`, donde la tarjeta se ve normal.

## Antes de publicar

1. **Perfiles reales.** En `src/data/content.ts`, reemplazar `TU-USUARIO` en `socials` por tus
   usuarios de GitHub y LinkedIn.
2. **Dominio del sitio.** En [`src/site.config.ts`](src/site.config.ts), poner tu usuario en `SITE_URL`
   y ajustar `BASE_PATH`:
   - repositorio llamado `<usuario>.github.io` → `BASE_PATH = '/'`
   - cualquier otro repositorio → `BASE_PATH = '/<nombre-del-repo>/'`
3. **`robots.txt`.** Actualizar la URL del `Sitemap` en `public/robots.txt` con los mismos valores.
4. **Imagen social.** Ejecutar `npm run og` si cambiaste el nombre o el titular.

## Publicar en GitHub Pages

El repositorio incluye el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
que compila y publica en cada push a `main`.

```bash
git init && git add . && git commit -m "Portfolio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/Portfolio_2026.git
git push -u origin main
```

Después, en el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
El primer despliegue tarda un par de minutos y la URL queda en la pestaña **Actions**.

## Estructura

```
src/
├── components/     Componentes de UI (una sección por archivo)
├── data/           Contenido del portfolio
├── i18n/           Cadenas de interfaz y utilidades de idioma
├── layouts/        Estructura HTML común
├── pages/          Rutas: / (es), /en/ y 404
├── styles/         Tokens de diseño y estilos base
└── site.config.ts  URL, base y locales
```
