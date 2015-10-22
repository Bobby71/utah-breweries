	var map;
window.initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.6307151, lng: -111.9093215},
    zoom: 11
  });
}