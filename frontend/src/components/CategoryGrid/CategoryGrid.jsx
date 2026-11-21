import CategoryCard from '../CategoryCard/CategoryCard.jsx'
import './CategoryGrid.css'

export default function CategoryGrid({ categories }) {
  return (
    <ul className="category-grid" role="list">
      {categories.map((category) => (
        <li key={category.id}>
          <CategoryCard name={category.name} imageSrc={category.imageSrc} imageAlt={category.imageAlt} />
        </li>
      ))}
    </ul>
  )
}
