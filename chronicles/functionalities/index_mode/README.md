# Mode indexé

Ce script permet d’afficher les messages du sujet sous la forme d’un index interactif, facilitant la navigation entre les différentes annexes et sous-parties d’un sujet.

### Utilité

- **Affichage indexé** : Génère dynamiquement un index des éléments annexes présents dans chaque message du sujet, avec titres et sous-titres cliquables.
- **Navigation rapide** : Permet d’afficher le contenu d’une annexe ou d’une sous-partie en cliquant sur son titre ou sous-titre dans l’index.
- **Alternance d’affichage** : Ajoute un bouton pour basculer entre la vue classique des messages et la vue indexée.
- **Expérience utilisateur** : Améliore la lisibilité et l’accessibilité des sujets longs ou complexes, notamment dans le cas d'annexes.

### Fonctionnement

- À l’ouverture de la page, le script vérifie si le sujet comporte l'id spécifique indiquant qu'il peut basculer en mode index.
- Il parcourt tous les messages (`.post`) pour construire un index à partir des éléments annexes (`.annex_element`), titres (`.title_annex`) et sous-titres (`.subtitle_annex`).
- Les titres et sous-titres sont ajoutés à l’index sous forme de liens cliquables.
- Cliquer sur un titre ou sous-titre affiche dynamiquement le contenu correspondant dans la zone dédiée.
- Un bouton permet de basculer entre l’affichage indexé et l’affichage classique des messages.

### Templates à modifier

// TODO

### Améliorations possibles

- **Animation et transitions** : Améliorer les effets visuels lors du changement de contenu ou de l’ouverture/fermeture de l’index.
- **Gestion des permissions** : Adapter l’affichage selon les droits de l’utilisateur (admin, membre, invité). Seul un administrateur devrait être capable de basculer vers le mode message étant qu'il est le seul à pouvoir le modifier.
- **Dernière mise à jour** : Forcer l'affichage de la date de dernière mise à jour du message affiché.

### Crédits

Développé par Elyaell pour Chronicles. Merci de conserver les crédits dans les commentaires et le champ dédié.
