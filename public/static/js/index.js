// Wait for the DOM content to fully load before initializing locomotive-scroll
document.addEventListener("DOMContentLoaded", () => {

    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'), // Targets <main id="main">
        smooth: true,                        // Turns on smooth virtual scrolling
        multiplier: 1,                       // Adjust scroll speed intensity here
        lerp: 0.09,
    });

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    }, { passive: true });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}