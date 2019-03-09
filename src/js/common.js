$(document).ready(function () {

  function heightDetect() {
    $(".main__head").css("min-height", $(window).height());
  }

  heightDetect();
  $(window).resize(heightDetect);


  // menu functionality
  var menu = $(".top-menu"),
    menuToggle = $(".toggle-menu"),
    menuItems = $(".top-menu a");

  menuToggle.click(function () {
    menu.is(":visible") ?
      fadeOutMenu() :
      fadeInMenu();
  });

  menu.click(function (event) {
    if ($(event.target).is("a")) {
      fadeOutMenu();
    }
  });

  function fadeOutMenu() {
    $(".toggle-sandwich").toggleClass("active");
    menu.fadeOut(600);
    menuItems.removeClass("fadeInUp");
    menuItems.addClass("fadeOutUp");
  }

  function fadeInMenu() {
    $(".toggle-sandwich").toggleClass("active");
    menu.fadeIn(600);
    menuItems.removeClass("fadeOutUp");
    menuItems.addClass("fadeInUp");
  }

  menuItems.each(function () {
    $(this).append("<span class='menu-item-overlay animated fadeInUp'></span>")
  })


  //ANIMATINOS FOR HEADER CONTENT
  $(".header-content-title").animated("fadeInDown", "fadeOutUp")
  $(".section-header, .header-content-text").animated("fadeInUp", "fadeOutDown")


  //IMAGE POPUP ON CLICK
  $(".about-col-img-link").magnificPopup({ type: "image" });


  //ABOUT SECTION COL ANIMATINOS
  $(".about-col-about").animated("fadeInLeft", "fadeOutLeft");
  $(".about-col-photo").animated("flipInY", "flipOutY");
  $(".about-col-personal").animated("fadeInRight", "fadeOutRight");


  //RESUME SECTION ANIMATIONS
  $(".resume-col-left .resume-col-item").animated("fadeInLeft", "fadeOutLeft");
  $(".resume-col-right .resume-col-item").animated("fadeInRight", "fadeOutRight");


  //PORFOLIO LIST FUNCTIONALITY
  $(".portfolio-item").click(function () {
    $(".portfolio-item-active").removeClass("portfolio-item-active");
    $(this).addClass("portfolio-item-active");
  });

  $(".mix-container").mixItUp();

  $(".portfolio-col-overlay-btn").magnificPopup({
    showCloseBtn: true,
    closeBtnInside: true,
  });

  $(".mpf-content").has(".portfolio - work").css("max-width", 600);
});

$(window).load(function () {
  $(".loader-inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});