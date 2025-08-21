# Annexes Library — Bibliothèque interactive

Ce dossier regroupe les scripts et ressources permettant d’ajouter une bibliothèque interactive pour les annexes et informations volumineuses sur les forums Forumactif.

## Présentation

Ce module a été conçu pour faciliter la navigation et l’organisation des contenus annexes sur les forums riches en informations. Développé à la demande de Krow.

## Structure du dossier

```
annexes-library/
├── README.md
├── css/
├── js/
├── templates/
```

- **css/** : Feuilles de style dédiées à la bibliothèque interactive.
- **js/** : Scripts JavaScript pour la gestion de l’index, de la navigation et des interactions.
- **templates/** : Exemples ou modifications de templates nécessaires pour l’intégration du module.

## Objectif

Les axes de développement principaux sont :

- Ne pas avoir à modifier la structure de l'index à chaque ajout d'informations
- Avoir un système d'étiquettes permettant à l'utilisateur d'avoir une recherche simplifiée
- Avoir une mise en page simple pour ne pas submerger l'utilisateur d'informations

## Utilisation dans Forumactif

### Utilisation basique :

1. Créer une page HTML
2. Coller le contenu de `style.css` entre les balises `<style>`
3. Coller le contenu de `app.js` entre les balises `<script type="text/javascript">`

### Réflexions

- Le mélange de HTML/CSS/jQuery sur une même page complexifie la lecture.
- Les pages HTML de Forumactif sont limitées en nombre de caractères et d’entrées.
- Solutions : héberger le contenu ailleurs, minifier la page web, ou répartir sur plusieurs pages.

## Fonctionnalités principales

- Génération automatique de l’index à partir des titres et sous-titres
- Système d’étiquettes pour filtrer le contenu (démonstration page 1)
- Navigation dynamique entre les sections
- Expansion/rétractation des éléments (démonstration page 1)

## Exemple HTML minimal

Un exemple HTML minimal compatible avec le script `app.js` :

```html
<body>
  <div id="tags"></div>
  <div id="index"></div>
  <div id="pages">
    <div id="intro-content">
      <h1 class="index-title">Introduction</h1>
      <div class="item">
        <div class="item-title-expand"><i class="bi-arrows-angle-expand">[+]</i></div>
        <div class="tags">
          <span>général</span>
        </div>
        <p>Bienvenue dans la bibliothèque interactive.</p>
      </div>
    </div>
    <div id="section1-content">
      <h1 class="index-title">Section 1</h1>
      <h2>Sous-section A</h2>
      <div class="item">
        <div class="item-title-expand"><i class="bi-arrows-angle-expand">[+]</i></div>
        <div class="tags">
          <span>exemple</span>
          <span>section1</span>
        </div>
        <p>Contenu de la section 1, sous-section A.</p>
      </div>
    </div>
  </div>
  <script src="app.js"></script>
</body>
</html>
```

## Règles minimales pour les éditeurs

- Si un nom de classe utilisé dans le CSS/JS est modifié, veillez à mettre à jour tous les éléments concernés.

## Inclusions

- Icônes : bootstrap-icons@1.11.3 (à inclure dans `<head>`)
- jQuery : 3.6.0.min.js

## Zones d'améliorations

- Recherche plein texte en plus des étiquettes
- Pagination / lazy-loading pour les grandes bibliothèques
- Exclusion des tags de la recherche
- Recherche non inclusive pour afficher les éléments répondant à au moins un critère
