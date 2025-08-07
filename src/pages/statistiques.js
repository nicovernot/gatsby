import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { StatistiquesLoto, DataCSV } from "../components/data-sources";

const StatistiquesPage = ({ data }) => {
  // État pour gérer l'onglet actif
  const [ongletActif, setOngletActif] = useState('analyse')
  
  // Vérification de sécurité pour éviter les erreurs de destructuration
  const { 
    allFrequencePairesCsv, 
    allGrillesCsv, 
    allAnalyseNumerosCsv,
    allDistributionSommesCsv,
    images 
  } = data || {};

  // Configuration des onglets
  const onglets = [
    {
      id: 'analyse',
      titre: '🔍 Analyse des Numéros',
      description: 'Tableau interactif avec fréquences et tendances'
    },
    {
      id: 'graphiques',
      titre: '📊 Statistiques Visuelles',
      description: 'Graphiques et explications détaillées'
    },
    {
      id: 'donnees',
      titre: '📈 Données Brutes',
      description: 'Paires fréquentes et grilles optimisées'
    }
  ]

  return (
    <Layout>
      <SEO
        title="Statistiques - Avantajeux"
        description="Analysez les statistiques détaillées de nos jeux de loto avec des explications visuelles."
      />
      <div style={{ padding: "2rem" }}>
        <header style={{ 
          textAlign: "center", 
          marginBottom: "3rem",
          padding: "2rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "12px",
          color: "white"
        }}>
          <h1 style={{ 
            marginBottom: "1rem",
            fontSize: "2.5rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}>
            📈 Statistiques Avantajeux
          </h1>
          <p style={{ 
            fontSize: "1.2rem", 
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
            opacity: "0.9"
          }}>
            Découvrez les données en temps réel de nos jeux de loto, 
            les tendances des joueurs et les explications techniques de nos systèmes.
          </p>
        </header>
        
        {/* Vérification que les données sont disponibles */}
        {(allFrequencePairesCsv || allGrillesCsv || allAnalyseNumerosCsv || images) ? (
          <>
            {/* Système d'onglets */}
            <div style={{
              marginBottom: "2rem",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              overflow: "hidden"
            }}>
              {/* En-têtes des onglets */}
              <div style={{
                display: "flex",
                backgroundColor: "#f8f9fa",
                borderBottom: "1px solid #e9ecef"
              }}>
                {onglets.map((onglet) => (
                  <button
                    key={onglet.id}
                    onClick={() => setOngletActif(onglet.id)}
                    style={{
                      flex: 1,
                      padding: "1.5rem 1rem",
                      border: "none",
                      backgroundColor: ongletActif === onglet.id ? "#007acc" : "transparent",
                      color: ongletActif === onglet.id ? "white" : "#666",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      borderBottom: ongletActif === onglet.id ? "3px solid #0056b3" : "3px solid transparent",
                      fontWeight: ongletActif === onglet.id ? "bold" : "normal",
                      fontSize: "1rem"
                    }}
                    onMouseEnter={(e) => {
                      if (ongletActif !== onglet.id) {
                        e.target.style.backgroundColor = "#e3f2fd"
                        e.target.style.color = "#007acc"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (ongletActif !== onglet.id) {
                        e.target.style.backgroundColor = "transparent"
                        e.target.style.color = "#666"
                      }
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <div style={{ marginBottom: "0.25rem" }}>{onglet.titre}</div>
                      <div style={{ 
                        fontSize: "0.8rem", 
                        opacity: 0.8,
                        lineHeight: "1.2"
                      }}>
                        {onglet.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Contenu des onglets */}
              <div style={{ padding: "2rem" }}>
                {/* Onglet Analyse des Numéros */}
                {ongletActif === 'analyse' && (
                  <div>
                    <div style={{
                      marginBottom: "1.5rem",
                      padding: "1rem",
                      backgroundColor: "#e3f2fd",
                      borderRadius: "8px",
                      borderLeft: "4px solid #007acc"
                    }}>
                      <h3 style={{ margin: "0 0 0.5rem 0", color: "#007acc" }}>
                        🔍 Analyse Complète des Numéros
                      </h3>
                      <p style={{ margin: 0, color: "#555", lineHeight: "1.5" }}>
                        Explorez les tendances de chaque numéro avec un tableau interactif triable. 
                        Analysez les fréquences, retards et écarts pour optimiser vos stratégies de jeu.
                      </p>
                    </div>
                    <DataCSV 
                      allFrequencePairesCsv={null}
                      allGrillesCsv={null}
                      allAnalyseNumerosCsv={allAnalyseNumerosCsv}
                    />
                  </div>
                )}

                {/* Onglet Statistiques Visuelles */}
                {ongletActif === 'graphiques' && (
                  <div>
                    <div style={{
                      marginBottom: "1.5rem",
                      padding: "1rem",
                      backgroundColor: "#e8f5e8",
                      borderRadius: "8px",
                      borderLeft: "4px solid #28a745"
                    }}>
                      <h3 style={{ margin: "0 0 0.5rem 0", color: "#28a745" }}>
                        📊 Visualisations et Explications
                      </h3>
                      <p style={{ margin: 0, color: "#555", lineHeight: "1.5" }}>
                        Découvrez les statistiques avancées avec des graphiques interactifs et des explications 
                        visuelles de nos systèmes de tirage et mécanismes de jeu.
                      </p>
                    </div>
                    <StatistiquesLoto 
                      allFrequencePairesCsv={allFrequencePairesCsv}
                      allGrillesCsv={allGrillesCsv}
                      allAnalyseNumerosCsv={allAnalyseNumerosCsv}
                      allDistributionSommesCsv={allDistributionSommesCsv}
                      images={images}
                    />
                  </div>
                )}

                {/* Onglet Données Brutes */}
                {ongletActif === 'donnees' && (
                  <div>
                    <div style={{
                      marginBottom: "1.5rem",
                      padding: "1rem",
                      backgroundColor: "#fff3e0",
                      borderRadius: "8px",
                      borderLeft: "4px solid #ff9800"
                    }}>
                      <h3 style={{ margin: "0 0 0.5rem 0", color: "#ff9800" }}>
                        📈 Données Détaillées
                      </h3>
                      <p style={{ margin: 0, color: "#555", lineHeight: "1.5" }}>
                        Consultez les paires de numéros les plus fréquentes et nos grilles optimisées 
                        avec leurs scores de performance et caractéristiques détaillées.
                      </p>
                    </div>
                    <DataCSV 
                      allFrequencePairesCsv={allFrequencePairesCsv}
                      allGrillesCsv={allGrillesCsv}
                      allAnalyseNumerosCsv={null}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Indicateur de navigation */}
            <div style={{
              textAlign: "center",
              padding: "1rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              fontSize: "0.9rem",
              color: "#666"
            }}>
              <span style={{ fontWeight: "bold" }}>💡 Astuce :</span> Utilisez les onglets ci-dessus pour naviguer entre les différentes vues statistiques.
              Chaque onglet offre une perspective unique sur les données de nos jeux de loto.
            </div>
          </>
        ) : (
          <div style={{
            textAlign: "center",
            padding: "3rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            border: "1px solid #e9ecef"
          }}>
            <h2 style={{ color: "#666", marginBottom: "1rem" }}>📊 Chargement des données...</h2>
            <p style={{ color: "#888" }}>
              Les statistiques seront disponibles une fois les fichiers CSV et images configurés.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#999", marginTop: "1rem" }}>
              Assurez-vous d'avoir des fichiers dans <code>content/data/</code> et <code>content/images/</code>
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

// Requête GraphQL pour récupérer les données nécessaires
export const query = graphql`
  query StatistiquesPageQuery {
    # Données CSV - Fréquence des paires de numéros
    allFrequencePairesCsv {
      nodes {
        n1
        n2
        count
      }
    }
    
    # Données CSV - Grilles optimisées
    allGrillesCsv {
      nodes {
        grille
        score
        somme
        pairs
        range
        consecutifs
        diversite_unites
        zones
      }
    }
    
    # Données CSV - Analyse des numéros
    allAnalyseNumerosCsv {
      nodes {
        Numero
        Frequence
        Jours_Depuis_Tirage
        Ecart_Moyen_Tirages
      }
    }
    
    # Données CSV - Distribution des sommes
    allDistributionSommesCsv {
      nodes {
        somme_tirage
      }
    }
    
    # Images pour les explications visuelles
    images: allFile(
      filter: { 
        sourceInstanceName: { eq: "images" }
        extension: { in: ["jpg", "jpeg", "png", "gif", "webp"] }
      }
    ) {
      totalCount
      nodes {
        id
        name
        size
        extension
        publicURL
      }
    }
  }
`;

export default StatistiquesPage;
