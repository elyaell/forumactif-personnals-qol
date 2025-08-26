# Conserver le personnage sur un message

Ce script permet de modifier dynamiquement l’affichage du profil d’un post sur un sujet, afin d’y afficher un autre personnage que celui du compte ayant posté. L'élément majeur pour cette évolution est que le résultat final doit impliquer le moins de manipulations à faire par l'utilisateur pour lui faciliter l'adaptation.

Le script se découpe en deux parties :

- **Afficher les informations** : L'affichage des informations sur les messages, les sujets de recherches et la prévisualisation de message (qui affiche les précédents messages).
- **Enregistrer les informations** : Donner à l'utilisateur la possibilité de choisir d'enregistrer ses informations actuelles sur un message.

## Utilité

- **Changement d’identité visuelle** : Permet d’afficher l’avatar, le nom, le rang et la couleur de groupe d’un personnage alternatif pour chaque message (utile notamment pour les comptes administratifs ou PNJ).
- **Personnalisation des posts** : Utile pour les forums RPG où un utilisateur peut incarner plusieurs personnages sur un même compte.
- **Continuité des messages** : Si un compte est recyclé pour un autre personnage, on évite une perte de contexte. Les messages écrits par l'ancien personnage continueront d'apparaître sous l'avatar, le nom et la couleur de cet ancien personnage.

## Mise en place

La nouvelle version du script permetde gérer dynamiquement les personnages disponibles pour un utilisateur.

Dans Forumactif, `Modules` > `Jeux de rôle` > `Gestion des champs`, cocher `Oui` pour `Activer la feuille de personnage`.
Dans les `Champs`, cliquer sur `Ajouter un champ`.

Le champ `Nom du champ` est **important**, car il s'agit de l'id par lequel vous pourrez retrouver votre liste de personnages ensuite, par exemple `Liste des personnages` deviendra l'id `#liste-des-personnages`.
Le type doit être `Tableau`.
Il est possible d'ajouter jusqu'à 512 lignes, donc deux ou trois est un bon départ.
Les colonnes comporteront les informations du personnage, ici : nom/prénom, avatar, couleur, rang.
La case `Visible dans les forums` est à **décocher** pour ne pas encombrer les messages.

Plus qu'à enregistrer.

Dans votre profil, `Personnages` > `Générer`. 
Il n'y aura plus qu'à remplir le tableau avec les éléments textuels.

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

- Vérifie la présence de l’éditeur et cible le conteneur des cartes.
- Crée des cartes de personnages avec une fonction utilitaire, en évitant les doublons.
- Ajoute la carte du personnage connecté en début de liste.
- Si un <switch> existe déjà dans le textarea, crée une carte correspondante et la rend active.
- Charge les autres personnages depuis la fiche RPG via AJAX et les ajoute sous forme de cartes.
- Gère le clic sur une carte pour la sélectionner/désélectionner.
- Sur envoi de message, récupère la carte active et injecte le <switch> correspondant dans le textarea.
- Bouton pour désélectionner toutes les cartes.

### Modification de templates

#### posting_body

Entre `<!-- END switch_subject -->` et `<!-- BEGIN switch_description -->`, pour afficher les miniatures des profils disponibles (le profil actuel du compte + celui éventuellement déjà sauvé sur le message) :

```html
	<dl>
	  <dt><label>Choix du personnage</label></dt>
	  <dd>              
		
		<!-- BEGIN switch_rpg -->
		<!-- BEGIN rpg_fields -->
		<div class="profile_field">
		<label>{switch_rpg.rpg_fields.F_NAME} :</label>
			<field>{switch_rpg.rpg_fields.F_VALUE_NEW}</field>
		</div>
		<!-- END rpg_fields -->
		<!-- END switch_rpg -->
		
		<div id="rpg_sheet_box" class="characters-container"></div>
		<div class="button" id="deselect_character" style="margin-top:10px;">Désélectionner</div>
	  </dd>
	</dl>
```

Entre `<!-- END switch_publish -->` et `<!-- BEGIN switch_signature -->`, un faux bouton a été mis en place pour ajouter de manière transparente le switch lors de l'enregistrement :

```html
	&nbsp;<input class="button1" type="button" name="fake_post" value="{L_SUBMIT}" id="button_message_post" title="{L_SUBMIT_TITLE}" tabindex="6" accesskey="s" {DISABLED_SUBMIT} />
	&nbsp;<input class="button1" style="display: none" type="submit" name="post" value="{L_SUBMIT}" id="real_button_message_post" title="{L_SUBMIT_TITLE}" tabindex="6" accesskey="s" {DISABLED_SUBMIT} />
```


## Améliorations possibles

- Sauvegarder dans le profil l'utilisation automatique de la fonctionnalité.
- Donner à l'utilisateur la possibilité d'afficher uniquement un avatar différent pour un message spécifique sans avoir à changer son avatar sur le profil.
