/* jshint esversion: 11, jquery: true */

// all documtation foud at https://developers.google.com/maps/documentation/javascript/marker-clustering?hl=en
// initialise and center map by getting map id in home index.html page
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 51.820506,
            lng: -2.000396
        },
    });
    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });

    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // create array of locations that will be the markers shown on the map.
    const locations = [
        // Cirencester Waterstones GL7 1LL
        {
            lat: 51.71627221147043,
            lng: -1.968028579311726
        },
        //Waterstones Cheltenham GL5 1LE
        {
            lat: 51.90014197225292,
            lng: -2.076425446925063
        },
        //Cineworld Cheltenham GL50 4EF
        {
            lat: 51.903143544417084,
            lng: -2.0761462309713155
        },
    ];

    // Add some markers to the map.
    const markers = locations.map((position, i) => {
        const label = labels[i % labels.length];
        const marker = new google.maps.Marker({
            position,
            label,
        });
         // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
        infoWindow.setContent(label);
        infoWindow.open(map, marker);
      });
      return marker;
    });
const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
}