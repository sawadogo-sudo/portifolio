import './Experience.css'

const experiences = [
  {
    period: '2023 — Present',
    role: 'Security Analyst',
    company: 'Entreprise XYZ',
    location: 'Ouagadougou, BF',
    desc: 'Surveillance SOC, réponse aux incidents, analyse de logs et gestion des vulnérabilités de l\'infrastructure IT.',
    tags: ['SIEM', 'Incident Response', 'Threat Hunting'],
  },
  {
    period: '2022 — 2023',
    role: 'Penetration Tester (Junior)',
    company: 'CyberSec Agency',
    location: 'Remote',
    desc: 'Tests d\'intrusion sur applications web et réseaux internes, rédaction de rapports de vulnérabilités pour clients.',
    tags: ['Web Pentest', 'Burp Suite', 'Nmap', 'Reporting'],
  },
  {
    period: '2021 — 2022',
    role: 'Security Intern',
    company: 'Tech Startup',
    location: 'Abidjan, CI',
    desc: 'Audit de sécurité, configuration de pare-feu, mise en place de politiques de sécurité et sensibilisation des équipes.',
    tags: ['Audit', 'Firewall', 'Security Awareness'],
  },
]

const certifications = [
  { name: 'CEH v12', issuer: 'EC-Council', year: '2023', status: 'active' },
  { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2022', status: 'active' },
  { name: 'OSCP', issuer: 'Offensive Security', year: '2024', status: 'ongoing' },
  { name: 'eJPT', issuer: 'eLearnSecurity', year: '2021', status: 'active' },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-number">// 04</span>
          <h2 className="section-title">Expériences</h2>
        </div>

        <div className="exp-layout">
          <div className="exp-timeline">
            <h3 className="exp-section-title">
              <span className="glow-text">{'>'}</span> Parcours Professionnel
            </h3>
            {experiences.map((exp, i) => (
              <div key={i} className="exp-item">
                <div className="exp-dot" />
                <div className="exp-content cyber-card">
                  <div className="exp-header">
                    <div>
                      <h4 className="exp-role">{exp.role}</h4>
                      <p className="exp-company">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <p className="exp-desc">{exp.desc}</p>
                  <div className="exp-tags">
                    {exp.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="exp-certs">
            <h3 className="exp-section-title">
              <span className="glow-text">{'>'}</span> Certifications
            </h3>
            <div className="certs-list">
              {certifications.map((cert) => (
                <div key={cert.name} className={`cert-item ${cert.status === 'ongoing' ? 'cert-ongoing' : ''}`}>
                  <div className="cert-left">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                  <div className="cert-right">
                    <span className="cert-year">{cert.year}</span>
                    <span className={`cert-status ${cert.status}`}>
                      {cert.status === 'ongoing' ? '⏳ En cours' : '✓ Obtenu'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
