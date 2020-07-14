 function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img").src = images[x];
          }

          function displayPreviousImage() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.getElementById("img").src = images[x];
          }

          function startTimer() {
              setInterval(displayNextImage, 5500);
          }

          var images = [], x = -1;
          images[0] = "../picture/0.jpg";
          images[1] = "../picture/1.jpg";
          images[2] = "../picture/2.jpg";
          images[3] = "../picture/3.jpg";