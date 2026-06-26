# Portfolio — Iheb Nguili

Portfolio cybersécurité professionnel : React + Vite + Tailwind CSS + Framer Motion.

---

## Déploiement sur GitHub Pages (méthode recommandée)

### Étape 1 — Crée le dépôt GitHub

1. Va sur https://github.com/new
2. Nomme le dépôt exactement : **iheb-portfolio**
3. Laisse-le **Public**
4. Ne coche rien (pas de README, pas de .gitignore)
5. Clique **Create repository**

### Étape 2 — Adapte le nom du dépôt si nécessaire

Si tu as choisi un nom différent pour le dépôt (ex. `portfolio`), ouvre `vite.config.js` et change :
```js
base: '/iheb-portfolio/',
```
par :
```js
base: '/portfolio/',
```

### Étape 3 — Personnalise le contenu

Ouvre **`src/data/portfolioData.js`** et mets à jour :
- `email` → ton adresse email réelle
- `github` → `https://github.com/TON_USERNAME`
- `linkedin` → ton profil LinkedIn
- `githubUsername` → ton username GitHub (pour les stats automatiques)

### Étape 4 — Ajoute ta photo et ton CV

- Place ta photo : `public/avatar.jpg` (carré, 500×500px min)  
  Puis dans `portfolioData.js` : `avatar: "/iheb-portfolio/avatar.jpg"`
- Place ton CV : `public/Iheb_Nguili_CV.pdf`

### Étape 5 — Pousse le code et déploie

Ouvre un terminal dans le dossier du projet :

```bash
# Initialise git
git init
git add .
git commit -m "Initial commit — portfolio Iheb Nguili"

# Connecte ton dépôt GitHub (remplace TON_USERNAME)
git remote add origin https://github.com/TON_USERNAME/iheb-portfolio.git
git branch -M main
git push -u origin main

# Déploie sur GitHub Pages en 1 commande
npm run deploy
```

La commande `npm run deploy` :
1. Rebuild automatiquement le projet
2. Pousse le dossier `dist/` sur la branche `gh-pages`

### Étape 6 — Active GitHub Pages

1. Va sur ton dépôt GitHub → **Settings** → **Pages**
2. Dans **Source** → sélectionne **"Deploy from a branch"**
3. Dans **Branch** → sélectionne **gh-pages** / **root**
4. Clique **Save**

Ton site sera en ligne en 1 à 2 minutes à l'adresse :
**https://TON_USERNAME.github.io/iheb-portfolio/**

### Mises à jour futures

À chaque modification, il suffit de :
```bash
git add .
git commit -m "Update contenu"
git push
npm run deploy
```

---

## Lancer en local

```bash
npm install
npm run dev
```

→ http://localhost:5173/iheb-portfolio/

---

## Architecture

```
src/
├── data/portfolioData.js   ← TOUT le contenu à modifier ici
├── components/
│   ├── ScanBackground.jsx  ← Arrière-plan animé (radar + grille)
│   ├── Navbar.jsx
│   ├── Hero.jsx            ← Effet typewriter
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── GithubStats.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── App.jsx
```
