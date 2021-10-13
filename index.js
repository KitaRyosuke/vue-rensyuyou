let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.924468672663814,  lng: 143.19244696911696 },
    zoom: 20,
  });
}
