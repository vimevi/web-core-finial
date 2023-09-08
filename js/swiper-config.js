// Исправленная версия -- прошлая версия

// const resizebleSlider = () => {
// 	s;
// };

// let init = false;
// let swiper;

// function initSwiper() {
// 	swiper = new Swiper('.swiper', {
// 		slidesPerView: 'auto',
// 		pagination: {
// 			el: '.swiper-pagination',
// 			clickable: true,
// 		},
// 		// autoplay: {
// 		// 	delay: 6000,
// 		// },
// 		keyboard: {
// 			enabled: true,
// 			onlyInViewport: true,
// 		},
// 		loop: false,
// 		slideToClickedSlide: true,
// 		spaceBetween: 16,
// 		freeMode: true,
// 	});
// }

// function destroySwiper() {
// 	if (swiper && swiper.destroy) {
// 		swiper.destroy(true, true);
// 	}
// }

// function swiperCard() {
// 	if (window.innerWidth <= 768) {
// 		if (!init) {
// 			initSwiper();
// 			init = true;
// 		}
// 	} else if (init) {
// 		destroySwiper();
// 		init = false;
// 	}
// }

// swiperCard();
// window.addEventListener('resize', swiperCard);

//////

window.addEventListener('DOMContentLoaded', () => {
	const resizableSwiper = (
		breakpoint,
		swiperClass,
		swiperSettings,
		callback
	) => {
		let swiper;

		breakpoint = window.matchMedia(breakpoint);

		const enableSwiper = function (className, settings) {
			swiper = new Swiper(className, settings);

			if (callback) {
				callback(swiper);
			}
		};

		const checker = function () {
			if (breakpoint.matches) {
				return enableSwiper(swiperClass, swiperSettings);
			} else {
				if (swiper !== undefined) swiper.destroy(true, true);
				return;
			}
		};

		breakpoint.addEventListener('change', checker);
		checker();
	};

	resizableSwiper('(max-width: 768px)', '.swiper', {
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// autoplay: {
		// 	delay: 6000,
		// },
		// keyboard: {
		// 	enabled: true,
		// 	onlyInViewport: true,
		// },
		// slideToClickedSlide: true,
		spaceBetween: 16,
		freeMode: true,
	});
});
