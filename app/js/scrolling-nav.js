/*****Scroll function start*****/
$(window).on("scroll",function() {
	/*Header animaion onscroll*/
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$(".navbar").addClass("fixed");
	} else {
		$(".navbar").removeClass("fixed");
	}
	/*Header animaion onscroll*/
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
