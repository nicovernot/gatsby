import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ArticlesMarkdown, DataCSV } from "../components/data-sources"

const DataSourcesPage = ({ data }) => {
  const { posts, allFrequencePairesCsv, allGrillesCsv, allAnalyseNumerosCsv } = data

  return (
    <Layout>
      <SEO title="Sources de Données" />
      <div style={{ padding: "2rem" }}>
        <header style={{ 
          textAlign: "center", 
          marginBottom: "3rem",
          padding: "2rem",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px",
          border: "1px solid #e9ecef"
        }}>
          <h1 style={{ 
            color: "#333", 
            marginBottom: "1rem",
            fontSize: "2.5rem"
          }}>
            📊 Démonstration des Sources de Données
          </h1>
          <p style={{ 
            fontSize: "1.1rem", 
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Cette page démontre l'intégration de trois types de sources de données dans Gatsby : 
            fichiers Markdown, données CSV et images.
          </p>
        </header>
        
        {/* Composant Articles Markdown */}
        <ArticlesMarkdown posts={posts} />
        
        {/* Composant Données CSV */}
        <DataCSV 
          allFrequencePairesCsv={allFrequencePairesCsv} 
          allGrillesCsv={allGrillesCsv}
          allAnalyseNumerosCsv={allAnalyseNumerosCsv}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    # Requête pour les articles Markdown
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM YYYY", locale: "fr")
          author
          tags
          excerpt
        }
        timeToRead
      }
    }
    
    # Requête pour les données CSV de loto - Fréquence des paires
    allFrequencePairesCsv {
      nodes {
        n1
        n2
        count
      }
    }
    
    # Requête pour les données CSV de loto - Grilles optimisées
    allGrillesCsv {
      nodes {
        grille
        score
        somme
        pairs
        range
        zones
      }
    }
    
    # Requête pour les données CSV de loto - Analyse des numéros
    allAnalyseNumerosCsv {
      nodes {
        Numero
        Frequence
        Jours_Depuis_Tirage
        Ecart_Moyen_Tirages
      }
    }
  }
`

export default DataSourcesPage
