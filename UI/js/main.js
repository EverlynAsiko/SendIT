"use strict";

// Initialize and add the map
function initMap() {
  var loc = {lat: -25.344, lng: 131.036};
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: loc});
  var marker = new google.maps.Marker({position: loc, map: map});
}