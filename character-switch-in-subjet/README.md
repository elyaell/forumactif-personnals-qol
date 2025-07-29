## Character Switch

A HTML/jQuery bit of code that allow a player to use a different avatar/name/rank/group color in the current post of a subjet. Used when the original user leave or the account is reused for another character. Adapted for the `viewtopic_body.tpl` of BlankTheme (https://blank-theme.com/).

### How to install in FA

#### Reading subject

The content of [afficher_autre_personnage_sur_sujet](src/afficher_autre_personnage_sur_sujet.js.js).js need to be added to the javascript pages of FA.

#### Search member message

When you use FA search members messages, the messages where this code is used will display the current character informations and the html code itself. You may want to hide it and use the switch info too. There is no way to target specifically the search page from the javascript option, so putting it directly in the template seemed like the best option. Adapted for the `search_results_posts.tpl` of BlankTheme (https://blank-theme.com/). Only the <!-- ELYAELL --> elements has been added to the original template of BlankTheme.

#### Preview message

When writing a new message, you may want to display the correct user and hide the html of the switch. Directly in template `preview_topicreview.tpl` of BlankTheme (https://blank-theme.com/), copy/paste content of the template.

#### Writing message

When writing a new message, you may want to add directly the switch into the message, to keep the current character info. If you edit a message that has already the html, you will have the choice between the current switch and a new switch with your current profile. The old one will be lost if you change it so be cautious. Copy/paste the content of `posting_body.tpl` into the right places, and create a JavaScript file with the content of [recuperation_informations_personnage_actuel](src/recuperation_informations_personnage_actuel.js).

### Manually used

Inside the post where you want to change the current character used, you can also use :

`<div class="switch-profile"><img src="CHARACTER_IMAGE" /><span class="switch-name">CHARACTER_NAME</span><span class="switch-groupe">CHARACTER_CSS_GROUP_COLOR</span><span class="switch-rank">CHARACTER_RANK</span></div>`

When saved, the post will now display the informations of the `switch-profile` instead of the current character.
