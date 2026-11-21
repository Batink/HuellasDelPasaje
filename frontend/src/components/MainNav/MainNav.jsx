import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox.jsx'
import { navMenus } from '../../data/navigation.mock.js'
import './MainNav.css'

const triggerId = (menuId) => `main-nav-trigger-${menuId}`
const submenuId = (menuId) => `main-nav-submenu-${menuId}`

function ChevronIcon() {
  return (
    <svg
      className="main-nav__chevron"
      viewBox="0 0 10 6"
      width="9"
      height="6"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function MainNav() {
  const [openMenuId, setOpenMenuId] = useState(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  // Cierra el submenú al pulsar o tocar fuera de la navegación.
  useEffect(() => {
    if (!openMenuId) return undefined

    function handlePointerDown(event) {
      if (!navRef.current?.contains(event.target)) setOpenMenuId(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [openMenuId])

  // Escape cierra primero el submenú abierto y, si no hay, el panel móvil.
  function handleKeyDown(event) {
    if (event.key !== 'Escape') return

    if (openMenuId) {
      document.getElementById(triggerId(openMenuId))?.focus()
      setOpenMenuId(null)
    } else if (isPanelOpen) {
      setIsPanelOpen(false)
      toggleRef.current?.focus()
    }
  }

  // Cierra el submenú cuando el foco sale de su ítem (p. ej. al tabular hacia el siguiente).
  function handleItemBlur(event, menuId) {
    const nextFocused = event.relatedTarget
    if (nextFocused && !event.currentTarget.contains(nextFocused)) {
      setOpenMenuId((current) => (current === menuId ? null : current))
    }
  }

  function toggleMenu(menuId) {
    setOpenMenuId((current) => (current === menuId ? null : menuId))
  }

  function handleHomeClick() {
    setOpenMenuId(null)
    setIsPanelOpen(false)
  }

  return (
    <nav
      ref={navRef}
      className="main-nav"
      aria-label="Principal"
      onKeyDown={handleKeyDown}
    >
      <button
        ref={toggleRef}
        type="button"
        className="main-nav__toggle"
        aria-expanded={isPanelOpen}
        aria-controls="main-nav-panel"
        onClick={() => setIsPanelOpen((current) => !current)}
      >
        <span className="main-nav__toggle-icon" aria-hidden="true" />
        Menú
      </button>

      <div id="main-nav-panel" className={`main-nav__panel${isPanelOpen ? ' is-open' : ''}`}>
        <ul className="main-nav__list" role="list">
          <li>
            <NavLink to="/" end className="main-nav__link" onClick={handleHomeClick}>
              Inicio
            </NavLink>
          </li>

          {navMenus.map((menu) => {
            const isOpen = openMenuId === menu.id

            return (
              <li
                key={menu.id}
                className="main-nav__item"
                onBlur={(event) => handleItemBlur(event, menu.id)}
              >
                <button
                  id={triggerId(menu.id)}
                  type="button"
                  className="main-nav__link main-nav__trigger"
                  aria-expanded={isOpen}
                  aria-controls={submenuId(menu.id)}
                  onClick={() => toggleMenu(menu.id)}
                >
                  {menu.label}
                  <ChevronIcon />
                </button>

                <ul id={submenuId(menu.id)} className="main-nav__submenu" role="list" hidden={!isOpen}>
                  {menu.options.map((option) => (
                    <li key={option.id}>
                      {/* TODO: las opciones aún no ejecutan ninguna acción (alcance definido). */}
                      <button type="button" className="main-nav__option">
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>

        <SearchBox />
      </div>
    </nav>
  )
}
