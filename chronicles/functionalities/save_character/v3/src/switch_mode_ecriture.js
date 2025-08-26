/**** JAVASCRIPT ECRITURE SWITCH PAR ELYAELL (https://github.com/elyaell) *****/
/**** VERSION 3.0.0 - 26/08/2025 *****/
/**** Développé pour Chronicles (https://chronicles.forumeiros.com/) *****/
/**** Merci de garder les crédits dans les commentaires et dans le champ des crédits *****/

// PLACEMENT : Sur toutes les pages

// by elyaell (https://github.com/elyaell)

$(function() {
  if ($("#text_editor_textarea").length === 0) return; // sécurité
  const $box = $('#rpg_sheet_box');

  function appendCharacterCard($box, character) {
    if ($box.find(`.character-card[data-name="${character.name}"]`).length > 0) {
        return;
    }

    const $card = createCharacterCard(character);
    $box.append($card);
  }
  
  // -------------------------
  // UTILITAIRES
  // -------------------------
  function createCharacterCard({ name, avatar, group_color, rank }) {
    return $(`
      <div class="character-card" data-name="${name}" data-rank="${rank}" data-group-color="${group_color}">
        <img src="${avatar}" alt="${name}">
        <span class="character-name" style="color:${group_color}; font-weight:bold;">${name}</span><br>
        <span class="character-rank">${rank}</span>
      </div>
    `);
  }
  
  // -------------------------
  // CHOIX
  // -------------------------
  $('#keep_character_data').on('change', function() {
    $("#rpg_sheet_box").css('display', this.checked ? 'flex' : 'none');
  });  
  
  // -------------------------
  // CLIC SUR UNE CARTE
  // -------------------------
  $('#rpg_sheet_box').on('click', '.character-card', function() {
    $('.character-card').removeClass('active');
    $(this).addClass('active');
  });
    
  
  // -------------------------
  // 1. PERSONNAGE DÉJÀ PRÉSENT DANS LE TEXTAREA
  // -------------------------
  const regex = /<switch[^>]*>.*?<\/switch>/g;
  const textareaVal = $('#text_editor_textarea').val();
  const hasSwitch = textareaVal.match(regex);
  
  if (hasSwitch) {
    const $temp = $(hasSwitch[0]);
    const existingCharacter = {
      name: $temp.data('name'),
      avatar: $temp.data('avatar'),
      group_color: $temp.data('group-color'),
      rank: $temp.data('rank')
    };
    
    const $existingCard = createCharacterCard(existingCharacter);
    $existingCard.addClass('current');
    $box.append($existingCard);
    $('#text_editor_textarea').val(textareaVal.replace(regex, ''));
    
    $('.character-card').removeClass('active');
    $existingCard.addClass('active');
    
    $('#rpg_sheet_box').css('display', 'flex');
    $('#keep_character_data').click();
  }
  
  // -------------------------
  // 2. PERSONNAGE CONNECTÉ
  // -------------------------
  const connectedCharacter = {
    name: _userdata["username"],
    avatar: _userdata["avatar_link"],
    group_color: "#"+_userdata["groupcolor"],
    rank: _lang["rank_title"]
  };
  
   appendCharacterCard($box, connectedCharacter);
  
  // -------------------------
  // 3. AJOUT DES PERSONNAGES DE LA FICHE DE JEU
  // -------------------------
  
  const userId = _userdata["user_id"];
  const rpgUrl = `/u${userId}rpgsheet`;

  $.get(rpgUrl, function(data) {
    const $html = $(data);
    const $rows = $html.find("#rpg-liste-des-personnages tr");
  
    if ($rows.length) {
      $rows.slice(1).each(function() {
        const $cells = $(this).find("td").slice(1);
        const name    = $cells.eq(0).text().trim();
        const avatar      = $cells.eq(1).text().trim();
        const group_color = $cells.eq(2).text().trim() || '#000';
        const rank        = $cells.eq(3).text().trim();
        
        if (name.length == 0) {
          return true;
        }
 
        appendCharacterCard($box, {name, avatar, group_color, rank});
      });
    }
  });
  
  // -------------------------
  // 4. ENREGISTRER LE MESSAGE
  // -------------------------
  $('#button_message_post').on('click', function() {
  if (!$("#keep_character_data").prop("checked")) {
    $('#real_button_message_post').click();
    return;
  }
                                   
    const text = $('#textarea_content textarea').val();
    const $activeCard = $('.character-card.active');
                                   
    const switchHTML = `
      <switch
        data-name="${$activeCard.data('name')}"
        data-avatar="${$activeCard.find('img').attr('src')}"
        data-group-color="${$activeCard.data('group-color')}"
        data-rank="${$activeCard.data('rank')}">
      </switch>
    `;

    $('#text_editor_textarea').val(switchHTML + text);
    $('#textarea_content textarea').val($('#text_editor_textarea').val());

    $('#real_button_message_post').click();
  });

});