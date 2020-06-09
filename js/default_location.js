//window.onload = function() {
  // $(".newRest").append()
  // $(".newRest p:nth-child(4)").html(markerPlace.restaurants[4].name + "<br>" + "<span>&bigstar;</span> "); //+ place.rating.toPrecision(2));
   //$(".newRest p:nth-child(3)").html(markerPlace.restaurants[3].name + "<br>" + "<span>&bigstar;</span> "); //+ place.rating.toPrecision(2));
   //$(".newRest p:nth-child(2)").html(markerPlace.restaurants[2].name + "<br>" + "<span>&bigstar;</span> "); //+ place.rating.toPrecision(2));
   //$(".newRest p:nth-child(1)").html(markerPlace.restaurants[1].name + "<br>" + "<span>&bigstar;</span> "); //+ place.rating.toPrecision(2));
//   $(".newRest p:first").html(markerPlace.restaurants[0].name + "<br>" + "<span>&bigstar;</span> "); //+ place.rating.toPrecision(2));

   //$(defaultList).append(markerPlace.restaurants[0].name + "<br>" + "<span>&bigstar;</span> "); //+ place.rating.toPrecision(2));

//}

   var markerPlace, defaultRest, i, j, k, x = "", y = "", z="";
   //var obj = require("full_reviews.json");
   //var markerPlace = JSON.parse(defaultRest);
   var defaultMarkers;
   const results = document.getElementById('newRest');
   markerPlace = {
     //var defaultRest = {
      "restaurants": [
         {
            "name": "Center Street Grill",
            "address":"18 E Center St, Logan, UT 84321",
            "lat": 41.731075,
            "lng": -111.834526,
            "stars": 4.4,
            "ratings": [
               5,
               4,
               2,
               5
            ],
            "reviews": [
               "It is like I stepped back into the 50s",
               "It was ok",
               "I thought it was alright",
               "It was great!"
            ]
         },
         {
            "name": "Le Nonne",
            "address":"129 N 100 E, Logan, UT 84321",
            "lat": 41.733894,
            "lng": -111.832664,
            "stars": 3,
            "ratings": [
               5,
               2,
               3,
               5
            ],
            "reviews": [
               "It is great for small-town Italian",
               "It isn't an Olive Garden",
               "It is pretty good",
               "It was great!"
            ]
         },
         {
            "name": "The Bluebird Restaurant",
            "address":"19 North Main St, Logan, UT 84321",
            "lat": 41.731842,
            "lng": -111.83522,
            "stars": 4.4,
            "ratings": [
               5,
               2,
               3,
               5
            ],
            "reviews": [
               "It is a great restaurant",
               "The prime rib wasn't worth my money",
               "It is pretty good",
               "It was great!"
            ]
         },
         {
            "name": "Factory Pizzeria",
            "address":"119 South Main St, Logan, UT 84321",
            "lat": 41.72974,
            "lng": -111.835464,
            "stars": 4,
            "ratings": [
               3,
               3,
               2,
               5
            ],
            "reviews": [
               "It is like I stepped back into high school",
               "It was ok",
               "I thought it was alright",
               "It was great!"
            ]
         },
         {
            "name": "Chuck-A-Rama",
            "address":"138 South Main St, Logan, UT 84321",
            "lat": 41.729065,
            "lng": -111.83457,
            "stars": 4,
            "ratings": [
               4,
               3,
               2,
               5
            ],
            "reviews": [
               "There was a pretty good selection",
               "It was cheap tasting",
               "I thought it was way too expensive",
               "It was great!"
            ]
         }
      ]
   }
   //x,z,y
   function markerDetails(){
      $("#official-logo").css("display", "none");
      $("#map").css("width", "56.5%");
      $(".reviewPanel")
      .animate({
        width: 'show'
        //height: 'toggle'
     });
     //$("#user-photos").css("display","none");
     $(".prev, .next").css("display", "none");
     /*defaultList.onclick = function () {
     google.maps.event.trigger(markers, 'click');
   };*/
   /*$(".newRest p:nth-child(1)").on("click",function () {
      google.maps.event.trigger(placeOne, 'click');
    });*/
    $("#place-photo").css("display","block");
   }
   function jsonMarkers(){
      $(".newRest p:nth-child(5)").html(markerPlace.restaurants[4].name + "<br>" + "<span>&bigstar;</span> " + markerPlace.restaurants[4].stars.toPrecision(2));
  $(".newRest p:nth-child(4)").html(markerPlace.restaurants[3].name + "<br>" + "<span>&bigstar;</span> " + markerPlace.restaurants[3].stars.toPrecision(2));
  $(".newRest p:nth-child(3)").html(markerPlace.restaurants[2].name + "<br>" + "<span>&bigstar;</span> " + markerPlace.restaurants[2].stars.toPrecision(2));
  $(".newRest p:nth-child(2)").html(markerPlace.restaurants[1].name + "<br>" + "<span>&bigstar;</span> " + markerPlace.restaurants[1].stars.toPrecision(2));
  $(".newRest p:nth-child(1)").html(markerPlace.restaurants[0].name + "<br>" + "<span>&bigstar;</span> " + markerPlace.restaurants[0].stars.toPrecision(2));
    
   for (i in markerPlace.restaurants) {
  
    /*defaultMarkers = new google.maps.Marker({
       position: new google.maps.LatLng(markerPlace.restaurants[i].lat, markerPlace.restaurants[i].lng),
       map: map,
       title: markerPlace.restaurants[i].name,
       icon: {
         url: "http://maps.google.com/mapfiles/ms/icons/blue.png"
       }
   });
   
   
   defaultMarkers.addListener('click', function(event) {
      if(event.latLng ==  markerPlace.restaurants[i].lat + "," + markerPlace.restaurants[i].lng){
         ////alert(markerPlace.restaurants[i].name);
      }
    
       $("#heading").html(markerPlace.restaurants[i].name);
      $("#address").html(markerPlace.restaurants[i].address);
      //$("#place-rating").html(place.rating);
      $(".newReview p:nth-child(4)").html("\"" + markerPlace.restaurants[i].reviews[3] + "\"" + " &bigstar;" + markerPlace.restaurants[i].ratings[3]);
      $(".newReview p:nth-child(3)").html("\"" + markerPlace.restaurants[i].reviews[2] + "\"" + " &bigstar;" + markerPlace.restaurants[i].ratings[2]);
      $(".newReview p:nth-child(2)").html("\"" + markerPlace.restaurants[i].reviews[1] + "\"" + " &bigstar;" + markerPlace.restaurants[i].ratings[1]);
      $(".newReview p:nth-child(1)").html("\"" + markerPlace.restaurants[i].reviews[0] + "\"" + " &bigstar;" + markerPlace.restaurants[i].ratings[0]);
 
   })*/
   $(".newRest p:nth-child(1)").on("click",function () {
      google.maps.event.trigger(placeOne, 'click');
    });
    $(".newRest p:nth-child(2)").on("click",function () {
      google.maps.event.trigger(placeTwo, 'click');
    });
    $(".newRest p:nth-child(3)").on("click",function () {
      google.maps.event.trigger(placeThree, 'click');
    });
    $(".newRest p:nth-child(4)").on("click",function () {
      google.maps.event.trigger(placeFour, 'click');
    });
    $(".newRest p:nth-child(5)").on("click",function () {
      google.maps.event.trigger(placeFive, 'click');
    });


   var placeOne = new google.maps.Marker({
      position: new google.maps.LatLng(markerPlace.restaurants[0].lat, markerPlace.restaurants[0].lng),
      map: map,
      title: markerPlace.restaurants[0].name,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue.png"
      }
  });
   placeOne.addListener('click', function(){
      markerDetails();
      //alert(this.position);
      ////alert(markerPlace.restaurants[0].lat + "," + markerPlace.restaurants[0].lng);
      lat = markerPlace.restaurants[0].lat;
      lng = markerPlace.restaurants[0].lng;
   $("#heading").html(markerPlace.restaurants[0].name);
   $("#address").html(markerPlace.restaurants[0].address);

   $(".newReview p:nth-child(4)").html("\"" + markerPlace.restaurants[0].reviews[3] + "\"" + " &bigstar;" + markerPlace.restaurants[0].ratings[3]);
   $(".newReview p:nth-child(3)").html("\"" + markerPlace.restaurants[0].reviews[2] + "\"" + " &bigstar;" + markerPlace.restaurants[0].ratings[2]);
   $(".newReview p:nth-child(2)").html("\"" + markerPlace.restaurants[0].reviews[1] + "\"" + " &bigstar;" + markerPlace.restaurants[0].ratings[1]);
   $(".newReview p:nth-child(1)").html("\"" + markerPlace.restaurants[0].reviews[0] + "\"" + " &bigstar;" + markerPlace.restaurants[0].ratings[0]);

   $("#static-sv").html(`<img src="https://maps.googleapis.com/maps/api/streetview?size=310x240&location=${lat},${lng}&heading=151.78&pitch=-0.76&key=AIzaSyA-uoX06n_IgxRQxKcyHQ6Th2CIDqhLqxQ">`);

   /*$(".newRest p:nth-child(1)").on("click",function () {
     google.maps.event.trigger(placeOne, 'click');
   });*/
  
   });

   var placeTwo = new google.maps.Marker({
      position: new google.maps.LatLng(markerPlace.restaurants[1].lat, markerPlace.restaurants[1].lng),
      map: map,
      title: markerPlace.restaurants[1].name,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue.png"
      }
  });
   placeTwo.addListener('click', function(){
      markerDetails();
      lat = markerPlace.restaurants[1].lat;
      lng = markerPlace.restaurants[1].lng;
   $("#heading").html(markerPlace.restaurants[1].name);
   $("#address").html(markerPlace.restaurants[1].address);

   $(".newReview p:nth-child(4)").html("\"" + markerPlace.restaurants[1].reviews[3] + "\"" + " &bigstar;" + markerPlace.restaurants[1].ratings[3]);
   $(".newReview p:nth-child(3)").html("\"" + markerPlace.restaurants[1].reviews[2] + "\"" + " &bigstar;" + markerPlace.restaurants[1].ratings[2]);
   $(".newReview p:nth-child(2)").html("\"" + markerPlace.restaurants[1].reviews[1] + "\"" + " &bigstar;" + markerPlace.restaurants[1].ratings[1]);
   $(".newReview p:nth-child(1)").html("\"" + markerPlace.restaurants[1].reviews[0] + "\"" + " &bigstar;" + markerPlace.restaurants[1].ratings[0]);

   $("#static-sv").html(`<img src="https://maps.googleapis.com/maps/api/streetview?size=310x240&location=${lat},${lng}&heading=151.78&pitch=-0.76&key=AIzaSyA-uoX06n_IgxRQxKcyHQ6Th2CIDqhLqxQ">`);

   /*$(".newRest p:nth-child(2)").on("click",function () {
      google.maps.event.trigger(placeTwo, 'click');
    });*/
   
  
   });

   var placeThree = new google.maps.Marker({
      position: new google.maps.LatLng(markerPlace.restaurants[2].lat, markerPlace.restaurants[2].lng),
      map: map,
      title: markerPlace.restaurants[2].name,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue.png"
      }
  });
   placeThree.addListener('click', function(){
      markerDetails();
      lat = markerPlace.restaurants[2].lat;
      lng = markerPlace.restaurants[2].lng;
   $("#heading").html(markerPlace.restaurants[2].name);
   $("#address").html(markerPlace.restaurants[2].address);

   $(".newReview p:nth-child(4)").html("\"" + markerPlace.restaurants[2].reviews[3] + "\"" + " &bigstar;" + markerPlace.restaurants[2].ratings[3]);
   $(".newReview p:nth-child(3)").html("\"" + markerPlace.restaurants[2].reviews[2] + "\"" + " &bigstar;" + markerPlace.restaurants[2].ratings[2]);
   $(".newReview p:nth-child(2)").html("\"" + markerPlace.restaurants[2].reviews[1] + "\"" + " &bigstar;" + markerPlace.restaurants[2].ratings[2]);
   $(".newReview p:nth-child(1)").html("\"" + markerPlace.restaurants[2].reviews[0] + "\"" + " &bigstar;" + markerPlace.restaurants[2].ratings[0]);

   $("#static-sv").html(`<img src="https://maps.googleapis.com/maps/api/streetview?size=310x240&location=${lat},${lng}&key=AIzaSyA-uoX06n_IgxRQxKcyHQ6Th2CIDqhLqxQ">`);
   
   /*$(".newRest p:nth-child(3)").on("click",function () {
      google.maps.event.trigger(placeThree, 'click');
    });*/
   
   });

   var placeFour = new google.maps.Marker({
      position: new google.maps.LatLng(markerPlace.restaurants[3].lat, markerPlace.restaurants[3].lng),
      map: map,
      title: markerPlace.restaurants[3].name,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue.png"
      }
  });
   placeFour.addListener('click', function(){
      markerDetails();
      lat = markerPlace.restaurants[3].lat;
      lng = markerPlace.restaurants[3].lng;
   $("#heading").html(markerPlace.restaurants[3].name);
   $("#address").html(markerPlace.restaurants[3].address);

   $(".newReview p:nth-child(4)").html("\"" + markerPlace.restaurants[3].reviews[3] + "\"" + " &bigstar;" + markerPlace.restaurants[3].ratings[3]);
   $(".newReview p:nth-child(3)").html("\"" + markerPlace.restaurants[3].reviews[2] + "\"" + " &bigstar;" + markerPlace.restaurants[3].ratings[2]);
   $(".newReview p:nth-child(2)").html("\"" + markerPlace.restaurants[3].reviews[1] + "\"" + " &bigstar;" + markerPlace.restaurants[3].ratings[1]);
   $(".newReview p:nth-child(1)").html("\"" + markerPlace.restaurants[3].reviews[0] + "\"" + " &bigstar;" + markerPlace.restaurants[3].ratings[0]);

   $("#static-sv").html(`<img src="https://maps.googleapis.com/maps/api/streetview?size=310x240&location=${lat},${lng}&heading=151.78&pitch=-0.76&key=AIzaSyA-uoX06n_IgxRQxKcyHQ6Th2CIDqhLqxQ">`);
   
   /*$(".newRest p:nth-child(4)").on("click",function () {
      google.maps.event.trigger(placeFour, 'click');
    });*/
   
   });

   var placeFive = new google.maps.Marker({
      position: new google.maps.LatLng(markerPlace.restaurants[4].lat, markerPlace.restaurants[4].lng),
      map: map,
      title: markerPlace.restaurants[4].name,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue.png"
      }
  });
   placeFive.addListener('click', function(){
      markerDetails();
      lat = markerPlace.restaurants[4].lat;
      lng = markerPlace.restaurants[4].lng;
      //console.log(placeFive.position);
     // console.log(this.markerPlace.restaurants[i].name); 
   $("#heading").html(markerPlace.restaurants[4].name);
   $("#address").html(markerPlace.restaurants[4].address);
   $(".newReview p:nth-child(4)").html("\"" + markerPlace.restaurants[4].reviews[3] + "\"" + " &bigstar;" + markerPlace.restaurants[4].ratings[3]);
   $(".newReview p:nth-child(3)").html("\"" + markerPlace.restaurants[4].reviews[2] + "\"" + " &bigstar;" + markerPlace.restaurants[4].ratings[2]);
   $(".newReview p:nth-child(2)").html("\"" + markerPlace.restaurants[4].reviews[1] + "\"" + " &bigstar;" + markerPlace.restaurants[4].ratings[1]);
   $(".newReview p:nth-child(1)").html("\"" + markerPlace.restaurants[4].reviews[0] + "\"" + " &bigstar;" + markerPlace.restaurants[4].ratings[0]);

   $("#static-sv").html(`<img src="https://maps.googleapis.com/maps/api/streetview?size=310x240&location=${lat},${lng}&heading=151.78&pitch=-0.76&key=AIzaSyA-uoX06n_IgxRQxKcyHQ6Th2CIDqhLqxQ">`);
   
   /*$(".newRest p:nth-child(5)").on("click",function () {
      google.maps.event.trigger(placeFive, 'click');
    });*/
   
   });
  

  console.log(markerPlace.restaurants[i].name + " (" + markerPlace.restaurants[i].lat + "," + markerPlace.restaurants[i].lng + ")");
 // $(placeOne, placeTwo, placeThree, placeFour, placeFive).on("click", function(){
   ////alert(this.markerPlace.restaurants[i].name);
//});

     //for (j in markerPlace.restaurants[i].reviews ) {
         //console.log(markerPlace.restaurants[i].reviews[j]);   
    //}  
   }

////alert(markerPlace.restaurants[i].lat + "," + markerPlace.restaurants[i].lng);
};


/*
let results = document.getElementById('newRest');
let list = document.createElement('p');
//list.onclick = function () {
  //google.maps.event.trigger(markers, 'click');
//};
let name = document.createTextNode(place.name);
$(list).append(markerPlace.restaurants[i].name + "<br>" + "<span>&bigstar;</span> " + markerPlace.restaurants[i].stars.toPrecision(2));
$(name).css('margin-bottom', "-10px");

results.appendChild(list);

    //document.getElementById('heading').innerHTML = place.name;
    //document.getElementById('address').innerHTML = place.formatted_address;
  }
  //$("#newRest p:nth-last-child(2)").css("display", "none");
});
// $("#newRest p:nth-last-child(2)").css("display", "none");
$("#newRest p:nth-last-child()").css("display", "none");
*/