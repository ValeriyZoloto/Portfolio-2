$(function () {
	const mixer = mixitup(".portfolio__list");
	let mobileMenuToggle = document.querySelector(".burger");
	let mobMenu = document.querySelector(".menu__list");

	mobileMenuToggle.addEventListener("click", function () {
		console.log("click togle!");
		mobMenu.classList.toggle("menu__list--active");
		this.classList.toggle("active");
	});

	//авто-закрытие мобильного меню
	$("mobileMenuToggle, .menu__item a").on("click", function () {
		$(".menu__list").toggleClass("menu__list--active"),
			$(".burger").toggleClass("active");
	});

	$(".reviews__slider").slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: false,
		autoplaySpeed: 3000,
	});

	const windowHeight = $(window).height();
	console.log(windowHeight);

	// Следим за скроллом, и показываем / скрываем кнопку
	$(window).scroll(function () {
		console.log($(this).scroll());
		if ($(this).scrollTop() > windowHeight) {
			$(".scroll").fadeIn();
		} else {
			$(".scroll").fadeOut();
		}
	});
	// При клике на кнопку - делаем прокуртку наверх страницы

	$(".scroll").click(function (event) {
		console.log(11111);
		event.preventDefault();
		$("html").animate({ scrollTop: 0 }, 1500);
	});

	$(".menu a, header a").on("click", function (e) {
		e.preventDefault();
		const id = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({ scrollTop: top }, 1500);
	});
});
