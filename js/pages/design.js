// Functions
// -----------------------

// function resumeEasterEgg() {

// }

// Document Ready Functions
// -----------------------

$(function() {

	var sliderContainer = $('.project-slider');

	for( i = 0; i < sliderContainer.length; i++) {
		
		$(sliderContainer[i]).owlCarousel({
			items: 1,
			nav: false,
			dots: true
		});
	}

});