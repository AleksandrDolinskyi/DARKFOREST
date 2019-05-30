$(document).ready(function() {

	function heightDetect() {
		$(".header").css("height", $(window).height());
	};
	
	heightDetect();
	
	$(window).resize(function() {
		heightDetect();
	});

	$(".section .col-md-12").animated("fadeInDown");
	$(".tech-item, .main-form").animated("fadeInLeft");
	$(".service, .portfolio-item img:first-child").animated("zoomIn");

	$(".logo, .menu").animated2("fadeInDown");
	$(".header-caption img").animated2("fadeInLeft");
	$(".header-caption h1, .header-caption p").animated2("fadeInRight");
	$(".header-footer").animated2("fadeInUp");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".header-footer a, .back-to-top a").mPageScroll2id();

	$(".menu ul a").mPageScroll2id({
		offset: 60
	});

	// Animated Counter
	(function($){
		$('.count').waypoint(function(dir) {
				if (dir === "down") {
					$(this).prop('Counter',0).animate({
						Counter: $(this).text()
					}, {
						duration: 2000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
					});
				};
		}, {
				triggerOnce: true,
				offset: "90%"
		});
	})(jQuery);

	// navbar
	$(window).scroll(function(){

	    if ($(window).scrollTop() > 20) {
	        $('.navbar').addClass('navbar-fixed-top scrolled');
	    }
	    else {
	        $('.navbar').removeClass('navbar-fixed-top scrolled')
	    }
	});
});