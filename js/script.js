jQuery(document).ready(function ($) {

  //видалити прі натяжке
  $(document).on('click', '.about .form-wrap button', function (e){
    e.preventDefault();
    $(this).closest('.form-default').find('.send-block').show()
  });

  $(document).on('click', '.contact .input-submit button', function (e){
    e.preventDefault();
    $(this).closest('.form-default').find('.send-block').show()
  });



  if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $("body").addClass("mac");
  } else {
    $("body").addClass("pc");
  }

  //slider
  var swiperHome = new Swiper(".home-top-slider", {
    pagination: {
      el: ".home-top-pagination",
      clickable: true,
    },
  });

  //fix header
  $(".top-line").sticky({
    topSpacing:0
  });

  //code tel
  if($('.input-wrap-tel-about input').length > 0){
    var inputAbout = document.querySelector("#tel-about");
    window.intlTelInput(inputAbout, {
      //allowDropdown: true,
      //autoHideDialCode: true,
      // autoPlaceholder: "off",
      // dropdownContainer: document.body,
      // excludeCountries: ["ru"],
      // formatOnDisplay: false,
      /*    geoIpLookup: function(callback) {
            $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
            });
          },*/
      // hiddenInput: "full_number",
      //initialCountry: "auto",
      localizedCountries: { 'ua': 'Ukraine' },
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      preferredCountries: ['ua'],
      InitialCountry: "",
      separateDialCode: true,

    });
  }

  if($('.input-wrap-tel input').length > 0){
    var input = document.querySelector("#tel");
    window.intlTelInput(input, {
      //allowDropdown: true,
      //autoHideDialCode: true,
      // autoPlaceholder: "off",
      // dropdownContainer: document.body,
      // excludeCountries: ["ru"],
      // formatOnDisplay: false,
      /*    geoIpLookup: function(callback) {
            $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
            });
          },*/
      // hiddenInput: "full_number",
      //initialCountry: "auto",
      localizedCountries: { 'ua': 'Ukraine' },
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      preferredCountries: ['ua'],
      InitialCountry: "",
      separateDialCode: true,

    });
  }

  //open form
  $(document).on('click', '.about .btn-wrap > a', function (e){
    e.preventDefault();
    $('.about .form-wrap').slideDown();
  });

  //close form
  $(document).on('click', '.close-form', function (e){
    e.preventDefault();
    $('.about .form-wrap').slideUp();
    $('.send-block').hide();
  });

  //cookies
  $(document).on('click', '.cookies .btn-wrap a', function (e){
    e.preventDefault();
    $('.cookies').slideUp();
  });

  //anim number
  if($('.number-block').length >0){
    var textPos = $('.number-block').offset().top;
    $(window).scroll(function() {

      var topOfWindow = $(window).scrollTop();

      if($('.number-block').hasClass('stop')){
        return;
      }

      if (textPos < topOfWindow + 500) {
        $('.number-block .item-1 .h2').animateNumber({
          number: 145
        },2000);
        $('.number-block .item-2 .h2').animateNumber({
          number: 23
        },2000);
        $('.number-block .item-3 .h2').animateNumber({
          number: 701
        },2000);

        $('.number-block').addClass('stop');
      }
    });
  }

  //TABS
  (function($){
    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;

        showPage = function(i){
          $(tabs).find(".tab-content").children("div").hide();
          $(tabs).find(".tab-content").children("div").eq(i).show();
          $(tabs).find(".tabs-menu").children("li").removeClass("is-active");
          $(tabs).find(".tabs-menu").children("li").eq(i).addClass("is-active");
        }

        showPage(0);

        $(tabs).find(".tabs-menu").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;
        });

        $(tabs).find(".tabs-menu").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
        });
      };
      return this.each(createTabs);
    };
  })(jQuery);
  $(".tabs").lightTabs();

  //marquee
  $('.marquee').marquee({
    duration: 15000,
    gap:0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    loop:true,
    startVisible: true,
  });

  //slider
  var swiper3d = new Swiper(".slider-3d", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 4,
    pagination: {
      el: ".pagination-3d",
      clickable: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 1150,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      init: function () {
        let itemTotal = $('.slider-3d .swiper-slide').length;
        $('.number-slide .total').text(itemTotal);
        $('.number-slide .current').text("5");
      },
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      991: {
        spaceBetween: 0,
        slidesPerView: "auto",
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 900,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        },
      },
      1280: {
        spaceBetween: 0,
        slidesPerView: "auto",
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 1150,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        },
      },
    }
  });
  swiper3d.on('slideChange', function () {
    let currentItem = swiper3d.activeIndex + 1;
    $('.number-slide .current').text(currentItem);
  });

  //slider
  var swiperTeam = new Swiper(".team-slider", {
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
      nextEl: ".team-next",
      prevEl: ".team-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      991: {
        slidesPerView: "auto",
        spaceBetween: 40,
      },
    },
  });

  //slider
  var swiperAuto = new Swiper(".auto-slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    speed: 700,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".auto-next",
      prevEl: ".auto-prev",
    },
  });

  //slider
  var swiperTestimonials = new Swiper(".testimonials-slider", {
    slidesPerView: 2,
    spaceBetween: 40,
    navigation: {
      nextEl: ".testimonials-next",
      prevEl: ".testimonials-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
      },
  });

  /*animations*/
  AOS.init({
    duration: 800,
    disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  });

  /*cut text*/
  $('.testimonials .swiper-slide .text p').Cuttr({
    //options here
    truncate: 'words',
    length: 30,
  });

  /*popup*/
  $(".fancybox").fancybox({
    touch:false,
    autoFocus:false,
  });

  //nice-select
  $('select').niceSelect();

  //accordion
  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(document).on('click', '.accordion > .accordion-item .accordion-thumb', function (e){
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    })
  });


  /* mob-menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();

    $.fancybox.open( $('#menu-responsive'), {
      touch:false,
      autoFocus:false,
    });
    setTimeout(function() {
      $('body').addClass('is-active');
      $('html').addClass('is-menu');
      $('header').addClass('is-active');
    }, 100);

  });

  /*close mob menu*/
  $(document).on('click', '.close-menu a', function (e){
    e.preventDefault();
    $('body').removeClass('is-active');
    $.fancybox.close();
    $('header').removeClass('is-active');
    $('html').removeClass('is-menu');
  });

  //open sub menu
  $(document).on('click', '.sub-menu-wrap>a', function (e){
    e.preventDefault();
   $(this).closest('li').toggleClass('is-open');

   if($(this).closest('li').hasClass('is-open')){
     $(this).siblings('.sub-menu').slideDown();
   }else{
     $(this).siblings('.sub-menu').slideUp();
   }
  });



});