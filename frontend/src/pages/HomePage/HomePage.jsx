import Hero from '../../components/Hero/Hero.jsx'
import MarqueeBand from '../../components/MarqueeBand/MarqueeBand.jsx'
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid.jsx'
// TODO: reemplazar por la ilustración final (SVG) conservando el nombre del archivo.
import illustrationUrl from '../../assets/images/huellashero.svg'
import { categories } from '../../data/categories.mock.js'
import './HomePage.css'

const HERO_TITLE_LINES = ['Archivo visual', 'de los comienzos', 'del hip hop chileno']

const HERO_DESCRIPTION =
  "Huellas del pasaje es un sitio que busca recopilar hasta los archivos más inéditos del hip hop Chileno. Flayers de los primeros eventos, cassettes de artistas underground de los 90's, fotografías de tocatas, hasta las míticas revistas hip hoperas. ¡Todo en una sola página!, una colección virtual de libre visualización. Para todo el que vivió el auge de la cultura le parecerá nostálgico pero para los jóvenes será un verdadero descubrimiento del pasado."

const MARQUEE_ITEMS = [
  { id: 'sans', text: 'Colecciones destacadas', variant: 'sans' },
  { id: 'graffiti', text: 'Colecciones destacadas', variant: 'graffiti' },
]

export default function HomePage() {
  return (
    <>
      <Hero
        titleLines={HERO_TITLE_LINES}
        dateRange="(1984-2008)"
        description={HERO_DESCRIPTION}
        illustrationSrc={illustrationUrl}
        illustrationAlt="Personaje con capucha y lentes revisando una caja de discos, junto a una radiocasetera y un televisor"
      />

      <section aria-labelledby="colecciones-titulo">
        <h2 id="colecciones-titulo" className="visually-hidden">
          Colecciones destacadas
        </h2>
        <MarqueeBand items={MARQUEE_ITEMS} />
        <CategoryGrid categories={categories} />
      </section>

      <section className="home-pending">
        {/* TODO: área oscura sin contenido definido en el diseño. */}
      </section>
    </>
  )
}
