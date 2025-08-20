# Chronicles : améliorations de la qualité de vie

Pour le forum Chronicles (), plusieurs besoins ont été défini :

- La création d'une page d'accueil ;
- La création d'une fiche de partenariat ;
- La création d'un générateur de fiche, permettant à l'utilisateur de remplir le contenu et de générer directement le contenu de celle-ci dans un nouveau sujet, qu'il pourra choisir de publier ou d'enregistrer en brouillon (publication/brouillon sont des fonctionnalités natives de Forumactif) ;
- Un système d'index sur un sujet permettant d'afficher certains sujets sous la forme d'un index navigable.

Sont disponibles sur ce dossier :

```
chronicles/
├── README.md
├── css_addons/
├── full_pages/
├── functionalities/
```

- `css_addons/` : feuilles de style destinées à l'usage de Chronicles, le CSS de base de Forumactif ayant une limitation de taille.
- `full_pages/` : pages HTML complètes pour l’accueil, la fiche de partenariat et le générateur de fiche, comprenant les parties HTML/CSS/jQuery sur une seule page.
- `functionalities/` : scripts pour les fonctionnalités modifiant le comportement natif de Forumactif et nécessitant généralement une intervention dans les templates du forum.

## Sommaire des scripts de fonctionnalités

- [Module 1 : Index sur sujet](./functionalities/index_mode/README.md)  
  ➝ Script permettant à un sujet de s'afficher sous la forme de bibliothèque, avec un index à la place du profil et un message contenant le sujet sélectionné de l'index.

- [Module 2 : Sauvegarde du personnage sur un message](./functionalities/save_character/README.md)  
  ➝ Script permettant de sauvegarder les informations actuelles du profil de manière transparente et choisie par l'auteur du message.
