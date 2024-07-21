// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// lightbox
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true,
    });

});

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}



const images = [];

const imagePaths= [];
imagePaths[0] = ["./images/slider/2.jpg"];
imagePaths[1] = ["./images/slider/1.jpg"];
imagePaths[2] = ["./images/slider/e.jpg"];
let index = 0;


function preloadImages(imageArray) {
    for (let i = 0; i < imageArray.length; i++) {
        images[i] = new Image();
        images[i].src = imageArray[i];
        if(i == 2){
            images[i].onload = setTimeout(changeImage, 5000);
        }
    }
    
}

preloadImages(imagePaths);

// function change() {
//     imageElement = document.getElementById("hero-img");
//     // imageElement.style.opacity = 0.4;

//     document.getElementById("hero-img").src = images[index];
//     index = (index+1)%3;

//     // imageElement.style.opacity = 0;
//     setTimeout(change, 5000);
//   }

//   window.onload = change();

function changeImage() {
    const imageElement = document.getElementById('hero-img');

    // Fade out
    imageElement.style.opacity = 0;
    
    // index = (index + 1) % 3;
    
    // Fade in
    // After the fade-out transition completes (1s), change the image and fade in
    setTimeout(() => {
        imageElement.src = images[index].src;
        index = (index + 1) % 3
        imageElement.style.opacity = 0.4;
        images[index].onload = setTimeout(changeImage, 5000);
    }, 1000); // Match this duration to the CSS transition duration
}


