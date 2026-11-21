import './Hero.css'

/**
 * Hero rojo de portada.
 * - titleLines: líneas del título (en desktop cada una va en su propia línea; en móvil fluyen).
 * - dateRange: texto secundario bajo el título, p. ej. "(1984-2008)".
 */
export default function Hero({ titleLines, dateRange, description, illustrationSrc, illustrationAlt }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__title">
        {titleLines.map((line) => (
          <span key={line} className="hero__title-line">
            {line}{' '}
          </span>
        ))}
        {dateRange ? <span className="hero__date">{dateRange}</span> : null}
      </h1>

      <div className="hero__aside">
        <p className="hero__description">{description}</p>
        {illustrationSrc ? (
          <img
            className="hero__illustration"
            src={illustrationSrc}
            alt={illustrationAlt}
            width="220"
            height="214"
          />
        ) : null}
      </div>
    </section>
  )
}
