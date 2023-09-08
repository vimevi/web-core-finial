// var init = false;
// var swiper;
// function swiperCard() {
// 	if (window.innerWidth <= 768) {
// 		if (!init) {
// 			init = true;
// 			swiper = new Swiper('.swiper', {
// 				slidesPerView: 'auto',
// 				pagination: {
// 					el: '.swiper-pagination',
// 					clickable: true,
// 				},
// 				// autoplay: { delay: 6000 },
// 				keyboard: {
// 					enabled: true,
// 					onlyInViewport: true,
// 				},
// 				speed: 400,
// 				slideToClickedSlide: true,
// 				spaceBetween: 16,
// 				freeMode: true,
// 			});
// 		}
// 	} else if (init) {
// 		swiper.slideTo(0); // Устанавливаем активный слайд с индексом 0 при ресайзе
// 	} else {
// 		init = false;
// 	}
// }
// swiperCard();
// window.addEventListener('resize', swiperCard);

// Исправленная версия

let init = false;
let swiper;

function initSwiper() {
	swiper = new Swiper('.swiper', {
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// autoplay: {
		// 	delay: 6000,
		// },
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		loop: false,
		speed: 400,
		slideToClickedSlide: true,
		spaceBetween: 16,
		freeMode: true,
	});
}

function destroySwiper() {
	if (swiper && swiper.destroy) {
		swiper.destroy(true, true);
	}
}

function swiperCard() {
	if (window.innerWidth <= 768) {
		if (!init) {
			initSwiper();
			init = true;
		}
	} else if (init) {
		destroySwiper();
		init = false;
	}
}
swiperCard();
window.addEventListener('resize', swiperCard);
