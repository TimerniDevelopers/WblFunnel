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
			  1000:{
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
		  

});
