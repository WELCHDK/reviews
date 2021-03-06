
var ClickEventHandler = function (map) {
  this.map = map;

  this.placesService = new google.maps.places.PlacesService(map);
  //this.placesService.getDetails({placeId: placeId}, function(place, status) {
  //this.infowindow = new google.maps.InfoWindow();
  //this.infowindowContent = document.getElementById('infowindow-content');
  //this.infowindow.setContent(this.infowindowContent);

  // Listen for clicks on the map.
  this.map.addListener('click', this.handleClick.bind(this));
  
};

ClickEventHandler.prototype.handleClick = function (event) {
  $("#place-photo").css("display", "none");
  $("#official-logo").css("display", "block");
  //$("#map").css("width", "56.5%");
  //$(".reviewPanel").css("display", "block");
  
  $(".reviewPanel")
  .animate({
    width: 'show',
    //height: 'toggle'
 });

  console.log('You clicked on: ' + event.latLng);
  //console.log('You clicked on:);
  nearbyReset();
  $(".star").css("filter", "blur(1.5px)").css("color", "black").css("background-color" , "black").html("&star;");
  $("#addReview,#reviewButton").attr("disabled", false).css("background-color" , "#00aeef");
  rateCaption();
  $(".newReview p").html("");
  

  // If the event has a placeId, use it.
  if (event.placeId) {
   $("#map").css("width", "56.5%");
   $(".reviewPanel").css("display", "block");
    
    console.log('You clicked on place:' + event.placeId);
    $("#modal").css("display", "none");

    // prevents the default info window from showing
    event.stop();
  this.getPlaceInformation(event.placeId);
    //addMarker(event.latLng);
    //clickMarker(event.latLng);
    markerReset();
  }
  else if (!event.placeId) {
    $(".reviewPanel")
  .animate({
    width: 'hide',
    //height: 'toggle'
 });
    ///if( $(".reviewPanel").css("display", "block")){
      //$("#map").css("width", "56.5%");
    //}
   // else {
    markerReset();
    $("#modal").css("display", "block");
 
$("#place-button").on("click", function(){
    if ($("#name-input").val() !== ""){
      $("#heading").html($("#name-input").val()); 
    
        if($("#add-input").val() == "") {
          $("#address").html("Address")
        }
        else {
          $("#address").html($("#add-input").val());
        }
        console.log($("#name-input").val() + " " + $("#add-input").val());
  
    //hides modal after successful place addition
    $("#modal").css("display", "none");
    $("#addReview").attr("disabled", false).css("background-color" , "#00aeef");
  }
  else{
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
    //height: 'toggle'
 });
   //$(".reviewPanel").css("display", "block");
  })
//}
}
//document.getElementById("place-photo").innerHTML = `<img src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${lat},${lng}&heading=151.78&pitch=-0.76&key=AIzaSyA-uoX06n_IgxRQxKcyHQ6Th2CIDqhLqxQ" alt="">`;

};

ClickEventHandler.prototype.getPlaceInformation = function (placeId) {
  var me = this;
  this.placesService.getDetails({
    placeId: placeId

  }, function (place, status) {
    if (status === 'OK') {
      //me.infowindow.close();
      //me.infowindow.setPosition(place.geometry.location);
      //me.infowindow.open(me.map);
      //console.log(place.name);
     


//adds place name, rating, heading, and address
 const results = document.getElementById('newRest');

  let list = document.createElement('p');
  list.onclick = function () {
    google.maps.event.trigger(markers, 'click');
  };
  //let name = document.createTextNode(place.name);
  $(list).append(place.name + "<br>" + "<span>&bigstar;</span> " + place.rating.toPrecision(2));

  //$(name).css('margin-bottom', "-10px");

  results.appendChild(list);
  /*if($(".newRest p") === $(".newRest p")) {
    alert("duplicates");
    $(".newRest p:nth-last-child(1)").css("display", "none");
  }*/

      document.getElementById('heading').innerHTML = place.name;
      document.getElementById('address').innerHTML = place.formatted_address;
    }
    //$("#newRest p:nth-last-child(2)").css("display", "none");
  });
 // $("#newRest p:nth-last-child(2)").css("display", "none");



 //$("#newRest p:last-child").css("display", "none");

 //$(".reviewPanel").fadeIn();

//$("#newRest p:").css("display", "none");
};
//$("#newRest p:nth-last-child(1)").css("display", "none");

