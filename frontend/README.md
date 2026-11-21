# Frontend — Huellas del Pasaje

React 19 + Vite 8, JavaScript, CSS nativo y React Router.

## Requisitos

- Node.js 20.19+ o 22.12+ (probado con Node 22)
- npm

## Scripts

```bash
npm install        # instala dependencias
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # build de producción en dist/
npm run preview    # sirve el build localmente
npm run lint       # oxlint (linter de la plantilla de Vite)
```

> El repositorio aún no tiene tests; esta base no añade un framework de testing a propósito.

## Estructura

```
frontend/
├── public/fonts/            # .woff2 de Satoshi (no versionados, ver su README)
└── src/
    ├── main.jsx             # punto de entrada
    ├── App.jsx              # BrowserRouter + rutas (/ y 404)
    ├── layouts/MainLayout/  # skip-link + header + <main> + footer
    ├── pages/               # HomePage, NotFoundPage
    ├── components/          # SiteHeader, MainNav, SearchBox, Hero,
    │                        # SectionTitleBar, CategoryGrid, CategoryCard, SiteFooter
    ├── data/                # datos mock (categorías, menús de navegación)
    ├── assets/images/       # placeholders de logo e ilustración
    └── styles/              # tokens, fuentes, reset y estilos globales
```

Cada componente vive en su carpeta con su `.jsx` y su `.css` (clases con prefijo del componente, estilo BEM).

## Sistema de diseño

Los tokens están en [`src/styles/tokens.css`](src/styles/tokens.css) y se muestrearon del mockup:

| Token             | Valor     |
| ----------------- | --------- |
| `--color-ink`     | `#1d1d1b` |
| `--color-red`     | `#e71820` |
| `--color-surface` | `#d4d6d6` |
| `--color-line`    | `#8f8f8d` |

**Tipografía:** Satoshi (Regular en navegación, Medium en fecha y párrafo, Bold en títulos de sección, Black en el título principal).

**Responsive:** el diseño original solo existe en desktop; el comportamiento compacto es una inferencia.
Bajo `56rem` (896 px) la navegación colapsa en un botón "Menú", el hero se apila y las categorías pasan a 2 columnas.

## Reemplazar los placeholders

- **Tipografía:** copia los `.woff2` a `public/fonts/` (ver [`public/fonts/README.md`](public/fonts/README.md)).
- **Logo:** reemplaza `src/assets/images/logo-placeholder.svg`.
- **Ilustración del hero:** reemplaza `src/assets/images/hero-illustration-placeholder.svg`.

Si conservas los nombres de archivo no hay que tocar código. Si usas otros nombres, actualiza los imports en
`SiteHeader.jsx` y `HomePage.jsx`. Para los SVG de Illustrator convierte los textos a contornos y exporta con
"Atributos de presentación"; ajusta los atributos `width`/`height` del `<img>` si cambia la proporción.

## Pendientes conocidos

- Los submenús de la navegación abren y cierran, pero sus opciones aún no hacen nada (mock en `src/data/navigation.mock.js`).
- El buscador no tiene lógica (`SearchBox.jsx`).
- El filtro de años no está en esta versión; irá en otras páginas.
- El área oscura bajo las categorías y el footer rojo están vacíos (sin diseño definido).
- Nombres de categorías, texto del hero, logo e ilustración son provisionales.
