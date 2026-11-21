import { Link } from 'react-router-dom'
import MainNav from '../MainNav/MainNav.jsx'
// TODO: reemplazar por el logo final (SVG) conservando el nombre del archivo.
import logoUrl from '../../assets/images/logo1.svg'
import './SiteHeader.css'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__brand">
        <Link to="/" className="site-header__logo-link">
          <img
            className="site-header__logo"
            src={logoUrl}
            alt="Huellas del Pasaje"
            width="208"
            height="100"
          />
        </Link>
      </div>
      <MainNav />
    </header>
  )
}