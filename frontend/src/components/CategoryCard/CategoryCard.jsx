import './CategoryCard.css'

/**
 * Tarjeta de categoría. Por ahora es un bloque gris sin contenido visible (como en el mockup).
 * El nombre se expone solo a lectores de pantalla.
 * TODO: mostrar imagen/título visibles cuando el diseño los defina.
 */
export default function CategoryCard({ name, imageSrc, imageAlt = '' }) {
  return (
    <article className="category-card">
      {imageSrc ? <img className="category-card__image" src={imageSrc} alt={imageAlt} loading="lazy" /> : null}
      <span className="visually-hidden">{name}</span>
    </article>
  )
}
