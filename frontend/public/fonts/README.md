# Tipografías locales

Estos son los `.woff2` que usa la página (los nombres deben coincidir con `src/styles/fonts.css`). Satoshi ya está en el repo;
**falta `Graffiti.woff2`**. En la carpeta hay además otras variantes de Satoshi (Light, cursivas, variable) que hoy no se cargan.

| Archivo                 | Peso | Uso en el diseño                                                |
| ----------------------- | ---- | --------------------------------------------------------------- |
| `Satoshi-Regular.woff2` | 400  | Navegación                                                      |
| `Satoshi-Medium.woff2`  | 500  | Párrafo del hero y títulos de las tarjetas                      |
| `Satoshi-Bold.woff2`    | 700  | "Colecciones destacadas" (versión sans)                         |
| `Satoshi-Black.woff2`   | 900  | Título principal                                                |
| `Graffiti.woff2`        | 400  | Página activa en la navbar, "(1984-2008)" y "Colecciones destacadas" (versión graffiti) |

Satoshi se descarga desde [Fontshare](https://www.fontshare.com/fonts/satoshi).

- Si tu fuente graffiti tiene otro nombre de archivo, renómbrala a `Graffiti.woff2` o cambia la ruta en `src/styles/fonts.css`.
- Si solo tienes `.ttf` u `.otf`, conviértela a `.woff2` (por ejemplo con [Transfonter](https://transfonter.org)) o ajusta el `format()` del `@font-face`.
- Revisa que la licencia de la fuente graffiti permita su uso en web.

Mientras `Graffiti.woff2` no exista, esos textos usan Satoshi (o la fuente del sistema) y `npm run build` muestra una
advertencia por ese archivo (no es un error).
