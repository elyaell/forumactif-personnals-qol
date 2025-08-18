/**** JAVASCRIPT SEUL PASSAGE EN MODE INDEX PAR ELYAELL (https://github.com/elyaell) *****/
/**** VERSION 3.1.1 - 18/08/2025 *****/
/**** Développé pour Chronicles (https://chronicles.forumeiros.com/) *****/
/**** Merci de garder les crédits dans les commentaires et dans le champ des crédits *****/
$(function () {
  if ($(".container-subject").find("#display_annex_button").length === 0) {
    var $content = {};

    var $posts = $(document).find(".post");

    // on affiche sous forme d'index
    $(".container-subject").append(`
      <div class="post post_row post_index" style="display:none">
        <div class="post_profile">
          <div class="index_subject"><span class="icon_separator"></span></div>
        </div>
        <div class="topic_details">
          <div class="post_message postbody content index_content"></div>
        </div>
      </div>
    `);

    // construction de l'index
    $posts.each(function () {
      var $post = $(this).find(".annex_element");

      var $title = $post.find(".title_annex").attr("id");
      var $titleContent = $("#" + $title).text();
      
      $(".index_subject").append(`<div id="part-${$title}"><h1 data-target="${$title}">${$titleContent}</h1>`);

      $(this)
        .find(".subtitle_annex")
        .each(function () {
          var $subtitle = $(this).attr("id");
          var $subtitleContent = $("#" + $subtitle).text();
          $("#part-"+$title).append(
            `<a href="#${$subtitle}"><h2 data-target="${$subtitle}">✦&nbsp;${$subtitleContent}</h2></a>`,
          );
        });
      
      $(".index_subject").append(`</div><span class="icon_separator"></span>`);
    });

    // H1 : affiche tout son contenu
    $(".index_subject h1").on("click", function () {
      $(".index_subject h1").removeClass("active");
      $(".index_subject h2").removeClass("active");
      
      $(this).addClass("active");

      var targetId = $(this).data("target");
      var html = $("#" + targetId).closest(".annex_element");

      $(".index_content").html(html.prop("outerHTML"));
      $(".index_content").scrollTop(0);
    });

    // H2 : idem que H1
    $(".index_subject h2").on("click", function () {
      $(".index_subject h1").removeClass("active");
      $(".index_subject h2").removeClass("active");

      $(this).closest("h1").addClass("active");
      $(this).addClass("active");
      
      var targetId = $(this).data("target");
      var $parentBlock = $("#" + targetId).closest(".annex_element");
      var html = $parentBlock.prop("outerHTML");
      
      $(".index_content").html(html);
   
      setTimeout(function() {
        const $target = $(".index_content #"+targetId);
        if ($target.length) {
          $('html, body').animate({
            scrollTop: $target.offset().top
          }, 500);
        } else {
          console.warn("Cible introuvable :", targetId);
        }
      }, 500);
    });
  }
    
  $(document).on("click", "#display_annex_button", function () {
    var $posts = $(".post");
    $posts.css({ display: "none" });
    $(".post_index").css("display", "grid");
  
    $(this).attr("id", "display_posts_button").text("Afficher sous forme de messages");
  });
  
  $(document).on("click", "#display_posts_button", function () {
    var $posts = $(".post");
    $posts.css({ display: "grid" });
    $(".post_index").css("display", "none");
  
    $(this).attr("id", "display_annex_button").text("Afficher sous forme d'index");
  });
});
