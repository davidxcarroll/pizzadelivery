
// SLICK - STORIES

$(document).ready(function(){
  $('.blocks-slide').slick({
    infinite: false,
    dots: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// ================================================================================

// STICKY NAV - DEFAULT

// $(window).on('scroll', function() {
//   scrollPosition = $(this).scrollTop();
//   if (scrollPosition >= $('#hero').height()) {
//     $("#nav").addClass("nav-fixed").removeClass("nav-static");
//   } else {
//     $("#nav").addClass("nav-static").removeClass("nav-fixed");
//   }
// });

// ================================================================================

// HOME - MOBILE NAV EXPANDED

$(document).ready(function(){
  $("#mobile-nav-button").click(function(){
    $("#navigation-home").toggleClass("mobile-nav-expanded");
    if ($("#icon-nav-mobile").hasClass("icon-nav-hide")) {
      $(this).addClass("icon-nav-hide");
      $("#icon-nav-mobile-close").removeClass("icon-nav-hide");
    } else {
      $(this).removeClass("icon-nav-hide");
      $("#icon-nav-mobile-close").addClass("icon-nav-hide");
    }
  });
});

// DEFAULT - MOBILE NAV EXPANDED

$(document).ready(function(){
  $("#mobile-nav-button").click(function(){
    $("#navigation-default").toggleClass("mobile-nav-expanded");
    $("#icon-nav-mobile").toggleClass("icon-nav-hide");
    $("#icon-nav-mobile-close").toggleClass("icon-nav-hide");
  });
});

// ================================================================================
