import { useId, useState } from 'react'
import './SearchBox.css'

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="2" />
      <path d="M13 13l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function SearchBox({
  label = 'Buscar en el repertorio',
  placeholder = 'Buscar en el repertorio...',
}) {
  const inputId = useId()
  const [query, setQuery] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // TODO: conectar con la búsqueda real. Fuera de alcance de esta base.
  }

  return (
    <form className="search-box" role="search" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className="search-box__input"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />
      <button className="search-box__submit" type="submit" aria-label="Buscar">
        <SearchIcon />
      </button>
    </form>
  )
}
