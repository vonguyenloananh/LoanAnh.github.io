var SLIDE_INDEX = 0; // Variable of active image in list image
showSlide(SLIDE_INDEX); // Set default for the first slide

setInterval(function () { showSlide(SLIDE_INDEX += 1); }, 3000);

function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("slide");
    var listImage = document.getElementsByClassName("image-mini");

    // Move from the last slide to the first (n = 4)
    if (n >= slide.length) {
        SLIDE_INDEX = 0;
    }
    // Move from the first slide to the last
    if (n < 0) {
        SLIDE_INDEX = slide.length - 1;
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < listImage.length; i++) {
        listImage[i].className = listImage[i].className.replace(" active", "");
    }
    // Change from "none" to "block"
    slide[SLIDE_INDEX].style.display = "block";
    // Border current image with class "active"
    listImage[SLIDE_INDEX].className += " active";
}

function currentImg(n) {
    showSlide(SLIDE_INDEX = n);
}

function getImg(n) {
	showSlide(SLIDE_INDEX += n);
}