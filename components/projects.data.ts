
export type Project = {
  title: string
  meta: string
  bullets: string[]
  href?: string
}
export const projects: Project[] = [
  {
    title: 'Veille vulnérabilités ANSSI',
    meta: '2025 — Python',
    bullets: [
      'Contexte : surveiller bulletins et alertes.',
      'Problème : détection tardive.',
      'Action : scraping + parsing + alerting (e-mail/CLI).',
      'Résultat : réaction plus rapide.'
    ]
  },
  {
    title: 'API Restaurant',
    meta: '2024 — C#, SQL',
    bullets: [
      'Contexte : CRUD propre pour un menu.',
      'Problème : structure & validation.',
      'Action : schéma SQL + endpoints + contrôles.',
      'Résultat : API opérationnelle et documentée.'
    ]
  },
  {
    title: 'IA Gomoku',
    meta: '2023 — Python',
    bullets: [
      'Contexte : agent de jeu pédagogique.',
      'Problème : évaluation et recherche efficaces.',
      'Action : heuristiques + recherche.',
      'Résultat : 1er de la promo.'
    ],
    href: 'https://github.com/noob216/IA-GOMOKU'
  },
  {
    title: 'Ligue 1 — Match Prediction Pipeline',
    meta: '2023 — Python, XGBoost',
    bullets: [
      'Contexte : prédire les résultats (2013–2023).',
      'Problème : pipeline complet de features & modèle.',
      'Action : ingestion (8 sources), EDA, features, prétraitement, comparaison (Logistic, SVM, Ridge, LDA, XGBoost).',
      'Résultat : sélection d’XGBoost + export des prédictions.'
    ],
    href: 'https://github.com/noob216/ligue1-match-prediction-pipeline'
  },
  {
    title: 'Classification — IA KNN',
    meta: '2023 — Python',
    bullets: [
      'Contexte : classification robuste avec classes déséquilibrées.',
      'Problème : dépendance scikit-learn & équilibre des classes.',
      'Action : implémentation manuelle KNN, normalisation, polynômes, Borderline-SMOTE, tuning étendu.',
      'Résultat : meilleures performances et contrôle fin.'
    ],
    href: 'https://github.com/noob216/Classification-IA-Knn'
  },
  {
    title: 'Équation d’Allen–Cahn (EDP)',
    meta: '2023 — Python / Notebook',
    bullets: [
      'Contexte : étude numérique d’une EDP.',
      'Problème : stabilité et précision des schémas.',
      'Action : discrétisation & simulations, analyse de convergence.',
      'Résultat : rapport et notebook reproductible.'
    ],
    href: 'https://github.com/noob216/Projet-Equation-Differentiellelle/blob/main/code.ipynb'
  },
  {
    title: 'TransConnect — Projet POO (C#)',
    meta: '2023 — C#',
    bullets: [
      'Contexte : gestion d’une flotte de transport.',
      'Problème : modéliser clients, salariés, commandes, graphes.',
      'Action : app console, CRUD, stats, BFS/DFS, plus court chemin, Floyd–Warshall, persistance CSV.',
      'Résultat : outil fonctionnel pour supervision & analyses.'
    ],
    href: 'https://github.com/noob216/TransConnect--Projet-POO-'
  }
]
