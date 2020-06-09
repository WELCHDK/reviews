var ClickEventHandler = function (map) {
	this.map = map;

	this.placesService = new google.maps.places.PlacesService(map);

	// Listen for clicks on the map.
	this.map.addListener('click', this.handleClick.bind(this));

};

ClickEventHandler.prototype.handleClick = function (event) {
	$("#place-photo").css("display", "none");
	$("#official-logo").css("display", "block");
	$(".reviewPanel")
		.animate({
			width: 'show',
		
		});

	nearbyReset();
	$(".star").css("filter", "blur(1.5px)").css("color", "black").css("background-color", "black").html("&star;");
	$("#addReview,#reviewButton").attr("disabled", false).css("background-color", "#00aeef");
	rateCaption();
	$(".newReview p").html("");


	// If the event has a placeId, use it.
	if (event.placeId) {
		$("#map").css("width", "56.5%");
		$(".reviewPanel").css("display", "block");
		$("#modal").css("display", "none");

		// prevents the default info window from showing
		event.stop();
		this.getPlaceInformation(event.placeId);
		markerReset();
	} else if (!event.placeId) {
		$(".reviewPanel")
			.animate({
				width: 'hide',
			});
		markerReset();
		$("#modal").css("display", "block");

		$("#place-button").on("click", function () {
			if ($("#name-input").val() !== "") {
				$("#heading").html($("#name-input").val());

				if ($("#add-input").val() == "") {
					$("#address").html("Address")
				} else {
					$("#address").html($("#add-input").val());
				}

				//hides modal after successful place addition
				$("#modal").css("display", "none");
				$("#addReview").attr("disabled", false).css("background-color", "#00aeef");
			} else {
				//if value is empty, placeholder changes
				$("#name-input").attr("placeholder", "Name is required!");
				$("#add-input").attr("placeholder", "Address: optional");
			}
			//After submission, inputs are cleared
			$("#name-input").val("");
			$("#add-input").val("");
			//addMarker(event.latLng);
			clickMarker(event.latLng);
			$("#map").css("width", "56.5%");
			$(".reviewPanel")
				.animate({
					width: 'show',
				});
		})
	}

};

ClickEventHandler.prototype.getPlaceInformation = function (placeId) {
	var me = this;
	this.placesService.getDetails({
		placeId: placeId

	}, function (place, status) {
		if (status === 'OK') {
      
			//adds place name, rating, heading, and address
			const results = document.getElementById('newRest');

			let list = document.createElement('p');
			list.onclick = function () {
				google.maps.event.trigger(markers, 'click');
			};
			$(list).append(place.name + "<br>" + "<span>&bigstar;</span> " + place.rating.toPrecision(2));
			results.appendChild(list);

			document.getElementById('heading').innerHTML = place.name;
			document.getElementById('address').innerHTML = place.formatted_address;
		}
	});
};