(function () {
  "use strict";
  if (typeof window !== `undefined`) {
    var headerEl = document.querySelector("#klHeader");
    let prevScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", () => {
      const curScrollPosition = window.pageYOffset;
      const difference = prevScrollPosition - curScrollPosition;
      //   setMobileNav(false);
      if (curScrollPosition > 100) {
        headerEl.classList.add("compaq");
      } else {
        headerEl.classList.remove("compaq");
      }
      if (difference < 0) {
        headerEl.classList.add("hide");
      } else {
        headerEl.classList.remove("hide");
      }
      prevScrollPosition = curScrollPosition;
    });
  } else {
    console.log("no window");
  }

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
  var animatedLetters = document.querySelectorAll(".intro-text h1 span");
  animatedLetters.forEach((element) => {
    addAndRemoveRubberBandAnimation(element, "rubberBand");
  });
})();

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


// document.querySelectorAll(".skills ul.skill-nav li").forEach((element) => {
//   element.addEventListener("click", function () {
//     document.querySelectorAll(".skills ul.skill-nav li").forEach((element) => {
//       element.classList.remove("active");
//     });
//     this.classList.add("active");
//     var data = "." + this.text.toLowerCase();
//     iso.arrange({
//       filter: data,
//     });
//   });
// });

// var iso = new Isotope('.skills .skill', {
//   itemSelector: ".all",
//   percentPosition: true,
//   layoutMode: 'fitRows',
//   masonry: {
//     columnWidth: ".web",
//   },
// });


$(".skills ul.skill-nav li").click(function () {
  $(".skills ul.skill-nav li").removeClass("active");
  $(this).addClass("active");
  var data = $(this).data("filter");
  $grid.isotope({
    filter: data,
  });
});

var $grid = $(".skills .skill").isotope({
  itemSelector: ".all",
  masonry: {
    columnWidth: ".web",
  },
});

function calcPaths(totalDur) {
  document.body.classList.remove('animated')
  const paths = document.querySelectorAll('.autograph__path')
  let len = 0
  let delay = 0
  if (!paths.length) {
    return false
  }
  const totalDuration = totalDur || 5
  paths.forEach((path) => {
    const totalLen = path.getTotalLength()
    len += totalLen
  })

  paths.forEach((path) => {
    const pathElem = path
    const totalLen = path.getTotalLength()
    const duration = totalLen / len * totalDuration
    pathElem.style.animationDuration = `${duration < 0.2 ? 0.2 : duration}s`
    pathElem.style.animationDelay = `${delay}s`
    pathElem.setAttribute('stroke-dasharray', totalLen)
    pathElem.setAttribute('stroke-dashoffset', totalLen)
    delay += duration + 0.2
  })
  document.body.classList.add('animated')
  return true
}
setInterval(calcPaths, 7000)
calcPaths()

$(".mobile-nav").on("click",()=>{
  $(".menubar").toggleClass("mobilenav-activate")
});