# Imágenes del sitio

Todo lo que va acá pasa por el optimizador de Astro en el build: se generan las
versiones en varios tamaños y en formatos modernos, y se conocen las dimensiones
de antemano, así que la página no salta mientras carga.

## Foto de perfil

Copiá tu foto en esta misma carpeta con el nombre **`perfil`**:

```
src/assets/perfil.jpg
```

Extensiones aceptadas: `.jpg`, `.jpeg`, `.png`, `.webp` o `.avif`. Si el archivo
no existe, el hero muestra las iniciales «DJ» y no se rompe nada.

### Formato recomendado

| Qué                | Recomendación                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Proporción         | **Cuadrada (1:1)**. El marco recorta al centro, así que si la subís rectangular vas a perder los costados.          |
| Tamaño             | **800×800 px o más** (ideal 1000×1000). Se muestra a 320 px, pero en pantallas retina se sirve al doble.            |
| Formato de archivo | JPG si es una foto; PNG solo si tiene fondo transparente. Astro convierte a WebP/AVIF solo.                         |
| Peso               | No importa: no la comprimas a mano, el build se encarga.                                                            |
| Encuadre           | Cara centrada, con aire arriba y a los costados; de los hombros para arriba.                                        |
| Fondo              | Liso o desenfocado. El marco es un degradado violeta-cian, así que un fondo neutro le queda mejor que uno saturado. |
| Iluminación        | Que se vea igual de bien sobre fondo claro y oscuro: la página tiene los dos temas.                                 |

Si la foto queda mal encuadrada, cambiá `object-cover` por `object-contain`, o
ajustá el punto de recorte con `object-top` / `object-bottom` en
[`src/components/Hero.astro`](../components/Hero.astro).

## Capturas de proyectos

Van en `src/assets/proyectos/<slug-del-proyecto>/<tema>/`, donde `<tema>` es
`claro` u `oscuro`. Ver el LEEME de cada proyecto.
