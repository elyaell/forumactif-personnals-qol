# Chronicles : améliorations de la qualité de vie

Ce dossier regroupe l’ensemble des scripts et ressources développés pour améliorer l’expérience utilisateur sur le forum Chronicles.

## Présentation

Les besoins identifiés pour le forum :

- Création d'une page d'accueil personnalisée
- Création d'une fiche de partenariat
- Générateur de fiche : permet à l’utilisateur de remplir le contenu et de générer un nouveau sujet, avec possibilité de publier ou d’enregistrer en brouillon (fonctionnalités natives Forumactif)
- Système d’index navigable : affiche les messages d'un sujet sous forme d’index

## Structure du dossier

```
chronicles/
├── README.md
├── css_addons/
├── full_pages/
├── functionalities/
```

- **css_addons/** : Feuilles de style dédiées à Chronicles, en complément du CSS natif limité de Forumactif.
- **full_pages/** : Pages HTML complètes pour l’accueil, la fiche de partenariat et le générateur de fiche, incluant HTML/CSS/jQuery sur une seule page.
- **functionalities/** : Scripts étendant ou modifiant le comportement natif de Forumactif, nécessitant souvent une modification des templates.

## Fonctionnalités principales

- [Mode indexé](./functionalities/index_mode/README.md)  
  ➝ Permet d’afficher un sujet sous forme de bibliothèque, avec un index interactif à la place du profil et un affichage dynamique du contenu sélectionné.

- [Sauvegarde du personnage V2](./functionalities/save_character/v2/README.md)  
  ➝ Permet à l’utilisateur de sauvegarder les informations de son profil directement depuis un message. La version 2 comprend l'affichage dynamique du profil déjà sauvegardé et du profil courant.
  
- [Sauvegarde du personnage V3](./functionalities/save_character/v3/README.md)  
  ➝ Permet à l’utilisateur de sauvegarder les informations de son profil directement depuis un message. La version 3 comprend la récupération de la liste des personnages de l'utilisateur sur sa feuille rpg, et l'affichage du tableau de personnes sous la forme de cartes sélectionnables.

Pour plus de détails sur chaque module, consultez les fichiers README correspondants.
