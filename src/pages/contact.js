import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact - Avantajeux"
      description="Contactez-nous pour toute question ou demande."
    />
    <div style={{ padding: "2rem" }}>
      <h1>Contact</h1>
      <p>N'hésitez pas à nous contacter pour toute question !</p>
      {/* Contenu de la page contact à ajouter ici */}
    </div>
  </Layout>
);

export default ContactPage;
