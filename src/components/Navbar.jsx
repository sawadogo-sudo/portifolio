import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: '01.about', href: '#about' },
  { label: '02.skills', href: '#skills' },
  { label: '03.projects', href: '#projects' },
  { label: '04.experience', href: '#experience' },
  { label: '05.contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <span className="logo-bracket">[</span>
        <span className="logo-text">SEC</span>
        <span className="logo-bracket">]</span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
