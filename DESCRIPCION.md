# Portfolio — David Jacas Leila

Sitio web personal de David Jacas Leila, estudiante de Ingeniería en Sistemas de
Información en la Universidad Tecnológica Nacional (FRT), San Miguel de Tucumán,
Argentina.

**En línea:** https://jakuarg.github.io

---

## Qué es

Una página única, bilingüe y estática que reúne perfil profesional, habilidades,
proyectos y formación, pensada para enviar a una búsqueda laboral. Funciona como
complemento del CV en PDF, que se puede descargar desde el propio sitio.

## Qué contiene

| Sección         | Qué muestra                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| **Inicio**      | Nombre, rol, eslogan, accesos a proyectos y contacto, descarga del CV y tres cifras clave |
| **Sobre mí**    | Trayectoria, objetivo profesional e idiomas con su nivel                                  |
| **Habilidades** | Siete técnicas con nivel y descripción, más nueve blandas                                 |
| **Proyectos**   | Cuatro proyectos con resumen, logros, tecnologías, cifras y capturas                      |
| **Formación**   | Línea de tiempo con la carrera y cuatro formaciones complementarias                       |
| **Contacto**    | Correo, teléfono, ubicación, GitHub y LinkedIn                                            |

### Los proyectos

1. **CCE — Centro de Calificaciones Estudiantiles** (2026, en pruebas) —
   Sistema integral de gestión académica para el Colegio Agrotécnico N.º 2
   «María Auxiliadora», una institución de más de 500 estudiantes. Centraliza
   calificaciones, asistencias, boletines, estadísticas y comunicación
   institucional en tres piezas conectadas: una plataforma web en Node.js,
   Express y PostgreSQL; una aplicación Android en Kotlin y Jetpack Compose que
   toma asistencia sin conexión y sincroniza al recuperar la señal; y el sitio
   institucional público en Next.js, desde donde se inician las preinscripciones.

   Está instalado y en pruebas con datos ficticios durante 2026; el uso
   académico real se proyecta para el ciclo lectivo 2027. Las cifras medidas:
   150 usuarios concurrentes en prueba de carga, 58 ms de p95 máximo, 55 pruebas
   de humo automatizadas y 35 migraciones versionadas.

   Se acompaña de cinco capturas de la plataforma —inicio, planilla de
   calificaciones, riesgo pedagógico, auditoría y la vista en teléfono—, cada
   una en tema claro y oscuro.

   Es el único proyecto con **página propia de caso de estudio**, donde se
   explica la arquitectura, el recorrido de la información y la operación móvil
   sin conexión.

2. **POS Autopartes** (2025 — actualidad) — Punto de venta y gestión de stock
   para comercios de autopartes, en C# .NET y WinUI 3 sobre PostgreSQL, con
   espejo local en SQLite. Multi-sucursal y multi-terminal, modo offline con
   sincronización incremental, auditoría campo por campo y roles de tres
   niveles. Es el proyecto actual y el primero preparado para venderse.
   Se acompaña de seis capturas y de las cifras del sistema: 12.141 líneas,
   38 servicios, 19 pantallas y 15 tablas.

3. **Transporte Leila S.A.S.** (2020 — 2024) — Sistema de gestión empresarial
   desarrollado como parte de una investigación de Ingeniería en Sistemas,
   tomando una empresa familiar de transporte del NOA como caso de estudio.
   Trabajo académico; no llegó a implementarse.

4. **Teatro Municipal Rosita Ávila** (2021 — 2022) — Sistema de gestión de
   butacas digital, desarrollado en equipo como práctica de implementación para
   la Fundación León.

## Características

### Dos idiomas

Español en la raíz (`/`) e inglés en `/en/`, con selector en la cabecera. Cada
versión tiene sus propios metadatos, su `hreflang` y su entrada en el sitemap,
así que los buscadores indexan las dos por separado.

### Dos temas

Modo claro y oscuro con preferencia recordada entre visitas. El tema inicial se
aplica antes del primer pintado, así que no hay parpadeo al cargar.

Las capturas de los proyectos acompañan al tema: hay un juego tomado con la
aplicación en claro y otro en oscuro, y el sitio muestra el que corresponde.

### Páginas de caso de estudio

Los proyectos que lo justifican tienen, además de su tarjeta, una página propia
con el detalle completo: arquitectura, decisiones y resultados. Hoy la tiene el
CCE, en los dos idiomas, bajo `/projects/cce` y `/en/projects/cce`.

Desde esas páginas la navegación sigue funcionando: el menú vuelve a la sección
correspondiente de la portada y el selector de idioma se queda en la misma
página en vez de mandar al inicio.

### Galería de capturas

Las miniaturas abren un visor a pantalla completa con descripción, contador y
navegación con flechas o teclado. Está construido sobre el elemento `<dialog>`
nativo del navegador, que ya aporta el atrapado de foco y el cierre con Escape.

### Spotlight en los bordes

Las tarjetas encienden un degradado que sigue al puntero, pintado únicamente
sobre el borde. Es la versión web del mismo efecto que la aplicación POS
Autopartes tiene en WinUI 3, y aparece en las tarjetas de cifras, idiomas,
habilidades, proyectos y contacto.

### Accesibilidad

- Navegación completa por teclado, con enlace para saltar al contenido.
- Foco siempre visible y consistente.
- Jerarquía de encabezados correcta y textos alternativos en todas las imágenes.
- Respeta `prefers-reduced-motion`: con esa preferencia activa no hay
  animaciones, y el contenido se ve igual.
- Si falla el JavaScript, el contenido sigue siendo legible: las animaciones de
  aparición están diseñadas para fallar hacia visible, nunca hacia oculto.

### Rendimiento

- Sitio completamente estático: no hay servidor ni base de datos.
- El JavaScript se limita a cuatro scripts chicos — tema, menú, galería y
  spotlight — sin ningún framework de interfaz.
- Imágenes optimizadas en el build, servidas en varios tamaños y en formatos
  modernos, con las dimensiones declaradas para que la página no salte al
  cargar.
- Tipografías alojadas en el propio sitio, recortadas al alfabeto latino: cero
  peticiones a terceros y nada de seguimiento externo.

### Posicionamiento

Metadatos Open Graph y Twitter Card con imagen social propia, datos
estructurados `schema.org/Person`, URL canónica, `hreflang` entre idiomas,
sitemap y `robots.txt`.

## Cómo está hecho

**Astro 7**, **Tailwind CSS 4** y **TypeScript 6**. Se publica solo en GitHub
Pages mediante GitHub Actions: cada cambio subido a `main` compila y despliega
el sitio.

Todo el contenido está centralizado en dos archivos de datos, separado de los
componentes, de modo que actualizar un proyecto o una habilidad no implica tocar
código de presentación.

## Cómo trabajar sobre él

Las instrucciones de instalación, edición y publicación están en
[`README.md`](README.md). Las decisiones técnicas y las trampas conocidas están
en [`CLAUDE.md`](CLAUDE.md).

---

## Contacto

**David Jacas Leila**
Estudiante de Ingeniería en Sistemas de Información — UTN-FRT
San Miguel de Tucumán, Argentina

- Correo: jacasdavid@gmail.com
- GitHub: [github.com/jakuarg](https://github.com/jakuarg)
- LinkedIn: [linkedin.com/in/jakuarg](https://www.linkedin.com/in/jakuarg)
