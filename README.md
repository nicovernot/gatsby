# Avantajeux – Starter Gatsby + Airtable + SEO

Ce projet est un starter Gatsby avec une intégration Airtable, un layout modulaire, et une configuration SEO prête à l’emploi (React Helmet, sitemap, robots.txt).

## 🚀 Démarrage rapide

1. **Clone le repo, installe les dépendances :**
   ```bash
   npm install
   ```

2. **Configure les variables d’environnement :**
   Crée un fichier `.env` à la racine avec :
   ```
   AIRTABLE_API_KEY=ta_clé_airtable
   AIRTABLE_BASE_ID=ton_base_id
   AIRTABLE_TABLE_NAME=nom_de_ta_table
   ```

3. **Lance le projet en développement :**
   ```bash
   npm run develop
   ```

## 📁 Structure du projet

- `src/components/Header.js` – Header réutilisable (responsive).
- `src/components/Footer.js` – Footer riche.
- `src/components/HeroSection.js` – Section Hero animée.
- `src/components/Layout.js` – Layout général avec header/footer.
- `src/components/SEO.js` – Composant SEO (balises meta, Open Graph, Twitter, etc.).
- `src/pages/index.js` – Page d’accueil, utilise Layout/HeroSection/SEO.
- `src/styles/global.css` – CSS global, animations et responsive.
- `gatsby-config.js` – Plugins Gatsby (Airtable, react-helmet, sitemap, robots.txt, etc.).

## 🧩 SEO intégré

- **gatsby-plugin-react-helmet** : gestion dynamique des balises `<title>`, `<meta>`, OpenGraph, Twitter.
- **gatsby-plugin-sitemap** : génération automatique du sitemap.
- **gatsby-plugin-robots-txt** : création automatique du fichier robots.txt.
- **src/components/SEO.js** : composant pour gérer le SEO page par page.

Exemple d’utilisation du composant SEO dans une page :
```jsx
import SEO from "../components/SEO";

<SEO
  title="Accueil - Avantajeux"
  description="La plateforme des jeux de hasard nouvelle génération."
/>
```

## 🌍 Déploiement

- Mets à jour `siteUrl` dans `gatsby-config.js` avec ton vrai domaine avant le build final.
- La génération de sitemap et robots.txt se fait automatiquement lors du build (`npm run build`).

## 📚 Ressources

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Airtable API](https://airtable.com/api)
- [React Helmet](https://github.com/nfl/react-helmet)
- [Gatsby SEO Plugins](https://www.gatsbyjs.com/plugins/)

---

Projet propulsé par [Avantajeux](https://www.avantajeux.com) 🚀