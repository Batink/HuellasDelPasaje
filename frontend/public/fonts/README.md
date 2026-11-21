# Tipografía Satoshi

Los archivos de fuente no están versionados. Copia aquí los `.woff2` de Satoshi con estos nombres exactos:

| Archivo                  | Peso | Uso en el diseño                |
| ------------------------ | ---- | ------------------------------- |
| `Satoshi-Regular.woff2`  | 400  | Navegación                      |
| `Satoshi-Medium.woff2`   | 500  | Fecha "(1984-2008)" y párrafo   |
| `Satoshi-Bold.woff2`     | 700  | Título de sección (Categorías)  |
| `Satoshi-Black.woff2`    | 900  | Título principal                |

Satoshi se descarga desde [Fontshare](https://www.fontshare.com/fonts/satoshi). Mientras los archivos no existan,
la página usa la fuente del sistema y `npm run build` muestra una advertencia por cada archivo ausente (no es un error).
