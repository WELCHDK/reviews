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
/*$( document ).ready(function() {
  nearSearch();
  //console.log( "ready!" );
});*/
//$(window).on("", nearSearch);

// Search for restaurants in the selected city, within the viewport of the map.
function search() {
  //$('#addReview').attr('disabled', true);
  var search = {
    //location: { lat: latitude, lng: longitude },
    bounds: map.getBounds(),
    types: ['restaurant']
  };

  places.nearbySearch(search, function (results, status) {
    
   
  //places.nearbySearch(search, function (googleRestaurant, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();

      //console.log(results);
      
      // Create a marker for each restaurant found, and change the marker color
      for (var i = 0; i < results.length; i++) {
       /* while (newPhoto.lastChild) {
          newPhoto.removeChild(newPhoto.lastChild);
        }*/
         //googleRestaurant = markers[i].placeResult ;
          //const jsonp = JSON.stringify(results[i]);
          //const googleRestaurant = JSON.parse(jsonp);
        

        markers[i] = new google.maps.Marker({
          //position: new google.maps.LatLng(results[i].geometry.location.lat(), results[i].geometry.location.lng()),
          /*position: {
            lat: results[i].geometry.location.lat(),
            lng: results[i].geometry.location.lng()
          },*/
         // position: results[i].geometry.location,
          
         //position: googleRestaurant.geometry.location,
        position: {
          lat: results[i].geometry.location.lat(),
          lng: results[i].geometry.location.lng()
        },
          
          
          // position: results[i].event.latLng,
          title: results[i].name,
          //title: googleRestaurant.name,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue.png"
          }

        });
        //console.log(results[i].geometry.location);
        markers[i].setMap(map);

        // If the user clicks a restaurant marker, show the details of that restaurant
        //markers[i].placeResult = googleRestaurant;
        markers[i].placeResult = results[i];
        google.maps.event.addListener(markers[i], 'click', showInfoWindow);
       //addResult(googleRestaurant, i);
       
       addResult(results[i], i);
      /* while (static.lastChild) {
        //static.parentNode.removeChild(static.lastChild);
        static.removeChild(static.lastChild);
      }*/
       

        //let position = googleRestaurant.geometry.location;
        const lte = results[i].geometry.location.lat();
        const lde = results[i].geometry.location.lng();
        //console.log(googleRestaurant.name + " (" + lte + "," + lde + ")");
        //console.log(this.googleRestaurant.name);
        //console.log(results[i].geometry.location.lat);
        //console.log(markers[i].lat);

        //let lat = markers[i].placeResult.location.lat();
        //let lng = markers[i].placeResult.lng();
    
        //$("#streetview").css("display", "none");
      
        //$("#place-photo").html
        //$(".place-images:last")
        //$("#static-sv").html(`<img src="https://maps.googleapis.com/maps/api/streetview?size=330x240&location=${lte},${lde}&key=AIzaSyA-uoX06n_IgxRQxKcyHQ6Th2CIDqhLqxQ">`);
        //console.log(`<img src="https://maps.googleapis.com/maps/api/streetview?size=330x240&location=${lte},${lde}&key=AIzaSyA-uoX06n_IgxRQxKcyHQ6Th2CIDqhLqxQ">`);
       
        
       
        //$("#place-photo").attr("src",`'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${position}&heading=151.78&pitch=-0.76&key=AIzaSyA-uoX06n_IgxRQxKcyHQ6Th2CIDqhLqxQ"`); 

        //`<img src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${lat},${lng}&heading=151.78&pitch=-0.76&key=AIzaSyA-uoX06n_IgxRQxKcyHQ6Th2CIDqhLqxQ">`
      }
      
      markerReset();
      

      //$("#addReview").attr("disabled", false);
      $("#headingNew").attr("disabled", false).css('color', "gold");
    }
    
  });
  
}

function nearSearch() {
 // $('#addReview').attr('disabled', true);
  console.log("Getting nearby restaurants");
  //$("#autocomplete").attr("placeholder", "Enter a City").css("color", "white");
  $("#modal").css("display", "none");
  $("#headingNew").attr("disabled", false).css('color', "gold");

  places = new google.maps.places.PlacesService(map);

  // autocomplete.addListener('place_changed', onPlaceChanged);
  search();
 
  
  //var clickHandler = new ClickEventHandler(map);

}