# generator-character-sheet

A HTML/CSS/JS character sheet generator for ForumActif.

# Utilisation avec iframe ForumActif

Pour intégrer l'iframe au forum :
`<iframe id="iframe-predef" title="Générateur de fiches prédéfinis" width="100%" src="${url}type=PREDEFINI"></iframe>`

Les valeurs possibles pour type sont : PREDEFINI, PNJ ou PERSONNAGE selon le type de fiche désiré.
Par défaut, le type est PERSONNAGE.

# Détails

Listes des détails des options développées sur la fiche.

## Blocs

Les blocs sont initialement fermés.
Cliquer sur le titre ouvrira le bloc en lui associant la classe `active`, recliquer supprimera la classe `active` et refermera le bloc.

## Factions et Groupes

Des informations supplémentaires de groupes / factions apparaissent lorsque l'utilisateur change de valeur sélectionnée.
La faction sélectionnée déterminera également la couleur des détails de la fiche pour identifier rapidement l'utilisateur.

## Ajout liens

Dans le cas d'un PNJ / PREDEFINI, il est possible d'ajouter des liens avec d'autres personnages.
L'ajout est dynamique et il est possible de supprimer indépendamment chaque lien.

## Génération de la fiche

La fiche est générée par interpolation des valeurs dans le html final.
L'utilisateur peut ensuite la modifier à sa guise.

### Piste d'améliorations

- Ajouter une validation des champs avant la génération de la fiche pour signaler à l'utilisateur s'il a oublié de remplir des champs
- Ajouter un encart avec le statut "LIBRE" sur les PREDEFINIS pour pouvoir signaler plus rapidement leur disponibilité.
- Donner la possibilité de créer des scénarios / armes avec un générateur similaire.
- Ajouter un champ pour contacter le créateur d'un prédéfini / pnj.
- Ajouter un bouton pour créer automatiquement un sujet avec le contenu de la fiche pour les personnages dans le bon forum.
