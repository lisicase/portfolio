"use strict";

let carousel = document.querySelector("carousel");
if (carousel != null) {
    let nextBtn = document.querySelector("a.carousel-control-next");
    let prevBtn = document.querySelector("a.carousel-control-prev");

    nextBtn.addEventListener("click", cycleForward);
    prevBtn.addEventListener("click", cycleBackward);

    let indicators = document.querySelector("ol.carousel-indicators");
    for (let i = 0; i < indicators.childElementCount; i++) {
        let indicator = document.querySelector("ol.carousel-indicators:nthchild:(" + i + ")");
        indicator.addEventListener("click", function() {
            goToSlide(i);
        });
    }
}

function cycleForward() {
    carousel.carousel('next');
}

function cycleBackward() {
    carousel.carousel('prev');
}

function goToSlide(slideNum) {
    carousel.carousel(number);
}