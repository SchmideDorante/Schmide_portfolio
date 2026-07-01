# Portfolio — guide de personnalisation

Ce site est fait de fichiers simples (HTML / CSS / JS), sans build ni framework :
tu peux l'ouvrir directement dans un navigateur ou le déposer tel quel chez
n'importe quel hébergeur statique (Netlify, GitHub Pages, Vercel, OVH…).

## 🔧 Ce qu'il faut personnaliser

### 1. Tes informations (fichier `js/content.js`)
Tout le texte du site vit dans ce seul fichier, en 3 langues (`fr`, `en`, `kr`) :
- **`SITE`** en haut du fichier : prénom, nom, e‑mail, réseaux sociaux, chemin du CV.
- **`PROJECT_META`** : liste tes projets (type `video` / `photo` / `digital`, année, couleur `hue`).
- **`CONTENT.fr / .en / .kr`** : tous les textes (accroche, bio, parcours, compétences,
  descriptions de projets…). Modifie le français, puis adapte l'anglais et le coréen —
  les traductions fournies sont volontairement génériques, à affiner selon ton ton.

### 2. Tes images
Le site utilise pour l'instant des **cadres de couleur en guise de placeholders**
(comme des pellicules non développées) pour ne rien afficher de cassé tant que
tu n'as pas ajouté tes vraies images :
- Photo de profil : remplace le `<div class="about-frame">` dans `index.html`
  par `<img src="assets/img/portrait.jpg" alt="Ton nom">`.
- Vignettes de projets : dans `js/main.js`, la fonction `frameColor()` génère un
  dégradé à partir de `hue`. Tu peux la remplacer par une image
  (`background-image: url(...)`) projet par projet si tu préfères de vraies photos.

### 3. Ton CV
Dépose ton CV en PDF dans `assets/cv/` et mets à jour `SITE.cvFile` dans
`js/content.js` avec le bon nom de fichier.

### 4. Le formulaire de contact
Le formulaire valide les champs et affiche un message de succès, mais **n'envoie
rien pour l'instant** (pas de backend). Pour qu'il fonctionne vraiment, connecte-le
à un service comme [Formspree](https://formspree.io) ou
[EmailJS](https://www.emailjs.com/) dans `js/main.js` (fonction `initContactForm`).

### 5. Les couleurs et polices
Tout est piloté par des variables CSS en haut de `css/style.css` (section
`:root`) : `--paper`, `--ink`, `--rec` (l'accent rouge "tally light"), et les
3 polices (`Fraunces` en display, `Inter` en texte courant, `Space Mono` pour
les détails techniques). Change ces valeurs pour ajuster l'identité visuelle
sans toucher au reste du code.

## 📁 Structure des fichiers

```
index.html              → page d'accueil
projects.html           → page "tous les projets" avec filtres
mentions-legales.html   → page légale (à compléter avant mise en ligne)
css/style.css           → tous les styles
js/content.js           → 🔧 TOUT le texte + tes infos (à éditer en premier)
js/main.js              → logique (langue, animations, filtres, formulaire…)
favicon.svg             → icône de l'onglet
assets/cv/              → dépose ton CV ici
assets/img/             → dépose tes photos/visuels ici
```

## ✅ Déjà en place
- Trilingue FR / EN / KR (bouton en haut à droite, mémorisé au retour du visiteur)
- Accessible : navigation clavier, focus visibles, `skip-link`, ARIA, `prefers-reduced-motion`
- Responsive du mobile au grand écran
- Curseur personnalisé (désactivé automatiquement sur écran tactile)
