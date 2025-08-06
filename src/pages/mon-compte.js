import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const MonComptePage = () => (
  <Layout>
    <SEO
      title="Mon Compte - Avantajeux"
      description="Gérez votre compte et vos préférences."
    />
    <div style={{ padding: "2rem" }}>
      <h1>Mon Compte</h1>
      <p>Gérez votre profil et vos préférences ici !</p>
      {/* Contenu de la page mon compte à ajouter ici */}
    </div>
  </Layout>
);

export default MonComptePage;
