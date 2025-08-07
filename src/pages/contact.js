import React, { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ContactPage = () => {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [erreurs, setErreurs] = useState({});
  const [envoye, setEnvoye] = useState(false);

  // Validation simple
  const valider = () => {
    const newErrors = {};
    if (!form.nom.trim()) newErrors.nom = "Le nom est requis.";
    if (
      !form.email.trim() ||
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)
    )
      newErrors.email = "Email valide requis.";
    if (!form.message.trim()) newErrors.message = "Le message est requis.";
    setErreurs(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion de l'envoi
  const handleSubmit = (e) => {
    e.preventDefault();
    if (valider()) {
      setEnvoye(true);
      setForm({ nom: "", email: "", message: "" });
      setErreurs({});
      // Ici, vous pouvez ajouter l'envoi réel (API, service, etc.)
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact - Avantajeux"
        description="Contactez-nous pour toute question ou demande."
      />
      <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
        <h1>Contact</h1>
        <p>N'hésitez pas à nous contacter pour toute question !</p>
        {envoye ? (
          <div
            style={{
              backgroundColor: "#e8f5e8",
              color: "#388e3c",
              padding: "1rem",
              borderRadius: "8px",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            ✅ Merci pour votre message ! Nous vous répondrons rapidement.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              backgroundColor: "#f8f9fa",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            }}
          >
            <div>
              <label htmlFor="nom" style={{ fontWeight: "bold" }}>
                Nom :
              </label>
              <br />
              <input
                id="nom"
                type="text"
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px",
                  border:
                    erreurs.nom && form.nom.trim() !== ""
                      ? "2px solid #f44336"
                      : "1px solid #ccc",
                  borderRadius: "6px",
                  marginTop: "4px",
                }}
                autoComplete="name"
              />
              {erreurs.nom && (
                <div
                  style={{
                    color: "#f44336",
                    fontSize: "0.9rem",
                    marginTop: "4px",
                  }}
                >
                  {erreurs.nom}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="email" style={{ fontWeight: "bold" }}>
                Email :
              </label>
              <br />
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px",
                  border:
                    erreurs.email && form.email.trim() !== ""
                      ? "2px solid #f44336"
                      : "1px solid #ccc",
                  borderRadius: "6px",
                  marginTop: "4px",
                }}
                autoComplete="email"
              />
              {erreurs.email && (
                <div
                  style={{
                    color: "#f44336",
                    fontSize: "0.9rem",
                    marginTop: "4px",
                  }}
                >
                  {erreurs.email}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="message" style={{ fontWeight: "bold" }}>
                Message :
              </label>
              <br />
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: "100%",
                  minHeight: "100px",
                  padding: "10px",
                  border:
                    erreurs.message && form.message.trim() !== ""
                      ? "2px solid #f44336"
                      : "1px solid #ccc",
                  borderRadius: "6px",
                  marginTop: "4px",
                  resize: "vertical",
                }}
              />
              {erreurs.message && (
                <div
                  style={{
                    color: "#f44336",
                    fontSize: "0.9rem",
                    marginTop: "4px",
                  }}
                >
                  {erreurs.message}
                </div>
              )}
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#007acc",
                color: "white",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007acc")}
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default ContactPage;
