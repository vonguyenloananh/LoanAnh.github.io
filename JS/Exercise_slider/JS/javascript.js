var SLIDE_INDEX = 0; 
var RETIMEOUT; 
showDivs(SLIDE_INDEX);

//function move the picture next or its preview
function getImage(n) {
	showDivs(SLIDE_INDEX += n);
}

//Show the slide is corresponding to the selected bar shape
function currentDiv(n) {
	showDivs(SLIDE_INDEX = n - 1);
}

//show slide animation
function showDivs(n) {
	var i;
	var slide = document.getElementsByClassName("slider-list");
	var dots = document.getElementsByClassName("demo");
	
	if (n >= slide.length) { 
		SLIDE_INDEX = 0;
	}
	if (n < 0) {
		SLIDE_INDEX = slide.length - 1; 
	}
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	//dots is the img bar to choose the img
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" sl-opacity-off", "");
	}
	slide[SLIDE_INDEX].style.display = "block";
	dots[SLIDE_INDEX].className += " sl-opacity-off"; 
	//use clearTimeout to reset the time of the slide is running.
	clearTimeout(RETIMEOUT);
	RETIMEOUT = setTimeout(function () { showDivs(SLIDE_INDEX += 1); }, 5000);
}