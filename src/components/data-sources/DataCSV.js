import React, { useState } from "react"

const DataCSV = ({ allFrequencePairesCsv, allGrillesCsv, allAnalyseNumerosCsv }) => {
  return (
    <section style={{ marginBottom: "3rem" }}>
      <h2>📊 Données CSV de Loto</h2>
      
      {/* Section Fréquence des Paires */}
      {allFrequencePairesCsv && allFrequencePairesCsv.nodes.length > 0 && (
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#333", marginBottom: "1rem" }}>🎲 Top des Paires les Plus Fréquentes</h3>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "1rem" 
          }}>
            {allFrequencePairesCsv.nodes.slice(0, 8).map((paire, index) => (
              <div key={index} style={{
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: index < 3 ? "#fff3e0" : "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                textAlign: "center"
              }}>
                {index < 3 && (
                  <div style={{
                    fontSize: "1.2rem",
                    marginBottom: "0.5rem"
                  }}>
                    {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                  </div>
                )}
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{
                    backgroundColor: "#007acc",
                    color: "white",
                    padding: "6px 10px",
                    borderRadius: "50%",
                    margin: "0 4px",
                    fontWeight: "bold"
                  }}>
                    {paire.n1}
                  </span>
                  <span style={{ color: "#666" }}>•</span>
                  <span style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    padding: "6px 10px",
                    borderRadius: "50%",
                    margin: "0 4px",
                    fontWeight: "bold"
                  }}>
                    {paire.n2}
                  </span>
                </div>
                <p style={{ margin: 0, fontWeight: "bold", color: "#333" }}>
                  {paire.count} fois
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section Grilles Optimisées */}
      {allGrillesCsv && allGrillesCsv.nodes.length > 0 && (
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#333", marginBottom: "1rem" }}>⭐ Grilles Optimisées</h3>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
            gap: "1rem" 
          }}>
            {allGrillesCsv.nodes.slice(0, 6).map((grille, index) => {
              // Parser la grille
              let numeros = []
              try {
                numeros = JSON.parse(grille.grille.replace(/'/g, '"'))
              } catch (e) {
                const matches = (grille.grille || "").match(/\d+/g)
                numeros = matches ? matches.slice(0, 5).map(Number) : [1, 2, 3, 4, 5]
              }
              
              return (
                <div key={index} style={{
                  border: "1px solid #ddd",
                  padding: "1rem",
                  borderRadius: "8px",
                  backgroundColor: parseFloat(grille.score) > 85 ? "#e8f5e8" : "white",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}>
                  <h4 style={{ margin: "0 0 1rem 0", textAlign: "center" }}>
                    Grille #{index + 1}
                  </h4>
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                    gap: "0.5rem",
                    marginBottom: "1rem"
                  }}>
                    {numeros.map((num, i) => (
                      <span key={i} style={{
                        backgroundColor: "#007acc",
                        color: "white",
                        padding: "6px 8px",
                        borderRadius: "50%",
                        fontWeight: "bold",
                        minWidth: "30px",
                        textAlign: "center",
                        fontSize: "0.9rem"
                      }}>
                        {num}
                      </span>
                    ))}
                  </div>
                  <div style={{ fontSize: "0.8rem", lineHeight: "1.4" }}>
                    <p><strong>Score:</strong> {Math.round(parseFloat(grille.score || 0))}%</p>
                    <p><strong>Somme:</strong> {grille.somme}</p>
                    <p><strong>Pairs:</strong> {grille.pairs}/{5 - parseInt(grille.pairs || 0)}</p>
                    <p><strong>Zones:</strong> {grille.zones}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Section Analyse des Numéros avec Tableau Triable */}
      {allAnalyseNumerosCsv && allAnalyseNumerosCsv.nodes.length > 0 && (
        <TableauAnalyseNumeros data={allAnalyseNumerosCsv.nodes} />
      )}

      {/* Message si pas de données */}
      {(!allFrequencePairesCsv || allFrequencePairesCsv.nodes.length === 0) && 
       (!allGrillesCsv || allGrillesCsv.nodes.length === 0) && 
       (!allAnalyseNumerosCsv || allAnalyseNumerosCsv.nodes.length === 0) && (
        <p>Aucune donnée CSV trouvée. Ajoutez des fichiers CSV dans le dossier <code>content/data/</code> pour les voir apparaître ici.</p>
      )}
    </section>
  )
}

// Composant Tableau Triable pour l'Analyse des Numéros
const TableauAnalyseNumeros = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [searchTerm, setSearchTerm] = useState('')

  // Fonction de tri
  const sortedData = React.useMemo(() => {
    let sortableData = [...data]

    // Filtrage par recherche
    if (searchTerm) {
      sortableData = sortableData.filter(item =>
        item.Numero.toString().includes(searchTerm)
      )
    }

    // Tri
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        let aValue = a[sortConfig.key]
        let bValue = b[sortConfig.key]

        // Conversion en nombres pour les colonnes numériques
        if (sortConfig.key === 'Numero' || sortConfig.key === 'Frequence' || 
            sortConfig.key === 'Jours_Depuis_Tirage' || sortConfig.key === 'Ecart_Moyen_Tirages') {
          aValue = parseFloat(aValue) || 0
          bValue = parseFloat(bValue) || 0
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }

    return sortableData
  }, [data, sortConfig, searchTerm])

  // Fonction pour gérer le clic sur l'en-tête de colonne
  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  // Fonction pour obtenir l'icône de tri
  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return ' ↕️'
    }
    return sortConfig.direction === 'asc' ? ' ⬆️' : ' ⬇️'
  }

  // Fonction pour obtenir la couleur de la fréquence
  const getFrequenceColor = (frequence) => {
    const freq = parseInt(frequence)
    if (freq >= 100) return "#4CAF50" // Vert - Très fréquent
    if (freq >= 80) return "#8BC34A"   // Vert clair
    if (freq >= 60) return "#FFC107"   // Jaune
    if (freq >= 40) return "#FF9800"   // Orange
    return "#f44336"                   // Rouge - Peu fréquent
  }

  // Fonction pour obtenir la couleur du retard
  const getRetardColor = (retard) => {
    const jours = parseInt(retard)
    if (jours <= 7) return "#4CAF50"   // Vert - Récent
    if (jours <= 14) return "#8BC34A"  // Vert clair
    if (jours <= 21) return "#FFC107"  // Jaune
    if (jours <= 30) return "#FF9800"  // Orange
    return "#f44336"                   // Rouge - Très en retard
  }

  return (
    <div style={{ marginBottom: "2rem" }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: "1rem",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <h3 style={{ color: "#333", margin: 0 }}>🔍 Analyse Complète des Numéros</h3>
        
        {/* Barre de recherche */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.9rem", color: "#666" }}>Rechercher:</span>
          <input
            type="text"
            placeholder="Numéro..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "6px 12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "0.9rem",
              width: "120px"
            }}
          />
        </div>
      </div>

      {/* Statistiques rapides */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "1rem",
        marginBottom: "1.5rem",
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px"
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#007acc" }}>
            {sortedData.length}
          </div>
          <div style={{ fontSize: "0.8rem", color: "#666" }}>Numéros analysés</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#28a745" }}>
            {Math.round(sortedData.reduce((sum, item) => sum + parseFloat(item.Frequence || 0), 0) / sortedData.length)}
          </div>
          <div style={{ fontSize: "0.8rem", color: "#666" }}>Fréquence moyenne</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ff9800" }}>
            {Math.round(sortedData.reduce((sum, item) => sum + parseFloat(item.Jours_Depuis_Tirage || 0), 0) / sortedData.length)}
          </div>
          <div style={{ fontSize: "0.8rem", color: "#666" }}>Retard moyen (jours)</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#9c27b0" }}>
            {(sortedData.reduce((sum, item) => sum + parseFloat(item.Ecart_Moyen_Tirages || 0), 0) / sortedData.length).toFixed(1)}
          </div>
          <div style={{ fontSize: "0.8rem", color: "#666" }}>Écart moyen</div>
        </div>
      </div>

      {/* Tableau triable */}
      <div style={{ overflowX: "auto", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse",
          backgroundColor: "white",
          minWidth: "600px"
        }}>
          <thead>
            <tr style={{ backgroundColor: "#007acc", color: "white" }}>
              <th 
                style={{ 
                  padding: "12px", 
                  textAlign: "left", 
                  cursor: "pointer",
                  userSelect: "none",
                  position: "relative",
                  fontWeight: "bold"
                }}
                onClick={() => handleSort('Numero')}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#007acc"}
              >
                🎲 Numéro{getSortIcon('Numero')}
              </th>
              <th 
                style={{ 
                  padding: "12px", 
                  textAlign: "left", 
                  cursor: "pointer",
                  userSelect: "none",
                  fontWeight: "bold"
                }}
                onClick={() => handleSort('Frequence')}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#007acc"}
              >
                📊 Fréquence{getSortIcon('Frequence')}
              </th>
              <th 
                style={{ 
                  padding: "12px", 
                  textAlign: "left", 
                  cursor: "pointer",
                  userSelect: "none",
                  fontWeight: "bold"
                }}
                onClick={() => handleSort('Jours_Depuis_Tirage')}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#007acc"}
              >
                ⏰ Retard (jours){getSortIcon('Jours_Depuis_Tirage')}
              </th>
              <th 
                style={{ 
                  padding: "12px", 
                  textAlign: "left", 
                  cursor: "pointer",
                  userSelect: "none",
                  fontWeight: "bold"
                }}
                onClick={() => handleSort('Ecart_Moyen_Tirages')}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#007acc"}
              >
                📏 Écart Moyen{getSortIcon('Ecart_Moyen_Tirages')}
              </th>
              <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold" }}>
                🎯 Tendance
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((numero, index) => {
              const frequence = parseInt(numero.Frequence || 0)
              const retard = parseInt(numero.Jours_Depuis_Tirage || 0)
              const ecart = parseFloat(numero.Ecart_Moyen_Tirages || 0)
              
              // Calcul de la tendance
              let tendance = "Neutre"
              let tendanceColor = "#666"
              let tendanceIcon = "➖"
              
              if (frequence > 90 && retard < 14) {
                tendance = "Chaud"
                tendanceColor = "#4CAF50"
                tendanceIcon = "🔥"
              } else if (frequence < 50 && retard > 21) {
                tendance = "Froid"
                tendanceColor = "#2196F3"
                tendanceIcon = "❄️"
              } else if (retard > 30) {
                tendance = "Retard"
                tendanceColor = "#f44336"
                tendanceIcon = "⏳"
              } else if (frequence > 80) {
                tendance = "Actif"
                tendanceColor = "#FF9800"
                tendanceIcon = "⚡"
              }

              return (
                <tr 
                  key={index} 
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f8f9fa" : "white",
                    borderBottom: "1px solid #eee",
                    transition: "background-color 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e3f2fd"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f8f9fa" : "white"}
                >
                  <td style={{ 
                    padding: "12px", 
                    fontWeight: "bold",
                    fontSize: "1.1rem"
                  }}>
                    <span style={{
                      backgroundColor: "#007acc",
                      color: "white",
                      padding: "6px 10px",
                      borderRadius: "50%",
                      minWidth: "35px",
                      display: "inline-block",
                      textAlign: "center"
                    }}>
                      {numero.Numero}
                    </span>
                  </td>
                  <td style={{ padding: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{
                        backgroundColor: getFrequenceColor(numero.Frequence),
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        minWidth: "40px",
                        textAlign: "center"
                      }}>
                        {numero.Frequence}
                      </span>
                      <div style={{
                        width: "60px",
                        height: "6px",
                        backgroundColor: "#eee",
                        borderRadius: "3px",
                        overflow: "hidden"
                      }}>
                        <div style={{
                          width: `${Math.min(frequence, 100)}%`,
                          height: "100%",
                          backgroundColor: getFrequenceColor(numero.Frequence),
                          borderRadius: "3px"
                        }} />
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "12px" }}>
                    <span style={{
                      color: getRetardColor(numero.Jours_Depuis_Tirage),
                      fontWeight: "bold",
                      fontSize: "1rem"
                    }}>
                      {numero.Jours_Depuis_Tirage}
                    </span>
                  </td>
                  <td style={{ padding: "12px", fontWeight: "500" }}>
                    {ecart.toFixed(1)}
                  </td>
                  <td style={{ padding: "12px" }}>
                    <span style={{
                      color: tendanceColor,
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem"
                    }}>
                      <span>{tendanceIcon}</span>
                      {tendance}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Légende */}
      <div style={{
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        fontSize: "0.85rem"
      }}>
        <h4 style={{ margin: "0 0 0.5rem 0", color: "#333" }}>📚 Légende des Tendances:</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0.5rem" }}>
          <span><strong style={{ color: "#4CAF50" }}>🔥 Chaud:</strong> Fréquent + Récent</span>
          <span><strong style={{ color: "#2196F3" }}>❄️ Froid:</strong> Rare + Ancien</span>
          <span><strong style={{ color: "#f44336" }}>⏳ Retard:</strong> Plus de 30 jours</span>
          <span><strong style={{ color: "#FF9800" }}>⚡ Actif:</strong> Très fréquent</span>
        </div>
      </div>
    </div>
  )
}

export default DataCSV
