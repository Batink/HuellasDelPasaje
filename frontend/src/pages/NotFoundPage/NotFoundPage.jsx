import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <title>Página no encontrada — Huellas del Pasaje</title>
      <h1 className="not-found__title">Página no encontrada</h1>
      <p>La dirección que buscas no existe.</p>
      <Link className="not-found__link" to="/">
        Volver al inicio
      </Link>
    </section>
  )
}
