import './Projects.css'

const projects = [
  {
    id: '01',
    title: 'Network Vulnerability Scanner',
    desc: 'Outil Python automatisé pour scanner et identifier les vulnérabilités réseau, génère des rapports détaillés au format PDF.',
    tags: ['Python', 'Nmap', 'CVE', 'Reporting'],
    type: 'TOOL',
    color: 'cyan',
    github: '#',
    demo: '#',
  },
  {
    id: '02',
    title: 'Web App Pentesting Framework',
    desc: 'Framework de test d\'intrusion pour applications web, intégrant les Top 10 OWASP avec exploitation automatisée.',
    tags: ['Burp Suite', 'Python', 'OWASP', 'API'],
    type: 'FRAMEWORK',
    color: 'red',
    github: '#',
    demo: null,
  },
  {
    id: '03',
    title: 'Malware Sandbox Analysis',
    desc: 'Environnement d\'analyse de malwares en sandbox isolée, avec détection comportementale et génération d\'IOC.',
    tags: ['Cuckoo', 'YARA', 'Python', 'Docker'],
    type: 'RESEARCH',
    color: 'green',
    github: '#',
    demo: null,
  },
  {
    id: '04',
    title: 'CTF Writeups Platform',
    desc: 'Plateforme personnelle documentant les solutions CTF avec des explications détaillées pour la communauté.',
    tags: ['React', 'Markdown', 'CTF', 'Education'],
    type: 'PLATFORM',
    color: 'cyan',
    github: '#',
    demo: '#',
  },
  {
    id: '05',
    title: 'SIEM Dashboard',
    desc: 'Dashboard temps réel pour la surveillance sécurité, intégrant Splunk et des alertes intelligentes basées sur ML.',
    tags: ['Splunk', 'Python', 'ML', 'Kibana'],
    type: 'MONITORING',
    color: 'red',
    github: '#',
    demo: null,
  },
  {
    id: '06',
    title: 'Password Cracker Benchmark',
    desc: 'Étude comparative des méthodes de craquage de mots de passe avec analyse statistique et recommandations.',
    tags: ['Hashcat', 'John', 'Python', 'Research'],
    type: 'RESEARCH',
    color: 'green',
    github: '#',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-number">// 03</span>
          <h2 className="section-title">Projets</h2>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className={`cyber-card project-card project-${p.color}`}>
              <div className="project-top">
                <span className="project-id">{p.id}</span>
                <span className={`project-type type-${p.color}`}>{p.type}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href={p.github} className="project-link">
                  <span>{'{ '}</span>GitHub<span>{' }'}</span>
                </a>
                {p.demo && (
                  <a href={p.demo} className="project-link demo">
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
