import Hero from '../../components/Hero/Hero.jsx'
import SectionTitleBar from '../../components/SectionTitleBar/SectionTitleBar.jsx'
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid.jsx'
// TODO: reemplazar por la ilustración final (SVG) conservando el nombre del archivo.
import illustrationUrl from '../../assets/images/biblio.svg'
import { categories } from '../../data/categories.mock.js'
import './HomePage.css'

const HERO_TITLE_LINES = ['Archivo visual', 'de los comienzos', 'del hip hop chileno']

// TODO: texto provisional (lorem ipsum del mockup). Reemplazar por el texto editorial real.
const HERO_DESCRIPTION =
  'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolores iusto, sit voluptate odit temporibus adipisci. Animi, deserunt. Labore inventore officiis eum tempore, commodi magni provident. Quod perferendis tempore adipisci?'

export default function HomePage() {
  return (
    <>
      <Hero
        titleLines={HERO_TITLE_LINES}
        dateRange="(1984-2008)"
        description={HERO_DESCRIPTION}
        illustrationSrc={illustrationUrl}
        illustrationAlt="Personaje con capucha y lentes revisando una caja de discos"
      />

      <section aria-labelledby="categorias-titulo">
        <SectionTitleBar id="categorias-titulo" title="Categorías" />
        <CategoryGrid categories={categories} />
      </section>

      <section className="home-pending">
        {/* TODO: área oscura sin contenido definido en el diseño. */}
      </section>
    </>
  )
}
