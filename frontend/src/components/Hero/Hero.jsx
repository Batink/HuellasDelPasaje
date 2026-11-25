import './Hero.css'

/**
 * Hero rojo de portada: título + fecha + párrafo a la izquierda, ilustración a la derecha.
 * - titleLines: líneas del título (en desktop cada una va en su propia línea; en móvil fluyen).
 * - dateRange: texto bajo el título en tipografía graffiti, p. ej. "(1984-2008)".
 */
export default function Hero({ titleLines, dateRange, description, illustrationSrc, illustrationAlt }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__text">
        <h1 id="hero-title" className="hero__title">
          {titleLines.map((line) => (
            <span key={line} className="hero__title-line">
              {line}{' '}
            </span>
          ))}
          {dateRange ? <span className="hero__date">{dateRange}</span> : null}
        </h1>
        <p className="hero__description">{description}</p>
      </div>

      {illustrationSrc ? (
        <img
          className="hero__illustration"
          src={illustrationSrc}
          alt={illustrationAlt}
          width="535"
          height="363"
        />
      ) : null}
    </section>
  )
}
