jQuery(window).bind("load", function () {
  if (document.readyState === "complete") {
    setTimeout(function () {
      jQuery(".loader").hide();
    }, 1500);
    // AOS.init({
    //   duration: 800,
    //   once: true,
    // });
  }
});

$(document).ready(function(){

  // static button
  $('.fixedBtn').hide();
  $(window).scroll(function() {
    if (this.scrollY > 100)
      $('.fixedBtn').show().fadeIn();
    else
      $('.fixedBtn').fadeOut().hide();
  });

  // blog slider
  $('.blog-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    autoplaySpeed: 2500,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // video slider
  $('.video-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    autoplaySpeed: 3000,
    arrows: false,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // article slider
  $('.article-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    autoplaySpeed: 3800,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  
  // home interest section start
  $('.interest-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    autoplaySpeed: 4100,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: "unslick"
      }
    ]
  });

  // featured article section start
  $('.featuredSlider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplaySpeed: 4100,
    arrows: false,
    autoplay: true,
  });

  // border add on focus
  $('.searchFormLong input').focus(function () {
    $(this).parents('.wrapperSearchs').removeClass('active');
    $(this).parents('.wrapperSearchs').addClass('active');
  }).blur(function () {
      $(this).parents('.wrapperSearchs').removeClass('active');
  });

});

