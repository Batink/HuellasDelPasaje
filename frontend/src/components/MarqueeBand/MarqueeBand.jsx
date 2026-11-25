import './MarqueeBand.css'

/**
 * Franja oscura con texto que se desplaza horizontalmente (marquee en CSS puro).
 * - items: [{ id, text, variant: 'sans' | 'graffiti' }] — se alternan en bucle.
 * - repeat: cuántas veces se repite la secuencia en cada grupo (debe cubrir el ancho de pantalla).
 *
 * El texto es decorativo (repetición visual), por eso la pista va en aria-hidden:
 * la sección debe tener su propio encabezado accesible.
 * La animación se pausa al pasar el mouse y se desactiva con prefers-reduced-motion.
 */
export default function MarqueeBand({ items, repeat = 6, duration }) {
  const sequence = Array.from({ length: repeat }, () => items).flat()

  return (
    <div className="marquee-band" style={duration ? { '--marquee-duration': duration } : undefined}>
      <div className="marquee-band__track" aria-hidden="true">
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className="marquee-band__group">
            {sequence.map((item, index) => (
              <span
                key={`${groupIndex}-${index}-${item.id}`}
                className={`marquee-band__item marquee-band__item--${item.variant}`}
              >
                {item.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
