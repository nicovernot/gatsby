import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const StatistiquesPage = () => (
  <Layout>
    <SEO
      title="Statistiques - Avantajeux"
      description="Analysez les statistiques détaillées de nos jeux."
    />
    <div style={{ padding: "2rem" }}>
      <h1>Statistiques</h1>
      <p>Explorez les données et tendances de nos jeux !</p>
      {/* Contenu de la page statistiques à ajouter ici */}
    </div>
  </Layout>
);

export default StatistiquesPage;
