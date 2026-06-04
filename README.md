# Portfolio Cybersécurité — React + Vite

Portfolio personnel cybersécurité avec thème dark/cyber, animations et design créatif.

## Structure

```
src/
  components/
    Navbar.jsx / .css      → Navigation fixe
    Hero.jsx / .css        → Section d'accueil avec typing effect
    About.jsx / .css       → À propos + terminal JSON
    Skills.jsx / .css      → Compétences avec barres animées
    Projects.jsx / .css    → Grille de projets
    Experience.jsx / .css  → Timeline + certifications
    Contact.jsx / .css     → Formulaire de contact
  App.jsx
  main.jsx
  index.css               → Variables CSS + styles globaux
```

## Lancer en local

```bash
npm install
npm run dev
```

## Personnaliser

Modifie ces fichiers pour mettre tes vraies informations :

- `Hero.jsx` → ton nom, ta bio
- `About.jsx` → ta description, tes stats
- `Skills.jsx` → tes vraies compétences et niveaux
- `Projects.jsx` → tes projets réels avec liens GitHub
- `Experience.jsx` → ton parcours et certifications
- `Contact.jsx` → ton email, tes réseaux sociaux

## Déploiement sur Render

### Méthode 1 — via render.yaml (recommandée)
1. Push le projet sur GitHub
2. Sur render.com → "New" → "Static Site"
3. Connecte ton repo GitHub
4. Render détecte automatiquement le `render.yaml`

### Méthode 2 — manuel
1. Push sur GitHub
2. render.com → New → Static Site
3. Paramètres :
   - **Build Command** : `npm install && npm run build`
   - **Publish Directory** : `dist`
4. Clique "Deploy"

## Connecter un formulaire de contact

Pour que le formulaire fonctionne, utilise l'une de ces solutions :

- **[Formspree](https://formspree.io)** (gratuit, simple)
- **[EmailJS](https://emailjs.com)** (gratuit, sans backend)
- **[Web3Forms](https://web3forms.com)** (gratuit)

Exemple avec Formspree dans `Contact.jsx` :
```js
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/VOTRE_ID', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: { 'Content-Type': 'application/json' },
  })
  setSent(true)
}
```
