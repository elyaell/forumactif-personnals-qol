// PLACEMENT : Sur tous les sujets

// by elyaell (https://github.com/elyaell)

$(function () {
  $(".switch-profile").css("display", "none");
  $(".switch-profile").each(function () {
    // get the closest post (the one that will be changed)
    var profile_to_switch = $(this).closest(".post");

    // change the avatar for the current post
    var switch_current_avatar = $(this).find("img").attr("src");
    profile_to_switch
      .find(".post_avatar")
      .find("a img")
      .attr("src", switch_current_avatar);

    // change the name for the current post
    var switch_current_name = $(this).find(".switch-name").html();
    profile_to_switch
      .find(".post_pseudo a span strong")
      .html(switch_current_name);

    // change the text of the rank for the current post
    var switch_current_rank = $(this).find(".switch-rank").html();
    profile_to_switch.find(".post_rank").html(switch_current_rank);

    // change the color of the rank for the current post
    var switch_current_class = $(this).find(".switch-groupe").html();
    profile_to_switch.find(".post_pseudo a span").css("color", "");
    profile_to_switch
      .find(".post_pseudo a span")
      .addClass(switch_current_class);

    // hide the elements that are not needed for the post
    profile_to_switch.find(".post_userinfo").html("");
    profile_to_switch.find(".post_contact").html("");
  });
});
