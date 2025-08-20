[...]
                <!-- END switch_subject -->

                <!-- ELYAELL : choisir informations personnage --> 
                <dl>
                    <dt></dt>
                    <dd><label><input type="checkbox" id="keep_character_data" name="keep_character_data" />&nbsp;Conserver les informations du personnage pour ce message</label><br /><small>Si l'option est cochée, 
                    les informations suivantes seront fixées pour ce message et ne seront plus mises à jour : pseudo du personnage, rang, couleur du groupe et image de l'avatar.</small></dd>
                </dl>
                <dl>
                    <dt></dt>
                    <dd class="character_data_box"><div id="current_character_data" name="current_character_data"></div><div id="character_data" name="character_data"></div></dd>
                </dl>
                <!-- ELYAELL : choisir informations personnage -->   
                
                <!-- BEGIN switch_description --> 
[...]
      
        <!----------------------------------------------->
        <!-- BOUTONS (envoyer, prévisu,...) -------------->

[...]

                <!-- END switch_publish -->

                <!-- ELYAELL : ajout faux bouton -->
                &nbsp;<input class="button1" type="button" name="fake_post" value="{L_SUBMIT}" id="button_message_post" title="{L_SUBMIT_TITLE}" tabindex="6" accesskey="s" {DISABLED_SUBMIT} />
                &nbsp;<input class="button1" style="display: none" type="submit" name="post" value="{L_SUBMIT}" id="real_button_message_post" title="{L_SUBMIT_TITLE}" tabindex="6" accesskey="s" {DISABLED_SUBMIT} />
                <!-- ELYAELL : ajout faux bouton -->

                <!-- BEGIN switch_signature -->           
[...]

<!-- ELYAELL : ajout_profil_courant_sur_message -->
<script type="text/javascript">
$(function () {

  $('#keep_character_data').on('change', function() {
    if ($(this).is(":checked")) {
      $(".character_data_box").css('display', 'flex');
    } else {
      $(".character_data_box").css('display', 'none');
    }
  });
  
  var has_already_info = $('#text_editor_textarea').val().match(/<div class="switch-profile">.*?<\/div>/gs);
  if (has_already_info) { 
    $("#current_character_data").html(has_already_info[0]); 
    
    var current_group_color = $("#current_character_data span.switch-groupe").text();
    
    $("#current_character_data span.switch-name").css("color", "#" + current_group_color);
    $("#current_character_data").addClass("active");
    
    var remove_info = $('#text_editor_textarea').val().replace(/<div class="switch-profile">.*?<\/div>/gs, ''); 
    $('#text_editor_textarea').html(remove_info); 
    $("#keep_character_data").prop('checked', true);
  } else { 
    $("#character_data").addClass("active");
    $(".character_data_box").css('display', 'none');
  }
 
  $("#character_data").on('click', function() {
     $("#current_character_data").removeClass('active');
     $("#character_data").addClass('active');
  });
  
  $("#current_character_data").on('click', function() {
     $("#character_data").removeClass('active');
     $("#current_character_data").addClass('active');
  });
  
  $('#button_message_post').on('click', function() {
    if ($("#keep_character_data").is(":checked")) {
      var text = $('#textarea_content textarea').val();
      $('#text_editor_textarea').val($(".character_data_box .active").html() + text);
      $('#textarea_content textarea').val($('#text_editor_textarea').val());
    }
    $('#real_button_message_post').click();
  });
  
});
</script>
<!-- ELYAELL : ajout_profil_courant_sur_message -->

            