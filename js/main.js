(function ($) {
    'use strict';

    /* =======================================
        For Menu
    =======================================*/
   $('.mainmenu ul#primary-menu').slicknav();

 
    /* =======================================
        For Sticky Menu
    =======================================*/

	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			$('#sticky_navigation').css({ 'position': 'fixed', 'top':0, });
		} else {
			$('#sticky_navigation').css({ 'position': 'relative' }); 
		}   
	};
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
	});
	
	// NOT required:
	// for this demo disable all links that point to "#"
	$('a[href="#"]').on('click', function(event){ 
		event.preventDefault(); 
	});
	
	
	/* =======================================
        For Slider
    =======================================*/
	$(".slides_wrapper").on("translate.owl.carousel", function() {
		$(".refit_slide_item h4, .refit_slide_item h2").removeClass("animated fadeInUp").css("opacity", "0");
		$(".refit_slide_item .refit_slide_btn").removeClass("animated fadeInDown").css("opacity", "0");
	});

	$(".slides_wrapper").on("translated.owl.carousel", function() {
		$(".refit_slide_item h4, .refit_slide_item h2").addClass("animated fadeInUp").css("opacity", "1");
		$(".refit_slide_item .refit_slide_btn").addClass("animated fadeInDown").css("opacity", "1");
	});

})(jQuery);