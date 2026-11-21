import './SectionTitleBar.css'

/** Franja oscura con el título de una sección. El título es dinámico: se recibe por prop. */
export default function SectionTitleBar({ id, title, as: Heading = 'h2' }) {
  return (
    <div className="section-title-bar">
      <Heading id={id} className="section-title-bar__title">
        {title}
      </Heading>
    </div>
  )
}
