$(function () {
  // OUVERTURE / FERMETURE BLOCS
  $(".title").on("click", function () {
    var bloc = $(this).closest(".formulaire-bloc");
    if ($(bloc).hasClass("active")) {
      $(bloc).removeClass("active");
    } else {
      $(bloc).addClass("active");
    }
  });

  // RECUPERATION DU TYPE DE FICHE
  var typeFiche = window.location.search.replace("?", "").split("&");
  if (typeFiche[0].split("=")[1] == "PREDEFINI") {
    // FICHE PREDEFINI
    $("#champ_descriptions").remove();
    $("#formulaire-joueur").remove();
    $("#title-formulaire-histoire").textContent("Points d'histoire");
    typeFiche = typeFiche[0].split("=")[1];
  } else if (typeFiche[0].split("=")[1] == "PNJ") {
    // FICHE PNJ
    $("#champ_descriptions").remove();
    $("#formulaire-joueur").remove();
    $("#title-formulaire-histoire").textContent("Détails du personnage");
    $("#formulaire").remove();
    typeFiche = typeFiche[0].split("=")[1];
  } else {
    // FICHE JOUEUR
    $("#formulaire-liens").remove();
    typeFiche = "PERSONNAGE";
  }

  $("h1").text(`GENERATEUR DE FICHE ${typeFiche}`);

  // SWITCH INFORMATIONS FACTIONS
  var valGroup = $("#champ_politique").find(":selected").val();
  $("#faction-description>span").css("display", "none");
  $(`#info-${valGroup}`).css("display", "block");

  $("#champ_politique").on("change", function () {
    valGroup = $(this).find(":selected").val();
    $("#faction-description>span").css("display", "none");
    $(`#info-${valGroup}`).css("display", "block");
  });

  // SWITCH INFORMATIONS GROUPES
  var value = $("#champ_sous_groupe").find(":selected").val();
  $("#groupe-description>span").css("display", "none");
  $(`#info-${value}`).css("display", "block");

  $("#champ_sous_groupe").on("change", function () {
    var value = $(this).find(":selected").val();
    $("#groupe-description>span").css("display", "none");
    $(`#info-${value}`).css("display", "block");
  });

  // AFFICHAGE INFORMATIONS POUVOIR
  $("#champ_alteration").on("change", function () {
    if ($(this).is(":checked")) {
      $("#formulaire-pouvoir-bloc").css("display", "block");
    } else {
      $("#formulaire-pouvoir-bloc").css("display", "none");
    }
  });

  // AJOUT NOUVEAU LIEN
  var lengthLinks = 0;
  $("#add-link").on("click", function () {
    lengthLinks = lengthLinks + 1;
    $("#formSujetLink").append(
      `<div class="current-link"><div id="block-link-${lengthLinks}"><div class="firstline"><label id="label-link-${lengthLinks}" for="link-${lengthLinks}">Personnage</label><input type="text" value="" id="link-${lengthLinks}" name="link-${lengthLinks}" /><br/><label id="label-img-link-${lengthLinks}" for="link-${lengthLinks}">Image du personnage</label><input type="text" value="" id="img-link-${lengthLinks}" name="img-link-${lengthLinks}" /><input type="button" value="x" id="delete-link-${lengthLinks}" class="remove-link" /></div><br/><textarea id="desc-link-${lengthLinks}" class="textarea-description-little" name="${lengthLinks}"></textarea></div></div>`
    );

    // AJOUT FONCTIONNALITE SUPPRESSION LIEN
    $(`#delete-link-${lengthLinks}`).on("click", function (event) {
      $(this).closest(".current-link").remove();
    });
  });

  // UN SEUL BLOC POUR HISTOIRE / PHYSIQUE / MENTAL
  $("#champ_descriptions").on("change", function () {
    if ($(this).is(":checked")) {
      $("#formulaire-mental").css("display", "none");
      $("#formulaire-physique").css("display", "none");
    } else {
      $("#formulaire-mental").css("display", "block");
      $("#formulaire-physique").css("display", "block");
    }
  });

  // GENERATION FICHE
  $("#genererFiche").on("click", function () {
    // IDENTITE
    var { identity, pouvoir, descriptions, histoire, player, links } =
      generationHTML(typeFiche, valGroup, lengthLinks);

    /**
     * -- GENERATION DU CODE HTML FINAL
     */
    if (typeFiche == "PERSONNAGE") {
      $("#area").html(
        `<textarea name="genCode" id="genCode"><div class="box-predef-container">${identity}${pouvoir}${descriptions}${histoire}${player}</div></textarea>`
      );
    } else {
      $("#area").html(
        `<textarea name="genCode" id="genCode"><div class="box-predef-container">${identity}${pouvoir}${descriptions}${histoire}${links}</div></textarea>`
      );
    }
  });

  /**
   * -- REDIRECTION VERS CREATION DE SUJET
   *
   */
  $("#submitSheet").on("click", function () {
    var { identity, pouvoir, descriptions, histoire, player, links } =
      generationHTML(typeFiche, valGroup, lengthLinks);

    var message = `<div class="box-predef-container">${identity}${pouvoir}${descriptions}${histoire}${player}${links}</div>`;
    var subject = `${$("#champ_prenom").val()} ${$("#champ_nom").val()}`;

    localStorage.setItem(
      "sheet",
      JSON.stringify({ subject: subject, message: message })
    );

    // Rediriger vers la nouvelle page
    window.location.assign("/post?f=13&mode=newtopic");
  });

  function generationHTML(typeFiche, valGroup, lengthLinks) {
    var identity;
    if (typeFiche == "PNJ") {
      identity = `<div class="sujets-box-infos-predef"><div class="sujets-title-predef ${valGroup}">${$(
        "#champ_prenom"
      ).val()} ${$(
        "#champ_nom"
      ).val()}.</div><div class="sujets-content"><div class="box-predef"><div class="box-1-predef"><img src="${$(
        "#image_perso"
      ).val()}"/></div><div class="box-2-predef"><span class= ${valGroup}">Age ×</span>  ${$(
        "#champ_age"
      ).val()}<br/><span class= ${valGroup}">Genre ×</span> ${$(
        "#champ_genre"
      ).val()}<br\><span class= ${valGroup}">Nationalité / Origines ×</span> ${$(
        "#champ_origines"
      ).val()}<br/><span class= ${valGroup}">Statut civil ×</span> ${$(
        "#champ_statut"
      ).val()}<br\><span class= ${valGroup}">Emploi ×</span> ${$(
        "#champ_job"
      ).val()}<br\><span class= ${valGroup}">Inclinaison politique ×</span> ${$(
        "#champ_politique"
      )
        .find(":selected")
        .text()}<br\><span class= ${valGroup}">Sous-groupe ×</span> ${$(
        "#champ_sous_groupe"
      )
        .find(":selected")
        .text()}</div></div></div></div>`;
    } else {
      identity = `<div class="sujets-box-infos-predef"><div class="sujets-title-predef ${valGroup}">${$(
        "#champ_prenom"
      ).val()} ${$(
        "#champ_nom"
      ).val()}.</div><div class="sujets-content"><div class="box-predef"><div class="box-1-predef"><img src="${$(
        "#image_perso"
      ).val()}"/></div><div class="box-2-predef"><span class="${valGroup}">Nom ×</span> ${$(
        "#champ_nom"
      ).val()}<br\><span class="${valGroup}">Prénom ×</span> ${$(
        "#champ_prenom"
      ).val()}<br/><span class="${valGroup}">Age ×</span> ${$(
        "#champ_age"
      ).val()}<br/><span class="${valGroup}">Genre ×</span> ${$(
        "#champ_genre"
      ).val()}<br\><span class="${valGroup}">Nationalité / Origines ×</span> ${$(
        "#champ_origines"
      ).val()}<br/><span class="${valGroup}">Statut civil ×</span> ${$(
        "#champ_statut"
      ).val()}<br\><span class="${valGroup}">Emploi ×</span> ${$(
        "#champ_job"
      ).val()}<br\><span class="${valGroup}">Inclinaison politique ×</span> ${$(
        "#champ_politique"
      )
        .find(":selected")
        .text()}<br\><span class="${valGroup}">Sous-groupe ×</span> ${$(
        "#champ_sous_groupe"
      )
        .find(":selected")
        .text()}<br\><span class="${valGroup}">Feat ×</span> ${$(
        "#champ_personnage"
      ).val()}</div></div></div></div>`;
    }

    // POUVOIR
    var pouvoir = "";
    if ($("#champ_alteration").is(":checked")) {
      pouvoir = `<div class="sujets-box-predef-lng"><div class="sujets-title-predef-part">pouvoir.</div><div class="sujets-content"><span class="${valGroup}">${$(
        "#champ_nom_pouvoir"
      ).val()} ×</span> ${$(
        "#champ_effet_pouvoir"
      ).val()}<br/><span class="${valGroup}">Effets secondaires ×</span> ${$(
        "#champ_effets_secondaire"
      ).val()}</div></div>`;
    }

    // PHYSIQUE ET MENTAL
    var descriptions;
    if (
      (typeFiche == "PERSONNAGE" &&
        $("#champ_descriptions").is(":not(:checked)")) ||
      typeFiche == "PREDEFINI"
    ) {
      descriptions = `<div class="sujets-box-predef-column"><div class="sujets-box-predef"><div class="sujets-title-predef-part">physique.</div><div class="sujets-content"> ${$(
        "#champ_physique"
      ).val()}</div></div><div class="sujets-box-predef"><div class="sujets-title-predef-part">mental.</div><div class="sujets-content"> ${$(
        "#champ_mental"
      ).val()}</div></div></div>`;
      descriptions = descriptions.replaceAll(
        "val_groupe",
        $("#champ_politique").find(":selected").val()
      );
    }

    // DERNIERS BLOCS
    var histoire, player, links;
    if (typeFiche == "PERSONNAGE") {
      histoire = `<div class="sujets-box-predef-lng"><div class="sujets-title-predef-part">histoire.</div><div class="sujets-content">${$(
        "#champ_histoire"
      ).val()}</div></div>`;
      player = `<div class="sujets-box-predef-lng"><div class="sujets-title-predef-part">derrière l\'écran.</div><div class="sujets-content"><span class="${valGroup}">Parle nous un peu de toi (si tu as envie !) ×</span> ${$(
        "#champ_question_joueur_1"
      ).val()}<br/><span class="${valGroup}">Comment nous as-tu trouvé ×</span> ${$(
        "#champ_question_joueur_2"
      ).val()}<br/><span class="${valGroup}">Autre chose ? ×</span>${$(
        "#champ_question_joueur_3"
      ).val()}</div></div>`;
    } else {
      histoire = `<div class="sujets-box-predef-column"><div class="sujets-box-predef"><div class="sujets-title-predef-part">points d\'histoire.</div><div class="sujets-content">${$(
        "#champ_histoire"
      ).val()}</div></div>`;
      links = `<div class="sujets-box-predef"><div class="sujets-title-predef-part">liens.</div><div class="sujets-content">`;

      for (var i = 1; i <= lengthLinks; i++) {
        if ($("#link-" + i) != null) {
          links += `<div><div class="links-predef"><img alt="" src="${$(
            "#img-link-" + i
          ).val()}" style="width : 60px ; border-radius : 100px ;"/></div><div class="inks-text-predef"><div class="GLOBTexte"><span class="CORPSTextT">${$(
            "#link-" + i
          ).val()} × <span>${$(
            "#desc-link-" + i
          ).val()}</span></span></div></div>`;
        }
      }
      links += `</div></div></div>`;
    }
    return { identity, pouvoir, descriptions, histoire, player, links };
  }
});
