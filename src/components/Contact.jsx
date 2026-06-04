import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connecter à un service email (EmailJS, Formspree, etc.)
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-number">// 05</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-sub">
            Une opportunité ? Un projet ? Envoyez-moi un message.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">// email</span>
              <a href="mailto:contact@votresite.com" className="info-value">
                contact@votresite.com
              </a>
            </div>
            <div className="info-item">
              <span className="info-label">// location</span>
              <span className="info-value">Ouagadougou, Burkina Faso</span>
            </div>
            <div className="info-item">
              <span className="info-label">// availability</span>
              <span className="info-value glow-green">● Open to work</span>
            </div>

            <div className="socials">
              {[
                { label: 'GitHub', url: '#', icon: '⌨' },
                { label: 'LinkedIn', url: '#', icon: '🔗' },
                { label: 'HackTheBox', url: '#', icon: '🎯' },
                { label: 'TryHackMe', url: '#', icon: '🏴' },
              ].map((s) => (
                <a key={s.label} href={s.url} className="social-link">
                  <span className="social-icon">{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="sent-msg">
                <p className="glow-green">✓ Message envoyé avec succès !</p>
                <p>Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">// name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">// email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">// message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet..."
                    required
                    rows={6}
                    className="form-input form-textarea"
                  />
                </div>
                <button type="submit" className="cyber-btn" style={{ width: '100%', textAlign: 'center' }}>
                  Envoyer le Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-text">
          <span className="glow-text">{'</'}</span>
          Votre Nom — Cybersecurity Engineer
          <span className="glow-text">{'>'}</span>
        </p>
        <p className="footer-sub">Built with React · Deployed on Render</p>
      </footer>
    </section>
  )
}
