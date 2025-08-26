/**** JAVASCRIPT UTILISATION DU SWITCH EN LECTURE PAR ELYAELL (https://github.com/elyaell) *****/
/**** VERSION 2.0 - 26/08/2025 *****/
/**** Développé pour Chronicles (https://chronicles.forumeiros.com/) *****/
/**** Merci de garder les crédits dans les commentaires et dans le champ des crédits *****/

// PLACEMENT : Sur toutes les pages

// by elyaell (https://github.com/elyaell)

$(function () {
  
  // GET INFOS OF CURRENT CHARACTER
  var switch_avatar = _userdata["avatar_link"];
  var switch_name   = _userdata["username"];
  var switch_rank   = _lang["rank_title"];
  var switch_group  = _userdata["groupcolor"];
  
  // DISPLAY INFOS OF CONNECTED CHARACTER
  $("#connected_character").html(`<div class="switch-profile"><img src="${switch_avatar}" /><span class="switch-name">${switch_name}</span><span class="switch-groupe">${switch_group}</span><span class="switch-rank">${switch_rank}</span></div>`);                     
     
  const regex = /<switch[^>]*>.*?<\/switch>/g;
  
  // DISPLAY INFOS OF CURRENT SAVED CHARACTER      
  var has_already_info = $('#text_editor_textarea').val().match(regex);
  if (has_already_info) { 
    const switch_name   = $(has_already_info[0]).data("name");
    const switch_avatar = $(has_already_info[0]).data("avatar");
    const switch_group  = $(has_already_info[0]).data("group-color");
    const switch_rank   = $(has_already_info[0]).data("rank");
    
    const html = `
      <div class="switch-profile">
        <img src="${switch_avatar}" alt="${switch_name}" />
        <span class="switch-name">${switch_name}</span>
        <span class="switch-groupe">${switch_group}</span>
        <span class="switch-rank">${switch_rank}</span>
      </div>
    `;
    $("#saved_character").html(html);
    
    var remove_info = $('#text_editor_textarea').val().replace(regex, ''); 
    $('#text_editor_textarea').html(remove_info); 
    $("#keep_character_data").prop('checked', true);
    $("#saved_character").addClass("active");
  } else { 
    $("#character_data").addClass("active");
    $(".character_data_box").css('display', 'none');
  }
  
  $('#keep_character_data').on('change', function() {
    if ($(this).is(":checked")) {
      $(".character_data_box").css('display', 'flex');
    } else {
      $(".character_data_box").css('display', 'none');
    }
  });                   
  
  // BUTTONS FUNCTIONALITY
  $("#saved_character").on('click', function() {
     $("#connected_character").removeClass('active');
     $("#saved_character").addClass('active');
  });
  
  $("#connected_character").on('click', function() {
     $("#saved_character").removeClass('active');
     $("#connected_character").addClass('active');
  });
  
  $('#button_message_post').on('click', function() {
    if ($("#keep_character_data").is(":checked")) {
      var text = $('#textarea_content textarea').val();
      
      var $profile = $(".character_data_box .active"); 
      const switch_name   = $profile.find(".switch-name").text().trim();
      const switch_avatar = $profile.find("img").attr("src");
      const switch_group  = $profile.find(".switch-groupe").text().trim();
      const switch_rank   = $profile.find(".switch-rank").text().trim();

      // <switch>
      const $switchEl = `
        <switch 
          data-name="${switch_name}" 
          data-avatar="${switch_avatar}" 
          data-group-color="${switch_group}" 
          data-rank="${switch_rank}">
        </switch>
      `;
        
      $('#text_editor_textarea').val($switchEl + text);
      $('#textarea_content textarea').val($('#text_editor_textarea').val());
    }
    $('#real_button_message_post').click();
  });

});