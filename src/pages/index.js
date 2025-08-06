import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Accueil - Avantajeux"
      description="La plateforme des jeux de hasard nouvelle génération."
    />
    <HeroSection />
    {/* Ajoute ici d'autres sections ou composants */}
  </Layout>
);

export default IndexPage;