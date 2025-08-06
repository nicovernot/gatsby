import React, { useState } from "react";
import { Link } from "gatsby";
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
            <li className="nav-item"><Link to="/" className="nav-link" activeClassName="active">Accueil</Link></li>
            <li className="nav-item"><Link to="/jeux" className="nav-link" activeClassName="active">Jeux</Link></li>
            <li className="nav-item"><Link to="/resultats" className="nav-link" activeClassName="active">Résultats</Link></li>
            <li className="nav-item"><Link to="/statistiques" className="nav-link" activeClassName="active">Statistiques</Link></li>
            <li className="nav-item"><Link to="/mon-compte" className="nav-link" activeClassName="active">Mon Compte</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link" activeClassName="active">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;