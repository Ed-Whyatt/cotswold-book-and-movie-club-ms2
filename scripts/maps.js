/* jshint esversion: 11, jquery: true */

// all documtation foud at https://developers.google.com/maps/documentation/javascript/marker-clustering?hl=en
// initialise and center map by getting map id in home index.html page
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: { lat:  51.820506, lng: -2.000396 },
    });
    const infoWindow = new google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });

     // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

}

