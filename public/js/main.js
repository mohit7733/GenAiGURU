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

  // if home page leftsidebar add class
  $(function() {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    if(pgurl == '' ){
        $('.mainWrapper .leftSidebar').addClass('bigSidebar')
    }
  })

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

  // profile page tabing
  $('.edit-profile .connect-link li:first').addClass('active');
  $('.gurukeeps-wrapper .connect-link li:first').addClass('active');
  $('.setting-container .connect-link li:first').addClass('active');
  $('.tab').on('click', function(evt) { 
    evt.preventDefault();
    var sel = this.getAttribute('data-toggle-target');
    $('.tab-content').removeClass('active').filter(sel).addClass('active');
   });
   $('.connect-link li').on('click', function(evt) { 
    evt.preventDefault();
    $(this).addClass('active').siblings().removeClass("active");
   });

   // pop up
  $('.addInterest').on('click', function(e) {
    e.preventDefault();
    $('.popup-container').addClass('is-visible');
  });
  $(".cross_btn").click(function(){
    $(".popup-container").removeClass("is-visible")
  });

  // faq accordian
  $('.faq-box .accordion').click(function(){
    $(this).siblings().slideToggle().parent().siblings()
     .find('.panel').slideUp()
    $(this).parent('.faq-box').toggleClass('active').siblings()
      .removeClass('active')
  });

  // notification button
  $('.onoffbtn').on('click', function(){
    if($(this).children().is(':checked')){
      $(this).addClass('active');
    }
    else{
      $(this).removeClass('active')
    }
  });

  // channel slider
  $('.channelSlider').slick({
    arrows:false,
    infinite: true,
    autoplay:false,
    centerMode: false,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
  });

});

