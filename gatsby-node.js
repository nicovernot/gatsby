exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Définition explicite du schéma pour le frontmatter Markdown
  const typeDefs = `
    type MarkdownRemarkFrontmatter {
      title: String
      date: Date @dateformat
      slug: String
      author: String
      tags: [String]
      featured: Boolean
      excerpt: String
    }

    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
      timeToRead: Int
    }
  `

  createTypes(typeDefs)
}
