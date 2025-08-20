[...]

        <!-- Information du sujet -->
        <div class="postsearch_infos">
            <span>{L_TOPIC}: <strong><a class="postdetails" href="{searchresults.U_TOPIC}">{searchresults.TOPIC_TITLE}</a></strong></span><br />

            <!-- ELYAELL : Ajout variable poster_name pour cibler plus facilement le nom du personnage -->
            <span class="poster_name">{searchresults.L_TOPIC_BY} {searchresults.POSTER_NAME}</span><br />
            <span>{searchresults.L_TOPIC_ON} {searchresults.POST_DATE}</span>
            <hr />
            <span>{L_FORUM}: <strong><a class="postdetails" href="{searchresults.U_FORUM}">{searchresults.FORUM_NAME}</a></strong></span><br />
            <span>{L_REPLIES}: <strong>{searchresults.TOPIC_REPLIES}</strong></span><br />
            <span>{L_VIEWS}: <strong>{searchresults.TOPIC_VIEWS}</strong></span><br />
        </div>

[...]

<!-- ELYAELL : change_info_when_old_account_code -->
<script type="text/javascript">
$(function () {
  
  $(".switch-profile").css('display', 'none');
  
  $(".switch-profile").each(function() {
    var search_to_switch = $(this).closest(".post_search");   
    
    var switch_current_name = $(this).find(".switch-name").html();
    search_to_switch.find(".postsearch_infos .poster_name strong").html(switch_current_name);
  
    var switch_current_class = $(this).find(".switch-groupe").html();
    search_to_switch.find(".postsearch_infos .poster_name span").css('color', '');
    search_to_switch.find(".postsearch_infos .poster_name span").addClass(switch_current_class);
  });
});
</script>
<!-- ELYAELL : change_info_when_old_account_code -->
