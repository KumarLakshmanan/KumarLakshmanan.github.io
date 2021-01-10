(function () {
    'use strict'
    var typed = new Typed(".text-typed", {
        strings: ['PROGRAMMER.', 'PENTESER.', 'HTB TOPPER.', 'BLOGGER.'],
        typeSpeed: 80,
        loop: true,
        backDelay: 900,
        startDelay: 400,
        backSpeed: 50,
        loop: true,
        showCursor: false,
      });
    function toggleMenu(){
        var menuToggle = document.querySelector('.toggle');
        var menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active')
        menu.classList.toggle('active')
    }
    document.querySelector("div.toggle").addEventListener("click" , toggleMenu);
    window.addEventListener("load", function() {
        setTimeout(() => {
            document.querySelector(".fullscreen").style.display = "none";
        }, 500);
    });
    window.addEventListener('scroll', function(){
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });    
})();