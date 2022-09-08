$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");


});


$(window).ready(function () {
	console.log('test')
	$('.header__burger').click(function (evt) {
		$('.header__burger, .nav').toggleClass('active')
	})
})