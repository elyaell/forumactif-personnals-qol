# Conserver le personnage sur un message

Ce script permet de modifier dynamiquement l’affichage du profil d’un post sur un sujet, afin d’y afficher un autre personnage que celui du compte ayant posté. L'élément majeur pour cette évolution est que le résultat final doit impliquer le moins de manipulations à faire par l'utilisateur pour lui faciliter l'adaptation.

Le script se découpe en deux parties :

- **Afficher les informations** : L'affichage des informations sur les messages, les sujets de recherches et la prévisualisation de message (qui affiche les précédents messages).
- **Enregistrer les informations** : Donner à l'utilisateur la possibilité de choisir d'enregistrer ses informations actuelles sur un message.

## Utilité

- **Changement d’identité visuelle** : Permet d’afficher l’avatar, le nom, le rang et la couleur de groupe d’un personnage alternatif pour chaque message (utile notamment pour les comptes administratifs ou PNJ).
- **Personnalisation des posts** : Utile pour les forums RPG où un utilisateur peut incarner plusieurs personnages sur un même compte.
- **Continuité des messages** : Si un compte est recyclé pour un autre personnage, on évite une perte de contexte. Les messages écrits par l'ancien personnage continueront d'apparaître sous l'avatar, le nom et la couleur de cet ancien personnage.

## Afficher les informations 

- Le script cible tous les éléments `switch` et les dissimule.
- Pour chaque élément, il récupère les informations du personnage alternatif (avatar, nom, rang, couleur de groupe).
- Il applique ces informations au post correspondant en modifiant le DOM.
- Les sections d’informations utilisateur et de contact sont supprimées pour éviter les incohérences.

### Modification de templates

#### `search_result_posts` et `preview_topic_review`

Avantage de **cohérence RPG** : Permet de retrouver facilement quel personnage a posté, indépendamment du compte utilisateur.

```html
[...]   
	<!-- ELYAELL : Ajout variable poster_name pour cibler plus facilement le nom du personnage -->
	<span class="poster_name">{searchresults.L_TOPIC_BY} {searchresults.POSTER_NAME}</span><br />
[...]
```

```html
[...]
	<!-- ELYAELL : ajout variable poster_name pour cibler mieux le nom -->
	<span> {postrow.displayed.L_TOPIC_BY} <span class="poster_name"> {postrow.displayed.POSTER_NAME} </span> {postrow.displayed.L_TOPIC_ON} {postrow.displayed.POST_DATE}</span>
[...]
```

## Enregistrer les informations

Pour l'enregistrement, le script a été placé directement dans le template : la seule autre solution était de le faire agir sur toutes les pages du forum. 

- Le script dans le template `posting_body` surveille si la checkbox `#keep_character_data` est cochée. Si oui, les informations enregistrées du personnage seront affichées.
- Le script surveille si l'utilisateur a choisi de garder le profil déjà enregsitré (s'il existe) ou d'ajouter son profil actuel au message.
- Si le message a initialement des informations enregistrées, un encart avec celles-ci apparaît.

### Modification de templates

#### posting_body

Entre `<!-- END switch_subject -->` et `<!-- BEGIN switch_description -->`, pour afficher les miniatures des profils disponibles (le profil actuel du compte + celui éventuellement déjà sauvé sur le message) :

```html
<dl>
	<dt></dt>
	<dd><label><input type="checkbox" id="keep_character_data" name="keep_character_data" />&nbsp;Conserver les informations du personnage pour ce message</label><br /><small>Si l'option est cochée, 
	les informations suivantes seront fixées pour ce message et ne seront plus mises à jour : pseudo du personnage, rang, couleur du groupe et image de l'avatar.</small></dd>
</dl>
<dl>
	<dt></dt>
	<dd class="character_data_box"><div id="current_character_data" name="current_character_data"></div><div id="character_data" name="character_data"></div></dd>
</dl>
```

Entre `<!-- END switch_publish -->` et `<!-- BEGIN switch_signature -->`, un faux bouton a été mis en place pour ajouter de manière transparente le switch lors de l'enregistrement :

```html
	&nbsp;<input class="button1" type="button" name="fake_post" value="{L_SUBMIT}" id="button_message_post" title="{L_SUBMIT_TITLE}" tabindex="6" accesskey="s" {DISABLED_SUBMIT} />
	&nbsp;<input class="button1" style="display: none" type="submit" name="post" value="{L_SUBMIT}" id="real_button_message_post" title="{L_SUBMIT_TITLE}" tabindex="6" accesskey="s" {DISABLED_SUBMIT} />
```


## Améliorations possibles

- Sauvegarder dans le profil l'utilisation automatique de la fonctionnalité.
- Sauvegarder directement sur le profil du personnage les différentes identités et donner à l'utilisateur la possibilité de choisir parmi celles-ci.
- Donner à l'utilisateur la possibilité d'afficher uniquement un avatar différent pour un message spécifique sans avoir à changer son avatar sur le profil.
