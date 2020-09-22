var carouselImages = [
	"media/carousel/0.jpg",
	"media/carousel/1.jpg",
	"media/carousel/2.jpg",
	"media/carousel/3.jpg"
], x = -1;

function displayNextImage() {
	x = (x === carouselImages.length - 1) ? 0 : x + 1;
	document.getElementById("carousel").src = carouselImages[x];
}

function displayPreviousImage() {
	x = (x <= 0) ? carouselImages.length - 1 : x - 1;
	document.getElementById("carousel").src = carouselImages[x];
}

function startTimer() {
	setInterval(displayNextImage, 5500);
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var d = today.getDate();
	var mo = today.getMonth();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("Time").innerHTML =
		h + ":" + m
	document.getElementById("Date").innerHTML =
		d + "-" + mo
	setTimeout(startTime, 1000);
}
function checkTime(i) {
	if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
	return i;
}
