import { Outlet } from 'react-router-dom'
import SiteHeader from '../../components/SiteHeader/SiteHeader.jsx'
import SiteFooter from '../../components/SiteFooter/SiteFooter.jsx'

export default function MainLayout() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}
