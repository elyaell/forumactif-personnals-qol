/**** JAVASCRIPT ECRITURE SWITCH PAR ELYAELL (https://github.com/elyaell) *****/
/**** VERSION 3.0.0 - 26/08/2025 *****/
/**** Développé pour Chronicles (https://chronicles.forumeiros.com/) *****/
/**** Merci de garder les crédits dans les commentaires et dans le champ des crédits *****/

// PLACEMENT : Sur toutes les pages

// by elyaell (https://github.com/elyaell)

$(function () {
  
    // from Skaemp (https://crushcrushcrush.actifforum.com/)
  $('a[href*="/u"] span').each(function(){
      var color = $(this).css("color"); 
      $(this).closest('.color_character').css("background-color", color);
  });
  
  // Masquer les switch
  $("switch").css('display', 'none');

  // --------- récupérer les infos d'un switch ----------
  function getSwitchData($switch) {
    return {
      avatar: $switch.data('avatar'),
      name: $switch.data('name'),
      rank: $switch.data('rank'),
      color: $switch.data('group-color')
    };
  }

  // --------- topics ----------
  function applySwitchTopic($switch, data) {
    const $post = $switch.closest(".post");

    // avatar
    $post.find('.post_avatar a img')
      .attr('src', data.avatar)
      .attr('alt', data.name);

    // pseudo
    $post.find(".post_pseudo a span strong").html(data.name);

    // rang
    $post.find('.block_color_character .post_rank').html(data.rank);

    // couleur pseudo + background
    $post.find('.block_color_character .post_pseudo a span').css("color", `${data.color}`);
    $post.find('.color_character').css("background-color", `${data.color}`);

    // cacher l'userinfo
    $post.find(".post_userinfo").hide();
  }

  // --------- recherche + preview ----------
  function applySwitchSearchPreview($switch, data) {
    const $el = $switch.closest('.postbody, .post_search');

    $el.find(".poster_name strong").html(data.name);
    $el.find(".poster_name span").css('color', `${data.color}`);
  }

  // --------- Application globale ----------
  $("switch").each(function() {
    const $switch = $(this);
    const data = getSwitchData($switch);

    // Topic
    if ($switch.closest(".post").length) {
      applySwitchTopic($switch, data);
    }

    // Recherche + preview
    if ($switch.closest(".postbody, .post_search").length) {
      applySwitchSearchPreview($switch, data);
    }
  });
});