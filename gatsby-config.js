require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Avantajeux",
    description: "Starter Gatsby avec Airtable",
    siteUrl: "https://www.avantajeux.com", // Remplace par ton vrai domaine !
  },
  plugins: [
    // Source de données Airtable existante
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: process.env.AIRTABLE_TABLE_NAME,
          },
        ],
      },
    },
    // Source de données pour les fichiers (Markdown, CSV, Images)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    // Transformation des fichiers Markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 90,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    // Transformation des fichiers CSV
    `gatsby-transformer-csv`,
    // Traitement des images
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // Plugins existants
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};