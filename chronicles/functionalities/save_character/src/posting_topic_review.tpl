<div class="wrapped">

    <!-- Titre "revue du sujet" -->
    <!-- BEGIN switch_inline_mode -->
    <div class="h3">{L_TOPIC_REVIEW}</div>
    <!-- END switch_inline_mode -->

    <!-- Affichage d'un message simplifié -->
    <!-- BEGIN postrow -->
    <!-- BEGIN displayed -->
    <a name="{postrow.displayed.POST_ID}"></a>
    <div class="panel {postrow.displayed.displayed.ROW_CLASS}">

        <!-- Contenu -->
        <div class="postbody">
            <!-- Sujet par - Auteur - le - date -->
            <!-- ELYAELL : ajout variable poster_name_preview pour cibler mieux le nom -->
          <span> {postrow.displayed.L_TOPIC_BY} <span class="poster_name_preview"> {postrow.displayed.POSTER_NAME} </span> {postrow.displayed.L_TOPIC_ON} {postrow.displayed.POST_DATE}</span>

            <!-- Message -->
            <div class="content">{postrow.displayed.MESSAGE}</div>
        </div>

        <div class="clear"></div>
    </div>
    <!-- END displayed -->
    <!-- BEGIN hidden -->
    <div class="post">
        <p style="text-align:center">{postrow.hidden.MESSAGE}</p>
    </div>
    <!-- END hidden -->
    <!-- END postrow -->
    <!-- Fin de l'affichage -->

  
<!-- ELYAELL : Affichage du profil sur les messages précédents -->
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
<!-- ELYAELL : Affichage du profil sur les messages précédents -->

</div>
<br />

            