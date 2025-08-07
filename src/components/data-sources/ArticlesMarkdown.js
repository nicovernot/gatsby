import React from "react"

const ArticlesMarkdown = ({ posts }) => {
  if (!posts || posts.nodes.length === 0) {
    return (
      <section style={{ marginBottom: "3rem" }}>
        <h2>Articles (Markdown)</h2>
        <p>Aucun article trouvé. Ajoutez des fichiers Markdown dans le dossier <code>content/posts/</code> pour les voir apparaître ici.</p>
      </section>
    )
  }

  return (
    <section style={{ marginBottom: "3rem" }}>
      <h2>Articles (Markdown)</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {posts.nodes.map((post) => (
          <article key={post.id} style={{ 
            border: "1px solid #ddd", 
            padding: "1.5rem", 
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ 
              color: "#333", 
              marginBottom: "0.5rem",
              fontSize: "1.3rem"
            }}>
              {post.frontmatter.title}
            </h3>
            <div style={{ 
              display: "flex", 
              gap: "1rem", 
              marginBottom: "1rem",
              fontSize: "0.9rem",
              color: "#666"
            }}>
              <span>📅 <strong>Date:</strong> {post.frontmatter.date}</span>
              <span>👤 <strong>Auteur:</strong> {post.frontmatter.author}</span>
              <span>⏱️ <strong>Lecture:</strong> {post.timeToRead} min</span>
            </div>
            {post.frontmatter.tags && (
              <div style={{ marginBottom: "1rem" }}>
                <strong>🏷️ Tags:</strong>{" "}
                {post.frontmatter.tags.map((tag, index) => (
                  <span key={index} style={{
                    backgroundColor: "#007acc",
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "12px",
                    fontSize: "0.8rem",
                    marginLeft: "0.5rem"
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p style={{ 
              lineHeight: "1.6",
              color: "#555",
              fontSize: "1rem"
            }}>
              {post.frontmatter.excerpt}
            </p>
            {post.frontmatter.featured && (
              <div style={{ marginTop: "1rem" }}>
                <span style={{
                  backgroundColor: "#ffc107",
                  color: "#000",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  fontWeight: "bold"
                }}>
                  ⭐ Article Vedette
                </span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ArticlesMarkdown
