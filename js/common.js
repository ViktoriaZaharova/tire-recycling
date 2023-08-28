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

$(document).ready(function () {
	$(".js-tab-trigger").click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.js-tab-content[data-tab="' + id + '"]');

		$('.mega-menu__route.active').removeClass('active'); // 1
		$(this).addClass('active'); // 2

		$('.js-tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	})
});
