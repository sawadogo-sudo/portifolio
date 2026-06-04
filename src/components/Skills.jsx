import './Skills.css'

const skillCategories = [
  {
    icon: '🔴',
    title: 'Offensive Security',
    color: 'red',
    skills: [
      { name: 'Penetration Testing', level: 88 },
      { name: 'Exploitation (Metasploit)', level: 82 },
      { name: 'Web App Hacking (OWASP)', level: 90 },
      { name: 'Reverse Engineering', level: 70 },
    ],
  },
  {
    icon: '🔵',
    title: 'Defensive Security',
    color: 'cyan',
    skills: [
      { name: 'SIEM / Log Analysis', level: 78 },
      { name: 'Incident Response', level: 80 },
      { name: 'Network Monitoring', level: 85 },
      { name: 'Malware Analysis', level: 72 },
    ],
  },
  {
    icon: '🟢',
    title: 'Tools & Languages',
    color: 'green',
    skills: [
      { name: 'Python / Bash Scripting', level: 86 },
      { name: 'Wireshark / Nmap', level: 92 },
      { name: 'Burp Suite', level: 88 },
      { name: 'Linux / Kali', level: 94 },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-number">// 02</span>
          <h2 className="section-title">Compétences</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className={`cyber-card skill-card skill-${cat.color}`}>
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-meta">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className={`skill-bar skill-bar-${cat.color}`}
                        style={{ '--target': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-row">
          {['Kali Linux', 'Burp Suite', 'Metasploit', 'Wireshark', 'Nmap', 'Ghidra', 'IDA Pro', 'Docker', 'Splunk', 'Snort', 'Suricata', 'Python'].map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
