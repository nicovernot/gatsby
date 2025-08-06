import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ResultatsPage = () => (
  <Layout>
    <SEO
      title="Résultats - Avantajeux"
      description="Consultez les derniers résultats de nos jeux."
    />
    <div style={{ padding: "2rem" }}>
      <h1>Résultats</h1>
      <p>Découvrez les résultats de nos derniers tirages !</p>
      {/* Contenu de la page résultats à ajouter ici */}
    </div>
  </Layout>
);

export default ResultatsPage;
