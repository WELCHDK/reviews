var map, places, infoWindow;
var markers = [];
var autocomplete;
var countries = {
	'us': {
		center: {
			lat: 37.1,
			lng: -95.7
		},
		zoom: 3
	}
}


var nearby = document.getElementById('nearby');
var newLocation = document.getElementById('location');
var static = document.getElementById("static-sv");
$("#nearby").on('click', nearSearch);

// Search for restaurants in the selected city, within the viewport of the map.
function search() {
	var search = {
		bounds: map.getBounds(),
		types: ['restaurant']
	};

	places.nearbySearch(search, function (results, status) {

		if (status === google.maps.places.PlacesServiceStatus.OK) {
			clearResults();
      clearMarkers();
      
			// Create a marker for each restaurant found, and change the marker color
			for (var i = 0; i < results.length; i++) {

				markers[i] = new google.maps.Marker({
					position: {
						lat: results[i].geometry.location.lat(),
						lng: results[i].geometry.location.lng()
					},
					title: results[i].name,
					icon: {
						url: "http://maps.google.com/mapfiles/ms/icons/blue.png"
					}
				});
				markers[i].setMap(map);

				// If the user clicks a restaurant marker, show the details of that restaurant
				markers[i].placeResult = results[i];
				google.maps.event.addListener(markers[i], 'click', showDetails);

				addResult(results[i], i);

				const lte = results[i].geometry.location.lat();
				const lde = results[i].geometry.location.lng();
			}

			markerReset();
			$("#headingNew").attr("disabled", false).css('color', "gold");
		}

	});

}

function nearSearch() {
	$("#modal").css("display", "none");
	$("#headingNew").attr("disabled", false).css('color', "gold");

	places = new google.maps.places.PlacesService(map);

	search();
}