window.onload = function () {
	$("#autocomplete").val("");
	$("#headingNew").attr("disabled", true).css('color', "white");

	if (typeof google != 'undefined') {
		initMap();

	}

}
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
var starSelection = document.getElementById("headingNew");
var starOption = document.getElementById("option");
var newPhoto = document.getElementById("place-photo");
var photo = document.createElement('img');

nearby.addEventListener('click', headingReset)

$("#location").on('click', locationReset);
$("#headingNew").on('click', starSelect);
$("#nearby").on('click', nearbyReset);


function addResult(result, i) {
	let nearResults = document.getElementById('newRest');
	let list = document.createElement('p');
	list.onclick = function () {
		google.maps.event.trigger(markers[i], 'click');
		$("#addReview").attr("disabled", "false");
	};
	let name = document.createTextNode(result.name);
	$(list).append(result.name + "<br>" + "<span>&bigstar;</span> " + result.rating.toPrecision(2));
	$(name).css('margin-bottom', "-10px");

	nearResults.appendChild(list);
}

function showDetails() {

	$("#place-photo, .prev, .next").css("display", "block");
	var marker = this;
	const LAT = marker.position.lat();
	const LNG = marker.position.lng();
	$("#static-sv").html(`<img src="https://maps.googleapis.com/maps/api/streetview?size=330x240&location=${LAT},${LNG}&key=AIzaSyA-uoX06n_IgxRQxKcyHQ6Th2CIDqhLqxQ">`);

	$("#official-logo").css("display", "none");
	infoReset();
	$("#modal").css("display", "none");
	$("#map").css("width", "56.5%");
	$(".reviewPanel")
		.animate({
			width: 'show',
		
		});
	places.getDetails({
			placeId: marker.placeResult.place_id,
			fields: ['name', 'vicinity', 'geometry', 'rating', 'photos', 'reviews', 'opening_hours', 'utc_offset_minutes'],
			title: name
		},

		function (place, status) {
			if (status !== google.maps.places.PlacesServiceStatus.OK) {
				return;
			}
      buildContent(place);
		});
}

function buildContent(place) {
	//adds place details to review panel heading
	$("#heading").html(place.name);
	if (place.vicinity) {
		$("#address").html(place.vicinity);
	}

	if (place.rating) {
		$("#place-rating").html(place.rating);
	}

	//if place photos are present, use them
	if (place.photos) {
		let firstPhoto = place.photos[0];
		photo.classList.add('places');
		photo.src = firstPhoto.getUrl();
		$("#user-photos").append(photo);
	} else if (!place.photos) {
		//if no place photo, show official logo
		$("#place-photo").empty();
		$("#official-logo").css("display", "block");
	}

	if (place.reviews) {
		$(".newReview p:nth-child(4)").html("\"" + place.reviews[4].text + "\"" + " &bigstar;" + place.reviews[4].rating + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + place.reviews[4].author_name);
		$(".newReview p:nth-child(3)").html("\"" + place.reviews[3].text + "\"" + " &bigstar;" + place.reviews[3].rating + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + place.reviews[3].author_name);
		$(".newReview p:nth-child(2)").html("\"" + place.reviews[2].text + "\"" + " &bigstar;" + place.reviews[2].rating + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + place.reviews[2].author_name);
		$(".newReview p:nth-child(1)").html("\"" + place.reviews[1].text + "\"" + " &bigstar;" + place.reviews[1].rating + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + place.reviews[1].author_name);
		$(".newReview p:last").html("\"" + place.reviews[0].text + "\"" + " &bigstar;" + place.reviews[0].rating + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + place.reviews[0].author_name);
	}

}


function initMap() {
	$("#official-logo").css("display", "block");
	$(".reviewPanel").css("display", "none");
	$("#map").css("width", "78%").animate({
		width: 'show'
	});
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		mapTypeControl: false,
		streetViewControl: false

	});

	//HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			map.setCenter(pos);

			let marker = new google.maps.Marker({
				position: pos,
				map: map,
				title: "Your location",
			});

			map.addListener('click', function (event) {
				//shows streetview based on click event
				if (event.placeId) {
					event.stop();
					clickMarker(event.latLng);
        }
				$("#addReview").attr("disabled", false).css("background-color", "#00aeef");
			});

			var clickHandler = new ClickEventHandler(map);
		}, function () {

			locationError();
			//Default markers show when location is not allowed
			jsonMarkers();
			var clickHandler = new ClickEventHandler(map);
		});

	}
}
//end of initMap() */ 


function addMarker(location) {
	let marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/blue.png"
		},
	});
	markers.push(marker);
};

//marker added to map by user
function clickMarker(location) {

	//console.log("user marker addition");
	let marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/green.png"
		},
	
	});
	markers.push(marker);
}
//If geolocation is blocked or not working locationError() runs
function locationError() {
	var origin = {
		lat: 41.7366016,
		lng: -111.830630399,
	}


	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: origin,
		mapTypeId: 'roadmap',
		mapTypeControl: false,
		streetViewControl: false
	});

	let marker = new google.maps.Marker({
		position: origin,
		map: map,
		title: "Default Location",
	});

	map.addListener('click', function (event) {
		if (event.placeId) {

			event.stop();
			clickMarker(event.latLng);
		}
	});

}