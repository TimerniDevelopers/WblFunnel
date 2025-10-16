/*================================================
Template Name: Portfolio - HTML Template
================================================*/

/*================================================
--------------- JS INDEX -------------------------
================================================*/

$(document).ready(function ($) {

  "use strict";

  /*==============================
  Set Background Image Dynamically
  ================================*/
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
  });

  /*==============================
  Mobile Menu (MeanMenu)
  ================================*/
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
    meanExpand: ['<i class="fas fa-plus"></i>'],
  });

  /*==============================
  Sidebar Toggle
  ================================*/
  $(".sidebar-toggle-btn").on("click", function () {
    $(".sidebar__area").addClass("sidebar-opened");
    $(".body-overlay").addClass("opened");
  });

  $(".sidebar__close-btn, .body-overlay").on("click", function () {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });

  /*==============================
  One Page Navigation
  ================================*/
  var top_offset = $('.header-area').height() - 10;
  $('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrollOffset: top_offset,
  });

  /*==============================
  Sticky Menu on Scroll
  ================================*/
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".menu-area").removeClass("sticky");
    } else {
      $(".menu-area").addClass("sticky");
    }
  });

  /*==============================
  Magnific Popup (YouTube Video)
  ================================*/
  $('.video-icon').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'https://www.youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        }
      },
      srcAction: 'iframe_src',
    }
  });

  /*==============================
  Hero Carousel
  ================================*/
    // hero-slider
    var $heroSlider = $(".hero-area");
    $heroSlider.owlCarousel({
        animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
    dots: false,
    margin: 0,
    nav: true,
    smartSpeed: 500,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 10000,
    navText: [
      '<span class="fa fa-long-arrow-alt-left"></span>',
      '<span class="fa fa-long-arrow-alt-right"></span>'
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1024: { items: 1 },
    }
    });
  $('.hero-area').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
    dots: false,
    margin: 0,
    nav: true,
    smartSpeed: 500,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 10000,
    navText: [
      '<span class="fa fa-long-arrow-alt-left"></span>',
      '<span class="fa fa-long-arrow-alt-right"></span>'
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1024: { items: 1 },
    }
  });

  /*==============================
  We Carousel
  ================================*/
  $('.we-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 20,
    smartSpeed: 500,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 10000,
    navText: [
      '<span class="fa fa-long-arrow-alt-left"></span>',
      '<span class="fa fa-long-arrow-alt-right"></span>'
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1024: { items: 3 },
    }
  });

  /*==============================
  Success Carousel
  ================================*/
  $('.success-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 20,
    smartSpeed: 500,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 10000,
    navText: [
      '<span class="fa fa-long-arrow-alt-left"></span>',
      '<span class="fa fa-long-arrow-alt-right"></span>'
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1024: { items: 1 },
    }
  });

  /*==============================
  Trending Carousel
  ================================*/
  $(".trending-carousel").owlCarousel({
    nav: true,
    loop: false,
    dots: false,
    pagination: false,
    margin: 25,
    autoHeight: false,
    stagePadding: 50,
    responsive: {
      0: { items: 1, stagePadding: 0, margin: 30 },
      767: { items: 2, stagePadding: 25 },
      991: { items: 2 },
      1200: { items: 3 },
    }
  });

  /*==============================
  Testimonial Carousel
  ================================*/
  $('.testimonial-carousel-two').owlCarousel({
    margin: 30,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 700,
    autoplay: 5000,
    navText: [
      '<i class="fa fa-long-arrow-alt-left"></i>',
      '<i class="fa fa-long-arrow-alt-right"></i>'
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 },
    }
  });

  /*==============================
  FAQ Accordion
  ================================*/
  function closeAccordionSection() {
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }

  $('.accordion-section-title').click(function (e) {
    e.preventDefault();
    var currentAttrValue = $(this).attr('href');

    if ($(this).hasClass('active')) {
      closeAccordionSection();
    } else {
      closeAccordionSection();
      $(this).addClass('active');
      $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
    }
  });

  /*==============================
  Payment Toggle (Stripe & PayPal)
  ================================*/
  $('#stripepay').click(function () {
    $('#order-form').attr('action', '');
    $('#card_number, #card_exp_month, #card_exp_year, #card_cvc').attr('required', true);
    $('#paymentdiv').show();
  });

  $('#paypalpay').click(function () {
    $('#order-form').attr('action', '');
    $('#card_number, #card_exp_month, #card_exp_year, #card_cvc').removeAttr("required");
    $('#paymentdiv').hide();
  });

  /*==============================
  Counter Animation
  ================================*/
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });

  /*==============================
  Program Tab Toggle
  ================================*/
  const menuItems = document.querySelectorAll('.tier-num');
  const contents = document.querySelectorAll('.program-content');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(i => i.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      item.classList.add('active');

      const target = item.getAttribute('data-target');
      const targetEl = document.getElementById(target);
      if (targetEl) targetEl.classList.add('active');
    });
  });

});
