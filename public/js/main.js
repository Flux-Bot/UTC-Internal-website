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

//Clock in 12 hours and refreshing ever second
function ShowTime(){
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s =date.getSeconds();
	var Session = "AM";

	if (h==0){
		h= 12
	}

	if(h>12){
		h = h-12;
		Session = "PM";
		}

		h = (h < 10) ? "0" + h : h;
		m = (m < 10) ? "0" + m : m;
		s = (s < 10) ? "0" + s : s;

		var time = h + ":" + m + "" + Session;
		document.getElementById("MyClockDisplay").innerHTML = time;
		document.getElementById("MyClockDisplay").textContent = time;

		setTimeout(ShowTime, 1000);
	}

	ShowTime();

//side nav side
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }
