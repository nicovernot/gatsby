import React from "react";

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-content">
        {/* Section A propos */}
        <div className="footer-section">
          <div className="footer-logo">
            <div className="footer-logo-balls">
              <div className="footer-logo-ball header-ball-blue">11</div>
              <div className="footer-logo-ball header-ball-green">36</div>
              <div className="footer-logo-ball header-ball-purple">50</div>
              <div className="footer-logo-ball header-ball-red">15</div>
            </div>
            <div className="footer-logo-text">Avantajeux</div>
          </div>
          <p style={{ color: "#ccc", lineHeight: 1.6, marginBottom: 20 }}>
            Votre plateforme de jeux de hasard préférée. Jouez responsablement et tentez votre chance pour gagner gros !
          </p>
          <div className="social-links">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📷</a>
            <a href="#" className="social-link">💼</a>
          </div>
        </div>
        {/* Section Jeux */}
        <div className="footer-section">
          <h3>🎰 Nos Jeux</h3>
          <ul>
            <li><a href="#">Loto Classic</a></li>
            <li><a href="#">Euro Millions</a></li>
            <li><a href="#">Scratch Cards</a></li>
            <li><a href="#">Keno</a></li>
            <li><a href="#">Bingo</a></li>
            <li><a href="#">Jeux Instantanés</a></li>
          </ul>
        </div>
        {/* Section Services */}
        <div className="footer-section">
          <h3>⚙️ Services</h3>
          <ul>
            <li><a href="#">Mon Compte</a></li>
            <li><a href="#">Historique</a></li>
            <li><a href="#">Statistiques</a></li>
            <li><a href="#">Support Client</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Guide Débutant</a></li>
          </ul>
        </div>
        {/* Section Newsletter */}
        <div className="footer-section">
          <div className="newsletter">
            <h3>📧 Newsletter</h3>
            <p style={{ color: "#ccc", marginBottom: 15 }}>
              Recevez les derniers résultats et offres spéciales !
            </p>
            <form className="newsletter-form" onSubmit={e => {
              e.preventDefault();
              alert("Merci pour votre inscription ! 🎉");
              e.target.reset();
            }}>
              <input type="email" className="newsletter-input" placeholder="Votre email..." required />
              <button type="submit" className="newsletter-btn">S'abonner</button>
            </form>
            <p style={{ fontSize: "0.8rem", color: "#999", marginTop: 10 }}>
              🔒 Vos données sont protégées
            </p>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="copyright">
          © 2025 Avantajeux. Tous droits réservés. | Jeu responsable +18 ans
        </div>
        <div className="footer-links">
          <a href="#">Conditions d'utilisation</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">Jeu responsable</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;