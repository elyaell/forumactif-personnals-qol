# Conserver le personnage sur un message

Ce script permet de modifier dynamiquement l’affichage du profil d’un post sur un sujet, afin d’y afficher un autre personnage que celui du compte ayant posté.

Le script se découpe en deux parties :

- **Afficher les informations** : L'affichage des informations sur les messages, les sujets de recherches et la prévisualisation de message (qui affiche les précédents messages).
- **Enregistrer les informations** : Donner à l'utilisateur la possibilité de choisir d'enregistrer ses informations actuelles sur un message.

## Utilité

- **Changement d’identité visuelle** : Permet d’afficher l’avatar, le nom, le rang et la couleur de groupe d’un personnage alternatif pour chaque message (utile notamment pour les comptes administratifs ou PNJ).
- **Personnalisation des posts** : Utile pour les forums RPG où un utilisateur peut incarner plusieurs personnages sur un même compte.
- **Continuité des messages** : Si un compte est recyclé pour un autre personnage, on évite une perte de contexte. Les messages écrits par l'ancien personnage continueront d'apparaître sous l'avatar, le nom et la couleur de cet ancien personnage.

## Afficher les informations

- Le script cible tous les éléments `.switch-profile` et les masque.
- Pour chaque élément, il récupère les informations du personnage alternatif (avatar, nom, rang, couleur de groupe).
- Il applique ces informations au post correspondant en modifiant le DOM.
- Les sections d’informations utilisateur et de contact sont supprimées pour éviter les incohérences.

### Modification de templates

#### search_result_posts

Avantage de **cohérence RPG** : Permet de retrouver facilement quel personnage a posté, indépendamment du compte utilisateur.

- Ajoute une variable `poster_name` pour cibler le nom du personnage dans l’interface.
- Utilise un script pour masquer les éléments `.switch-profile` et appliquer les informations du personnage alternatif (nom, couleur de groupe) à l’affichage du résultat.
- Modifie le DOM pour afficher le nom et la couleur du personnage dans la section des informations du sujet.

#### preview_topic_review

## Enregistrer les informations

### Modification de templates

#### posting_body

## Améliorations possibles

- Sauvegarder dans le profil l'utilisation automatique de la fonctionnalité.
- Sauvegarder directement sur le profil du personnage les différentes identités et lui donner la possibilité de choisir parmi celles-ci.
- Donner à l'utilisateur la possibilité d'afficher uniquement un avatar pour un message spécifique sans avoir à changer son avatar sur le profil.
