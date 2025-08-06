import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/global.css";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <html lang="fr" />
      <title>Avantajeux</title>
      <meta name="description" content="Starter Gatsby avec Airtable" />
      {/* Ajoute d'autres balises SEO (Open Graph, Twitter, etc.) ici */}
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;