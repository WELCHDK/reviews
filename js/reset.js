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
//var newLocation = document.getElementById('location');

//$("#nearby").on('click', nearSearch);
$("#location").on('click', locationReset);
//$("#autocomplete").on('focus', cityClear).on('blur', nearbyReset);
//$("#nearby").on('click', search);


function nearbyReset() {
  starOption.innerHTML = "Filter Restaurants";
  starSelection.value = "";
  $("#headingNew").attr("disabled", false).css('color', "gold");
  $('#addReview').attr('disabled', true);

  $(".reviewPanel").css("display", "none");
 //$(".reviewPanel")
  //.animate({
    //width: 'hide',
    //height: 'toggle'
  //});
 // .fadeOut(3000);



  //$("#map").css("width", "78%").animate({width: 'show'});
}

//autcomplete function is currently disabled in the application
/*function cityClear() {
  //when autocomplete gains focus the text value is removed
  document.getElementById('autocomplete').value = "";
  // $("#autocomplete").val("");
}*/

function locationReset() {
  $("#map").css("width", "78%");
  $(".reviewPanel").fadeOut();
  //.animate({
    width: 'hide',
    //height: 'toggle'
 //});
  clearMarkers();
  clearResults();
  //resets page to onload
 // initMap();
  $("#place-photo").empty();
  $("#official-logo").css("display", "block");
  $("#headingNew").attr("disabled", true).css('color', "white").val("");
  starOption.innerHTML = "Restaurants";
  starSelection.value = "";
  //$("#streetview").css("display", "block");
  //document.getElementById("bluelogo2").classList.add("logoKeep");
  $("#bluelogo2").css("margin-top", "0px");
 // cityClear();
 $('#addReview').attr('disabled', true);
}

function clearMarkers(markers) {
  //removes markers from view
  for (var i in markers) {
    markers[i].setMap(null);
  }
  markers = [];
}

function clearResults() {
  var results = document.getElementById('newRest');
  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

nearby.addEventListener('click', headingReset);
//newLocation.addEventListener('click', headingReset);

function headingReset() {
  //resets headings and star rating div 
  //disables buttons
  $('#heading').html('Restaurant Name');
  $('#address').html('Address');
  $('#addReview').attr('disabled', true).css("background-color" , "black");

  rateReset();
  colorReset();

  $(".star").css("filter", "blur(1.5px)").css("color", "black").css("background-color", "black").html("&star;");
  rateCaption();
  $(".newReview p").html("");
}

function infoReset() {
  //resets star rating div and clears any review
  //enables buttons for review addition
  rateReset();
  colorReset();
  $(".star").css("filter", "blur(1.5px)").css("color", "black").html("&star;");
  rateCaption();
  $(".newReview p").html("");
  $("#reviewButton").attr("disabled", false).css("background-color" , "#00aeef");
}

//when the map is clicked "Restaurants" color is changed to gold
//Restaurant selection filter is enabled
//button enabled
$("#map").on("click", function (event) {
  //$("#headingNew").attr("disabled", false);//.css('color', "gold");
  $("#addReview, #reviewButton").attr("disabled", false).css("background-color" , "#00aeef");
});

//$(".restPage").on("click", function(){
  $(".newRest").on("click", function(){
  $("#addReview").attr("disabled", false).css("background-color" , "#00aeef");
});