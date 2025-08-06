import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const JeuxPage = () => (
  <Layout>
    <SEO
      title="Jeux - Avantajeux"
      description="Découvrez notre sélection de jeux de hasard nouvelle génération."
    />
    <div style={{ padding: "2rem" }}>
      <h1>Nos Jeux</h1>
      <p>Bienvenue dans notre univers de jeux passionnants !</p>
      {/* Contenu de la page jeux à ajouter ici */}
    </div>
  </Layout>
);

export default JeuxPage;
