document.querySelectorAll('.slider').forEach((n, i) => {
	window[`slider${i+1}`] = new Swiper(n, {
		freeMode: true,
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false
		},
		speed: 50000,
		// response
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 15
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		}
	})
})
bindSwipers(slider1, slider2, slider3)