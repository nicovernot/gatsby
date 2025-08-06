import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <div className="logo-balls">
            <div className="header-ball header-ball-blue">11</div>
            <div className="header-ball header-ball-green">36</div>
            <div className="header-ball header-ball-purple">50</div>
            <div className="header-ball header-ball-red">15</div>
          </div>
          <div className="header-text">Avantajeux</div>
        </div>
        {/* Navigation */}
        <nav>
          <button
            className="mobile-menu-toggle"
            aria-label="Ouvrir le menu"
            onClick={() => setNavOpen((o) => !o)}
          >
            ☰
          </button>
          <ul className={`nav-menu${navOpen ? " active" : ""}`}>
            <li className="nav-item"><a href="#" className="nav-link active">Accueil</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Jeux</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Résultats</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Statistiques</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Mon Compte</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;