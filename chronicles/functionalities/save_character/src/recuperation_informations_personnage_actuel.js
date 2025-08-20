// PLACEMENT : Sur toutes les pages

// by elyaell (https://github.com/elyaell)

$(function () {
  var switch_avatar = _userdata["avatar_link"];
  var switch_name = _userdata["username"];
  var switch_rank = _lang["rank_title"];
  var switch_group = _userdata["groupcolor"];

  $("#character_data").html(
    `<div class="switch-profile"><img src="${switch_avatar}" /><span class="switch-name">${switch_name}</span><span class="switch-groupe">${switch_group}</span><span class="switch-rank">${switch_rank}</span></div>`
  );
  $("#character_data .switch-name").css("color", `#${switch_group}`);
});
