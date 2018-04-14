jQuery(document).ready(function($) {
	$('.click_btn').on('click', function(event) {
		event.preventDefault();
		$('.overlay').fadeToggle(1000);
		$('.modal').animate({
			top: '20%',
			left: 'toggle'
			},
			3000);
	});
	$('.close').on('click', function(event) {
		event.preventDefault();
		$('.modal').animate({
			top: '0%',
			left: 'toggle'
			},
			400);
		$('.overlay').fadeOut(1800);
	});
});