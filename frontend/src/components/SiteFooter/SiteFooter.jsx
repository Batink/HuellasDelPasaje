// TODO: reemplazar por la ilustración final (SVG) conservando el nombre del archivo.
import illustrationUrl from '../../assets/images/footer-illustration-placeholder.svg'
import './SiteFooter.css'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* TODO: el resto del contenido del footer aún no está diseñado. */}
      <img
        className="site-footer__illustration"
        src={illustrationUrl}
        alt="Personaje con capucha apoyado con los brazos cruzados"
        width="271"
        height="337"
      />
    </footer>
  )
}
