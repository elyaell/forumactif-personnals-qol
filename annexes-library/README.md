# Bibliothèque interactive

## Objectif

Créer une page HTML/CSS/jQuery pour service de bibliothèque d'information. Le forum pour lequel la bibliothèque a été envisagée contient un grand nombre d'annexes, qui s'étendent sur plusieurs sujets de plusieurs pages.

Les axes de développement principaux sont :

- ne pas avoir à modifier la structure de l'index à chaque ajout d'informations
- avoir un système de tags permettant à l'utilisateur d'avoir une recherche simplifiée
- avoir une mise en page simple pour ne pas submerger l'utilisateur d'informations

## Utilisation dans FA (Forumactif)

### Utilisation basique :

1. Créer une page HTML
2. Coller le contenu de `style.css` entre les balises :

```html
<style>
  /* contenu de style.css */
</style>
```

3. Coller le contenu de `app.js` entre les balises :

```html
<script type="text/javascript">
  // contenu de app.js
</script>
```

### Pour aller plus loin

Cette approche comporte plusieurs points négatifs :

- Le mélange de HTML/CSS/jQuery sur une même page complexifie la lecture ;
- Les pages HTML de Forumactif sont tenues à un nombre maximum de caractères, ce qui limitera le nombre d'entrées qu'il est possible d'ajouter. Dans ce cas, il sera nécessaire de charger une autre page HTML contenant d'autres données, mais le processus peut s'avérer inutilement fastidieux et le nombre de pages Forumactif sont limitées également.

Plusieurs solutions sont envisageables :

- Héberger le contenu ou une partie de celui-ci sur un autre site qui n'aura pas ces contraintes (la modification sera alors plus compliquée pour les personnes autres que le créateur) ;
- Minifier la page web une fois celle-ci finalisée (peut rendre l'ajout d'informations dans le futur difficile).

## Fonctionnalités

### Génération automatique de l'index

- Le script parcourt les titres (`h1.index-title`) et les sous-titre (`h2`) pour créer un index navigable à partir du contenu de la page.
- La création automatique de l'index permet à l'auteur de se concentrer sur le contenu : dès qu'un nouveau contenu est ajouté, il sera automatiquement ajouté.

### Gestions des étiquettes

- Démonstration sur la page 1.
- Un système d'étiquettes à été installé : le script parcourt toutes les étiquettes (`.tags span`) présents dans le contenu des textes et les affiche dans une barre de filtres. Chaque étiquette n'apparaît qu'une seule fois, il n'y aura donc pas de duplication.
- Lorsque l'utilisateur sélectionne une étiquette, seuls les éléments le contenant seront affichés.
- Si l'utilisateur sélectionne plusieurs étiquettes, seul les éléments répondant à l'intersection des différents critères seront affichés.

### Navigation

- Au chargement initial de la page, la sélection est automatiquement positionnée sur l'introduction.
- Cliquer sur un élément de l'index ou du sous-index affiche la section correspondante et met à jour l'index et le contenu désormais actifs.

### Expansion des cartes

- Démonstration sur la page 1.
- Une fonctionnalité d'extension / rétractation permet de faire agrandir / réduire un élément de classe `item`.

#### Exemple HTML minimal

Un exemple HTML minimal qui fonctionne avec le script `app.js` :

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

- Si un nom de classe spécifiquement utilisé dans le CSS / JS est modifié, veillez à ce que les fichiers tous les éléments utilisant cette classe soient modifiés en conséquences.

## Inclusions :

Icônes : bootstrap-icons@1.11.3 (à inclure dans `head`)

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
/>
```

jQuery : 3.6.0.min.js

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

## Zones d'améliorations

- Recherche plein texte en plus des étiquettes
- Pagination / lazy-loading pour les grandes bibliothèques
- Exclusion des tags de la recherche
- Recherche non inclusive pour remonter les éléments répondants à au moins un des critères
