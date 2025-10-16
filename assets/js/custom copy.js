/*=========


Template Name: Portfolio -  HTML Template

=========*/

/*=========
----- JS INDEX -----

=========*/

$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
     // meanmenu
        $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fas fa-plus"></i>'],
    });
    ////////////////////////////////////////////////////
    //  Sidebar Js
    $(".sidebar-toggle-btn").on("click", function() {
        $(".sidebar__area").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });


    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });


    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".menu-area").removeClass("sticky");
        } else {
            $(".menu-area").addClass("sticky");
        }
    });
	      // Magnific popup
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
        //Banner Carousel
        $('.hero-area').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			loop: true,
            dots:false,
			margin: 0,
			nav: true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 10000,
			navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1024: {
					items: 1
				},
			}
		});

		$('.we-carousel').owlCarousel({
			loop: true,
            dots:false,
			margin: 0,
			nav: true,
			margin:20,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 10000,
			navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1024: {
					items: 3
				},
			}
		});
		$('.success-carousel').owlCarousel({
			loop: true,
            dots:false,
			margin: 0,
			nav: true,
			margin:20,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 10000,
			navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1024: {
					items: 1
				},
			}
		});

		$(".trending-carousel").owlCarousel({
			nav: true,
			loop:false,
			dots: false,
			pagination: false,
			margin: 25,
			autoHeight: false,
			stagePadding: 50,
		
			responsive:{
			  0:{
				items: 1,
				stagePadding: 0,
				margin: 30,
			  },
			  767:{
				items: 2,
				stagePadding: 25,
			  },
			  991:{
				items: 2,
			  },
			  1200:{
				items: 3,
			  }
			}
		  });
		$('.testimonial-carousel-two').owlCarousel({
			margin: 30,
			nav: true,
			dots:false,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<i class="fa fa-long-arrow-alt-left"></i>', '<i class=" fa fa-long-arrow-alt-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1200: {
					items: 3
				},
			}
		});

		/* ================================================== 
 FAQ 
 ================================================== */
function close_accordion_section() {
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
}

$('.accordion-section-title').click(function(e) {
    // Grab current anchor value
    var currentAttrValue = $(this).attr('href');

    if ($(e.target).is('.active')) {
        close_accordion_section();
    } else {
        close_accordion_section();

        // Add active class to section title
        $(this).addClass('active');
        // Open up the hidden content panel
        $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
    }

    e.preventDefault();
});
        //  $(window).scroll(function () {
		// 	if ($(this).scrollTop() > 300) {
		// 		$('.sticky-top').css('top', '0px');
		// 	} else {
		// 		$('.sticky-top').css('top', '-100px');
		// 	}
		// });
        $('#stripepay').click(function () {
			$('#order-form').attr('action', '');
			$('#card_number').attr('required', true);
			$('#card_exp_month').attr('required', true);
			$('#card_exp_year').attr('required', true);
			$('#card_cvc').attr('required', true);
			$('#paymentdiv').show();
		});
		$(document).on("click", "#paypalpay", function () {
			$('#order-form').attr('action', '');
			$('#card_number').removeAttr("required");
			$('#card_exp_month').removeAttr("required");
			$('#card_exp_year').removeAttr("required");
			$('#card_cvc').removeAttr("required");
			$('#paymentdiv').hide();
		});
        
        $('.counter').counterUp({
            delay: 10,
            time: 3000
          });
		     // JavaScript to toggle active class and show content
			 const menuItems = document.querySelectorAll('.tier-num');
			 const contents = document.querySelectorAll('.program-content');
		 
			 menuItems.forEach(item => {
			   item.addEventListener('click', () => {
				 // Remove active class from all menu items
				 menuItems.forEach(i => i.classList.remove('active'));
				 // Hide all contents
				 contents.forEach(c => c.classList.remove('active'));
		 
				 // Add active class to clicked menu item
				 item.classList.add('active');
				 // Show corresponding content
				 const target = item.getAttribute('data-target');
				 document.getElementById(target).classList.add('active');
			   });
			 });
		  

});
