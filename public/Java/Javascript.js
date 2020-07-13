/*
<script type = "text/javascript">
    function displayNextImage() {
        x = (x === images.length - 1) ? 0 : x + 1;
        document.getElementById("img").src = images[x];
    }

    function displayPreviousImage() {
        x = (x <= 0) ? images.length - 1 : x - 1;
        document.getElementById("img").src = images[x];
    }

    function startTimer() {
        setInterval(displayNextImage, 9000);
    }

    var images = [], x = -1;
    images[0] = "/picturewheel/1.jfif";
    images[1] = "/picturewheel/2.jfif";
    images[2] = "/picturewheel/3.jfif";
</script>


    <body onload = "startTimer()">
    <img id="img" src="/picturewheel/0.jfif/>
    <button type="button" onclick="displayPreviousImage()">Previous</button>
    <button type="button" onclick="displayNextImage()">Next</button>
//-->