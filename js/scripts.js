$(document).ready(function() {
	//
	//carufredsel
	$('#caroufredsel_slider1').carouFredSel({
		auto: {
			timeoutDuration: 9000					
		},
		responsive: true,		
		direction:	"left",
		prev: '.prev1',
		next: '.next1',
		width: '100%',
		scroll: {
			items: 1,
			duration: 1000,
			easing: "easeOutExpo",
			fx: "fade"
		},			
		items: {
        	width: '1000',
			height: 'variable',	//	optionally resize item-height			  
			visible: {
				min: 1,
				max: 1
			}
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
			},
		pagination  : ".pagination1"


	});
	//	carouFredSel
	$('#slider3 .carousel.main ul').carouFredSel({
		auto: {
			timeoutDuration: 8000					
		},
		responsive: true,
		prev: '.prev3',
		next: '.next3',
		width: '100%',
		scroll: {
			items: 1,
			duration: 1000,
			easing: "easeOutExpo"
		},			
		items: {
        	width: '310',
			height: 'variable',	//	optionally resize item-height			  
			visible: {
				min: 1,
				max: 4
			}
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
			}
	}); 



	$(window).bind("resize",updateSizes_vat).bind("load",updateSizes_vat);
	function updateSizes_vat(){
		$('#caroufredsel_slider1').trigger("updateSizes");
		$('#slider3 .carousel.main ul').trigger("updateSizes");
	}
	updateSizes_vat();

}); //
$(window).load(function() {
	//

}); //