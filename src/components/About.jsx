import './About.css'

export default function About() {
  const stats = [
    { value: '15+', label: 'CTF Résolus' },
    { value: '3+', label: "Ans d'expérience" },
    { value: '10+', label: 'Projets' },
    { value: '5+', label: 'Certifications' },
  ]

  const profile = `{
  "name": "Sawadogo Amidou",
  "role": "Cybersecurity Engineer",
  "location": "Ouagadougou, BF",
  "email": "amidosawadogo4@gmail.com",
  "certifications": [
    "CEH (Certified Ethical Hacker)",
    "CompTIA Security+",
    "OSCP (en cours)"
  ],
  "interests": [
    "Penetration Testing",
    "Malware Analysis",
    "CTF Competitions",
    "Blue Team Defense"
  ],
  "status": "Open to opportunities"
}`

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">// 01</span>
          <h2 className="section-title">À Propos</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-intro">
              Bonjour ! Je suis un passionné de cybersécurité basé à{' '}
              <span className="glow-text">Ouagadougou, Burkina Faso</span>.
            </p>

            <p>
              Spécialisé dans la sécurité offensive et défensive, je m'intéresse
              particulièrement à la détection des vulnérabilités, aux tests
              d'intrusion et à la protection des infrastructures critiques.
            </p>

            <p>
              Participant actif aux CTF (Capture The Flag), j'ai résolu des
              challenges dans les domaines du Web, du Reverse Engineering, de la
              Cryptographie et du Forensics.
            </p>

            <div className="about-stats">
              {stats.map((s) => (
                <div key={s.label} className="stat-box">
                  <span className="stat-value glow-text">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-terminal">
            <div className="terminal-header">
              <span className="t-dot red" />
              <span className="t-dot yellow" />
              <span className="t-dot green" />
              <span className="t-title">profile.json</span>
            </div>

            <div className="terminal-body">
              <pre>{profile}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}