//slider
       $(window).load(function(){
            $('#slide1').skewSlider({
                 speed: 1400,
                 easing: 'ease',
                 skew: -25,
                 delay: 300,
                 speedDiference: 150,
                 slidePercent: 80,
                 slideshow: 6000,
                 moveFx: true,
                 ratio: 40/7,
                 breakpoints: {
                    tablet: {
                        maxWidth : 1024,
                        slidePercent : 90,
                        ratio : 40/15,
                        moveFx: true,
                        skew: -15
                    },
                    phone: {
                        maxWidth : 600,
                        slidePercent : 100,
                        ratio : 40/20,
                    }
                }
             });
        });
   



$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
