(function () {
	"use strict";
	window.addEventListener("load", function () {
		addAndRemoveFadeAnimation(
			document.querySelector(".hero-wrap .firstText"),
			"fadeInLeftBig"
		);
		addAndRemoveFadeAnimation(
			document.querySelector(".hero-wrap .secondText"),
			"fadeInRightBig"
		);
		const preloader = document.querySelector("#cf-loading");
		var x = 0.01;
		setTimeout(() => {
			const fadeEffect = setInterval(() => {
				if (!preloader.style.opacity) {
					preloader.style.opacity = 1;
				}
				if (preloader.style.opacity >= 0.1) {
					x *= 2;
					preloader.style.opacity -= x;
				} else {
					preloader.style.opacity = 0;
					preloader.style.display = "none";
					clearInterval(fadeEffect);
				}
			}, 50);
		}, 500);

		var navLineBar = document.querySelector(".menu .line");
		var scrollPrev = window.pageYOffset;

		// Particle.JS
		particlesJS("particles-js", {
			particles: {
				number: {
					value: 100,
					density: { enable: true, value_area: 599 },
				},
				color: { value: ["#0069d9"] },
				shape: {
					type: "circle",
					stroke: { width: 0, color: "#000000" },
					polygon: { nb_sides: 8 },
					image: { src: "img/github.svg", width: 100, height: 100 },
				},
				opacity: {
					value: 0.5,
					random: false,
					anim: {
						enable: false,
						speed: 1,
						opacity_min: 0.1,
						sync: false,
					},
				},
				size: {
					value: 2,
					random: true,
					anim: {
						enable: false,
						speed: 40,
						size_min: 0.4,
						sync: false,
					},
				},
				line_linked: {
					enable: true,
					distance: 150,
					color: "#0069d9",
					opacity: 0.4,
					width: 1.5,
				},
				move: {
					enable: true,
					speed: 5,
					direction: "none",
					random: false,
					straight: false,
					out_mode: "out",
					bounce: false,
					attract: { enable: false, rotateX: 600, rotateY: 1200 },
				},
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: { enable: false, mode: "push" },
					onclick: { enable: true, mode: "repulse" },
					resize: true,
				},
				modes: {
					grab: { distance: 400, line_linked: { opacity: 1 } },
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3,
					},
					repulse: { distance: 200, duration: 0.4 },
					push: { particles_nb: 4 },
					remove: { particles_nb: 2 },
				},
			},
			retina_detect: true,
		});

		var animatedLetters = document.querySelectorAll(".hero-wrap h1 span");
		animatedLetters.forEach((element) => {
			addAndRemoveRubberBandAnimation(element, "rubberBand");
		});

		navLineBar.style.left = `${
			document.querySelector(".menu .active").getAttribute("data-index") *
			25
		}%`;

		// Navbar Sticky (If you want the Sticky Nav on scroll Please unComment this code)

		// window.addEventListener("scroll", function () {
		// 	var header = document.querySelector(".header");
		// 	header.classList.toggle("sticky", window.scrollY > 0);
		// 	var scrollCur = window.pageYOffset;
		// 	if (scrollPrev > scrollCur) {
		// 		navbar.style.top = "0";
		// 	} else {
		// 		navbar.style.top = "-90px";
		// 	}
		// 	scrollPrev = scrollCur;
		// });

		// Typed.JS
		var typed = new Typed(".txt-wrap .txt-typed", {
			strings: [
				"Designer.",
				"FreeLancer.",
				"Developer.",
				"Blogger.",
				"Pentester.",
			],
			typeSpeed: 80,
			loop: true,
			backDelay: 1000,
			startDelay: 400,
			backSpeed: 30,
			loop: true,
			showCursor: false,
		});

		function addAndRemoveRubberBandAnimation(element, animation) {
			element.addEventListener("mouseover", function () {
				element.classList.add("animated");
				element.classList.add(animation);
			});
			element.addEventListener("animationend", function () {
				element.classList.remove("animated");
				element.classList.remove(animation);
			});
		}
		function addAndRemoveFadeAnimation(element, animation) {
			element.classList.add("animated");
			element.classList.add(animation);
			setTimeout(() => {
				element.addEventListener("animationend", function () {
					element.classList.remove("animated");
					element.classList.remove(animation);
				});
			}, 500);
		}
	});
})();

let menuSection = document.querySelectorAll(".menu a");

// for clickable event
menuSection.forEach((v, i) => {
	var navLineBar = document.querySelector(".menu .line");
	v.onclick = () => {
		setTimeout(() => {
			menuSection.forEach((j) => j.classList.remove("active"));
			v.classList.add("active");
			navLineBar.style.left = `${i * 25}%`;
		}, 300);
	};
});

// for window scrolldown event

window.onscroll = () => {
	let mainSection = document.querySelectorAll(".scrollspy-section");
	var navLineBar = document.querySelector(".menu .line");

	mainSection.forEach((v, i) => {
		let rect = v.getBoundingClientRect().y;
		if (rect < window.innerHeight - 200) {
			menuSection.forEach((v) => v.classList.remove("active"));
			navLineBar.style.left = `${i * 25}%`;
			menuSection[i].classList.add("active");
		}
	});
};

function createCircleChart(percent, color, size, stroke) {
	let svg = `<svg class="mkc_circle-chart" viewbox="0 0 36 36" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <path class="mkc_circle-bg" stroke="#eeeeee" stroke-width="${
			stroke * 0.3
		}" fill="none" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"/>
        <path class="mkc_circle" stroke="${color}" stroke-width="${stroke}" stroke-dasharray="${percent},100" stroke-linecap="round" fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831" />
    </svg>
    <p class="mkc_info">${percent}%</p>
    `;
	return svg;
}

let charts = document.getElementsByClassName("mkCharts");

for (let i = 0; i < charts.length; i++) {
	let chart = charts[i];
	let percent = chart.dataset.percent;
	let color = "color" in chart.dataset ? chart.dataset.color : "#2F4F4F";
	let size = "size" in chart.dataset ? chart.dataset.size : "100";
	let stroke = "stroke" in chart.dataset ? chart.dataset.stroke : "1";
	charts[i].innerHTML = createCircleChart(percent, color, size, stroke);
}
