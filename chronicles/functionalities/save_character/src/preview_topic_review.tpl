
[...]
        <!-- Contenu -->
        <div class="postbody">
            <!-- Sujet par - Auteur - le - date -->
            <!-- ELYAELL : ajout variable poster_name_preview pour cibler mieux le nom -->
          <span> {postrow.displayed.L_TOPIC_BY} <span class="poster_name_preview"> {postrow.displayed.POSTER_NAME} </span> {postrow.displayed.L_TOPIC_ON} {postrow.displayed.POST_DATE}</span>

            <!-- Message -->
            <div class="content">{postrow.displayed.MESSAGE}</div>
        </div>

[...]
  
<!-- ELYAELL : ajout_switched_profile_sur_preview_message -->
<script type="text/javascript">
$(function () {
  
  $('.content .switch-profile').each(function() {
    $(this).css('display', 'none');
    var profile_to_switch = $(this).closest('.postbody');
    var switch_current_name = $(this).find(".switch-name").html();
    var switch_current_color = $(this).find(".switch-groupe").html();
  
    profile_to_switch.find(".poster_name_preview span strong").html(switch_current_name);
    profile_to_switch.find(".poster_name_preview span").css("color", "#"+switch_current_color);
  
  });

  
});
</script>
<!-- ELYAELL : ajout_profil_courant_sur_message -->

            