// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
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


// slide images
var images = [];

images[0] = ["./images/slider/2.jpg"];
images[1] = ["./images/slider/1.jpg"];
images[2] = ["./images/slider/e.jpg"];
var index = 0;


function change() {
    document.getElementById("hero-img").src = images[index];
    if (index == 2) {
      index = 0;
    } else {
      index++;
    }
  
    setTimeout(change, 5000);
  }
  
  window.onload = change();