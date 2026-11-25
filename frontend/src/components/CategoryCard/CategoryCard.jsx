import './CategoryCard.css'

/**
 * Tarjeta de colección: título arriba y recuadro oscuro con la ilustración.
 * La ilustración es decorativa (el título ya nombra la colección), por eso su alt va vacío.
 * TODO: convertir en enlace cuando exista la página de cada colección.
 */
export default function CategoryCard({ name, imageSrc }) {
  return (
    <article className="category-card">
      <h3 className="category-card__title">{name}</h3>
      <div className="category-card__media">
        {imageSrc ? <img className="category-card__image" src={imageSrc} alt="" loading="lazy" /> : null}
      </div>
    </article>
  )
}
