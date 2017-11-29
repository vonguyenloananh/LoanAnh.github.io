var initImage = 0;
var img_show = $(".slider-content img");
var img_run = $(".image-mini");
var timeOut;

/**
 * Load Img Frist
 */
$(document).ready(function() {
    showImage();
});

/**
 * PREV IMGGE
 */
$("#btn_prev").click(function() {
    initImage--;
    showImage();
});

/**
 * NEXT IMGGE
 */
$("#btn_next").click(function() {
    initImage++;
    showImage();
});

/**
 * Click Mini Image -> Image Window Current
 */
$(".image-mini").click(function() {
    initImage = img_run.index(this);
    showImage();
});

/**
 * Show Image
 */
function showImage() {
    if (initImage > 3) {// Limit Img
        initImage = 0;
    }
    if (initImage < 0) {// Limit Img
        initImage = 3;
    }
    img_show.hide(); // Hide All Image
    img_show.eq(initImage).show(); // Show Image Current
    currentImage();
    clearTimeout(timeOut);
    timeOut = setTimeout(function() {
        initImage++;
        showImage();
    }, 3000);
}

/**
 * Current Image Mini
 */
function currentImage() {
    img_run.removeClass("effect");
    img_run.eq(initImage).addClass("effect");
}