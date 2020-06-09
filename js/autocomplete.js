
// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
    search();
    nearbyReset();
  } else {
    $("#autocomplete").attr("placeholder", "Enter a City");
  }
}


function restaurantSearch() {
  console.log("restaurantSearch");
  //placeholder is set
  //Restaurant selection filter is enabled
  //$("#autocomplete").attr("placeholder", "Enter a City").css("color", "white");

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: countries.us.zoom,
    center: countries.us.center,
    mapTypeControl: false,
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });

  var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('streetview'), {
      position: {},

    });
  map.setStreetView(panorama);
  // Creates autocomplete input with type: city
  autocomplete = new google.maps.places.Autocomplete(
    (
      document.getElementById('autocomplete')), {
      types: ['(cities)'],
    });
  console.log("autocomplete");
  places = new google.maps.places.PlacesService(map);

  autocomplete.addListener('place_changed', onPlaceChanged);

  // This event listener will call addMarker() when the map is clicked.
  map.addListener('click', function (event) {
    addMarker(event.latLng);
    markerReset();
  });
  var clickHandler = new ClickEventHandler(map);

}
