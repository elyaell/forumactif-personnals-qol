## Character Switch

A HTML/jQuery bit of code that allow a player to use a different avatar/name/rank/group color in the current post of a subjet. Used when the original user leave or the account is reused for another character. Adapted for the `viewtopic_body.tpl` of BlankTheme (https://blank-theme.com/).

### How to install in FA

The content of character_switch.js need to be added to the javascript pages of FA. It should be used on "subjects" only.

### How to use

Inside the post where you want to change the current character used, you need to use :

`<div class="switch-profile"><img src="CHARACTER_IMAGE" /><span class="switch-name">CHARACTER_NAME</span><span class="switch-groupe">CHARACTER_CSS_GROUP_COLOR</span><span class="switch-rank">CHARACTER_RANK</span></div>`

When saved, the post will now display the informations of the `switch-profile` instead of the current character.

### Search member messages

When you use FA search members messages, the messages where this code is used will display the current character informations and the html code itself. You may want to hide it and use the switch info too. There is no way to target specifically the search page from the javascript option, so putting it directly in the template seemed like the best option. Adapted for the `search_results_posts.tpl` of BlankTheme (https://blank-theme.com/). Only the <!-- ELYAELL --> elements has been added to the original template of BlankTheme.

This way, when searching through the messages of the account, the ones posted under another identity will show up as this identity instead of the current one.
