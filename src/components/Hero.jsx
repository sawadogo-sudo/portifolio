import { useEffect, useState } from 'react'
import './Hero.css'

const roles = [
  'Cybersecurity Engineer',
  'Penetration Tester',
  'Security Analyst',
  'CTF Player',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let i = 0
    let timeout

    if (typing) {
      const interval = setInterval(() => {
        setDisplayed(current.slice(0, i + 1))
        i++
        if (i === current.length) {
          clearInterval(interval)
          timeout = setTimeout(() => setTyping(false), 2200)
        }
      }, 70)
      return () => { clearInterval(interval); clearTimeout(timeout) }
    } else {
      let j = current.length
      const interval = setInterval(() => {
        setDisplayed(current.slice(0, j - 1))
        j--
        if (j === 0) {
          clearInterval(interval)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          timeout = setTimeout(() => setTyping(true), 300)
        }
      }, 40)
      return () => { clearInterval(interval); clearTimeout(timeout) }
    }
  }, [roleIndex, typing])

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">
          <span className="hero-prompt">root@portfolio:~$</span> initializing...
        </p>
        <h1 className="hero-name glitch">
          SAWADOGO<br /><span className="glow-text">Amidou</span>
        </h1>
        <div className="hero-role">
          <span className="role-label">&gt; </span>
          <span className="role-text">{displayed}</span>
          <span className="cursor" />
        </div>
        <p className="hero-desc">
          Passionné par la sécurité offensive et défensive. Je protège les systèmes,
          traque les vulnérabilités et participe aux CTF compétitifs.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="cyber-btn">View Projects</a>
          <a href="#contact" className="cyber-btn" style={{ marginLeft: '16px', borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}>
            Hire Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hex-grid">
          {[...Array(19)].map((_, i) => (
            <div key={i} className="hex" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
        <div className="shield">
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M60 8L12 28V72C12 98 33 121 60 132C87 121 108 98 108 72V28L60 8Z"
              stroke="var(--accent-cyan)"
              strokeWidth="2"
              fill="rgba(0,245,255,0.04)"
            />
            <path
              d="M60 22L26 38V72C26 92 41 110 60 119C79 110 94 92 94 72V38L60 22Z"
              stroke="rgba(0,245,255,0.4)"
              strokeWidth="1"
              fill="rgba(0,245,255,0.02)"
            />
            <text x="60" y="82" textAnchor="middle" fill="var(--accent-cyan)" fontFamily="Share Tech Mono" fontSize="30" fontWeight="bold" style={{ filter: 'drop-shadow(0 0 8px rgba(0,245,255,0.9))' }}>⚡</text>
          </svg>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-line" />
        <span className="scroll-label">scroll</span>
      </div>
    </section>
  )
}
