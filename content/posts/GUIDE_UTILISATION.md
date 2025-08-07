# 🎯 Guide d'utilisation - Générateur Loto Intelligent

## ✅ **CORRECTIFS APPLIQUÉS** (4 août 2025)

### 🔧 **Correction ML** : Bug des features corrigé
- ✅ Modèles ML fonctionnels (10 features au lieu de 9)
- ✅ Plus de warnings "GradientBoostingRegressor expecting 10 features"
- ✅ Scores ML > 0 (fonctionnels)

### 🎨 **Correction d'affichage** : Numéros propres
- ✅ **AVANT** : `[np.int64(8), np.int64(12), np.int64(21)]`
- ✅ **APRÈS** : `[8, 12, 21]` (affichage propre)

## 📋 Prérequis

Avant de lancer le script, assurez-vous d'avoir :

1. **Python 3.7+** installé
2. **Dépendances** installées :
   ```bash
   pip install -r requirements.txt
   ```
3. **Fichier CSV** des tirages loto au format attendu
4. **Correction ML** appliquée (si pas encore fait) :
   ```bash
   python quick_fix.py
   ```

## 🚀 Lancement du script principal

### ⚠️ **IMPORTANT** : Utiliser l'environnement virtuel
```bash
# Navigation vers le répertoire
cd /home/nvernot/projets/loto_keno

# Commande avec environnement virtuel
/home/nvernot/projets/loto_keno/venv/bin/python loto/duckdb_loto.py --csv data/votre_fichier.csv
```

### Commande de base
```bash
/home/nvernot/projets/loto_keno/venv/bin/python loto/duckdb_loto.py --csv /chemin/vers/votre/fichier.csv
```

### Exemples pratiques

#### 1. Générer 3 grilles avec stratégie par défaut
```bash
/home/nvernot/projets/loto_keno/venv/bin/python loto/duckdb_loto.py --csv data/loto_tirages.csv --grids 3
```

#### 2. Avec analyses graphiques et exports
```bash
/home/nvernot/projets/loto_keno/venv/bin/python loto/duckdb_loto.py --csv data/loto_tirages.csv --grids 5 --plots --export-stats
```

#### 3. Choisir une stratégie spécifique
```bash
/home/nvernot/projets/loto_keno/venv/bin/python loto/duckdb_loto.py --csv data/loto_tirages.csv --strategy focus_retard --grids 3
```

#### 4. Utiliser la configuration ML optimisée
```bash
python loto/duckdb_loto.py --csv data/loto_tirages.csv --config-file loto/strategies_ml.yml --strategy equilibre --grids 5 --plots
```

## 📊 Options disponibles

| Option | Description | Exemple |
|--------|-------------|---------|
| `--csv` | Fichier CSV des tirages (OBLIGATOIRE) | `--csv data/loto.csv` |
| `--grids` | Nombre de grilles à générer | `--grids 10` |
| `--plots` | Génère les graphiques d'analyse | `--plots` |
| `--export-stats` | Exporte les statistiques en CSV | `--export-stats` |
| `--config-file` | Fichier de configuration | `--config-file loto/strategies_ml.yml` |
| `--strategy` | Stratégie à utiliser | `--strategy momentum_ml` |

## 📁 Format du fichier CSV requis

Le fichier CSV doit contenir ces colonnes :
```csv
date_de_tirage;boule_1;boule_2;boule_3;boule_4;boule_5;numero_chance
01/01/2024;5;12;23;31;45;7
08/01/2024;8;15;27;33;48;3
```

## 🎮 Stratégies disponibles

### Avec ML (fichier `strategies_ml.yml`)
- `equilibre` : Stratégie équilibrée avec ML (recommandée)
- `momentum_ml` : Focus sur le momentum + ML
- `focus_retard` : Focus sur les numéros en retard + ML
- `contrarian_ml` : Stratégie contrariante avec ML
- `pattern_hunter` : Chasseur de patterns avancé
- `aggressive_ml` : Maximum d'utilisation du ML

### Classiques (fichier `strategies.yml`)
- `equilibre` : Approche équilibrée
- `focus_retard` : Focus retards
- `frequence` : Basé sur les fréquences
- `contrarian` : Approche contrariante

## 📈 Exemples de commandes complètes

### Pour une utilisation optimisée (recommandée)
```bash
# Génération de 5 grilles avec ML et analyses complètes
python loto/duckdb_loto.py \
  --csv data/loto_historique.csv \
  --config-file loto/strategies_ml.yml \
  --strategy equilibre \
  --grids 5 \
  --plots \
  --export-stats
```

### Pour des tests rapides
```bash
# Test rapide avec données de test
python test_optimizations_simple.py
```

### Pour du backtesting
```bash
# Test sur des données historiques spécifiques
python loto/duckdb_loto.py \
  --csv data/loto_2023.csv \
  --strategy momentum_ml \
  --grids 10 \
  --export-stats
```

## 📊 Sorties générées

Le script génère automatiquement :

1. **Grilles optimisées** affichées dans le terminal
2. **Fichier CSV** : `loto_stats_exports/grilles.csv`
3. **Graphiques** (si `--plots`) dans `loto_analyse_plots/` :
   - Fréquences des numéros
   - Analyse des retards
   - Heatmap des paires
   - Distribution pairs/impairs
   - Analyse des sommes
4. **Statistiques CSV** (si `--export-stats`) dans `loto_stats_exports/` :
   - `analyse_numeros.csv`
   - `distribution_pairs_impairs.csv`
   - `frequence_paires.csv`
   - etc.

## 🔧 Résolution de problèmes

### Erreur "ModuleNotFoundError"
```bash
pip install pandas numpy duckdb matplotlib seaborn PyYAML scikit-learn scipy
```

### Erreur ML "features mismatch"
```bash
python quick_fix.py
```

### Fichier CSV non reconnu
Vérifiez le format :
- Séparateur : `;` (point-virgule)
- Colonnes exactes requises
- Dates au format `dd/mm/yyyy`

### Performance lente
1. Réduisez le nombre de grilles : `--grids 3`
2. Désactivez les graphiques temporairement
3. Utilisez un fichier CSV plus petit pour les tests

## 🎯 Workflow recommandé

1. **Test initial** :
   ```bash
   python test_optimizations_simple.py
   ```

2. **Génération optimisée** :
   ```bash
   python loto/duckdb_loto.py --csv votre_fichier.csv --config-file loto/strategies_ml.yml --strategy equilibre --grids 5 --plots
   ```

3. **Analyse des résultats** :
   - Consultez les graphiques dans `loto_analyse_plots/`
   - Ouvrez `loto_stats_exports/grilles.csv` pour voir les grilles générées

4. **Optimisation** :
   - Testez différentes stratégies
   - Ajustez le nombre de grilles selon vos besoins

---

*Dernière mise à jour* : 4 août 2025  
*Version* : 2.0 (avec correction ML)
