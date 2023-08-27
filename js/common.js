$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
		$('.navbar-menu.show').removeClass('show');
	}
	return false;
});
