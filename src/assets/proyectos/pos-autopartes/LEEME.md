# Capturas de POS Autopartes

Copiá acá los PNG (o JPG / WebP) de la aplicación. **No hay que tocar código**:
la galería lee estas carpetas sola y publica lo que encuentre.

## Dos juegos de capturas, uno por tema

El sitio tiene modo claro y modo oscuro, y muestra las capturas que combinan con
el tema activo. Por eso hay dos carpetas:

```
claro/    ← capturas con la app en tema claro
oscuro/   ← capturas con la app en tema oscuro
```

Si solo llenás una, esas capturas se usan en los dos temas. No se rompe nada.

## Cómo nombrarlas

El orden en la web es el orden alfabético del archivo, así que numeralas. Estos
cinco nombres ya tienen su texto alternativo escrito en `src/data/content.ts`
(campo `captions` del proyecto `pos-autopartes`):

```
01-venta.png
02-inventario.png
03-metricas.png
04-configuracion.png
05-mi-rendimiento.png
```

Usá **los mismos nombres en las dos carpetas**, así cada captura conserva su
descripción en los dos temas. Si agregás otra pantalla con un nombre distinto,
sumá su entrada en `captions`; si no, se muestra igual con una descripción
genérica.

## Recomendaciones

- Sacalas con la ventana maximizada, tamaño 1920×1080 preferentemente.
- Subí el original grande: Astro genera las versiones chicas en el build. No hace
  falta comprimirlas a mano.
- Ojo con los datos en pantalla: si hay nombres de clientes, precios reales o
  algo del negocio que no quieras publicar, usá datos de prueba.

> Recordá tu propia nota sobre el spotlight: no se captura por software. Si vas a
> mostrar el efecto encendido, la captura tiene que ser manual, con el mouse
> sobre la tarjeta.

Este archivo se puede borrar una vez que estén las capturas.
