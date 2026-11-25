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
├── public/fonts/            # .woff2 de Satoshi (incluidos) y Graffiti (pendiente, ver su README)
└── src/
    ├── main.jsx             # punto de entrada
    ├── App.jsx              # BrowserRouter + rutas (/ y 404)
    ├── layouts/MainLayout/  # skip-link + header + <main> + footer
    ├── pages/               # HomePage, NotFoundPage
    ├── components/          # SiteHeader, MainNav, SearchBox, Hero, MarqueeBand,
    │                        # CategoryGrid, CategoryCard, SiteFooter
    ├── data/                # datos mock (colecciones, menús de navegación)
    ├── assets/images/       # logo y placeholders de ilustraciones
    └── styles/              # tokens, fuentes, reset y estilos globales
```

Cada componente vive en su carpeta con su `.jsx` y su `.css` (clases con prefijo del componente, estilo BEM).

## Sistema de diseño

Los tokens están en [`src/styles/tokens.css`](src/styles/tokens.css). La referencia de diseño es un desktop de **1440 px**.

| Token             | Valor     |
| ----------------- | --------- |
| `--color-ink`     | `#1d1d1b` |
| `--color-red`     | `#e71820` |
| `--color-line`    | `#bbbbb9` |

**Alturas de sección** (a 1440 px valen exactamente la medida del diseño):

| Sección                       | Token             | Altura  |
| ----------------------------- | ----------------- | ------- |
| Header                        | `--h-header`      | 100 px  |
| Navbar                        | `--h-nav`         | 50 px   |
| Hero (barra roja)             | `--h-hero`        | 540 px  |
| Franja negra (marquee)        | `--h-band`        | 90 px   |
| Colecciones (fondo blanco)    | `--h-collections` | 520 px  |
| Área oscura                   | `--h-pending`     | 1250 px |
| Footer                        | `--h-footer`      | 455 px  |

Por debajo de 1440 px las alturas y tamaños de texto escalan con el ancho; por encima se detienen en la medida de
referencia y el contenido se centra en un máximo de 90rem. Para cambiar una medida, edita su token.

**Tipografía:**
- Satoshi: Regular (navegación), Medium (párrafo y títulos de tarjeta), Bold ("Colecciones destacadas" versión sans), Black (título principal; token `--fw-display`).
- Graffiti: página activa en la navbar (`aria-current="page"`), "(1984-2008)" y "Colecciones destacadas" versión graffiti.

**Responsive:** el diseño original solo existe en desktop; el comportamiento compacto es una inferencia.
Bajo `56rem` (896 px) la navegación colapsa en un botón "Menú", el hero se apila y las colecciones pasan a 2 columnas.

**Marquee:** `MarqueeBand` es CSS puro (sin dependencias). Se pausa al pasar el mouse, se desactiva con
`prefers-reduced-motion` y su texto va en `aria-hidden` (la sección tiene un `h2` accesible oculto). Velocidad:
`--marquee-duration` (60 s por vuelta por defecto).

## Reemplazar los placeholders

- **Tipografía Graffiti:** copia `Graffiti.woff2` a `public/fonts/` (ver [`public/fonts/README.md`](public/fonts/README.md)). Satoshi ya está incluida.
- **Ilustraciones** (en `src/assets/images/`): reemplaza el contenido de cada archivo conservando su nombre y no hay que tocar código.
- **Logo:** el header ya usa el logo final `logo1.svg`. `logo.svg` y `biblio.svg` están en el repo pero hoy no se usan.

| Archivo                                            | Dónde se usa                | Proporción de referencia |
| -------------------------------------------------- | --------------------------- | ------------------------ |
| `hero-illustration-placeholder.svg`                | Hero                        | ~535 × 363 px            |
| `footer-illustration-placeholder.svg`              | Footer                      | ~271 × 337 px            |
| `categories/kultura-hip-hop-placeholder.svg`       | Tarjeta Kultura Hip Hop     | cuadrada                 |
| `categories/industria-musical-placeholder.svg`     | Tarjeta Industria Musical   | cuadrada                 |
| `categories/cultura-b-boy-placeholder.svg`         | Tarjeta Cultura B-Boy       | cuadrada                 |
| `categories/cultura-graffiti-placeholder.svg`      | Tarjeta Cultura Graffiti    | cuadrada                 |

Si cambia la proporción de un SVG, ajusta los atributos `width`/`height` de su `<img>` (evitan saltos de layout).
Para los SVG de Illustrator convierte los textos a contornos y exporta con "Atributos de presentación".

## Pendientes conocidos

- Los submenús de la navegación abren y cierran, pero sus opciones aún no hacen nada (mock en `src/data/navigation.mock.js`).
- El buscador no tiene lógica (`SearchBox.jsx`).
- Las tarjetas de colección aún no son enlaces.
- El filtro de años no está en esta versión; irá en otras páginas.
- El área oscura bajo las colecciones y el resto del contenido del footer no tienen diseño definido.
- Las ilustraciones (hero, footer y tarjetas) son placeholders.
