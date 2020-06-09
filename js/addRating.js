var starRate = document.getElementById("quote");
var star = document.getElementById("ratings");


//set color of stars to match background
function colorReset() {
	$("#str1, #str2, #str3, #str4, #str5").css("color", "black").css("background-color", "");
}

//resets star rating in rating section
function rateReset() {
	$(".newReview span").html("");
}

//prevents other stars from being clicked once a choice has been made
function rateKeeper() {
	$("#str1, #str2, #str3, #str4, #str5").off("click");
}

//blur the stars when page/restaurant is loaded
$(document).ready(function () {
	$(".star").css("filter", "blur(1.5px)").css("color", "black");
	$("#addReview").attr("disabled", true).css("background-color", "black");
	$("#map").css("width", "78%");
	//$("#map").css("width", "56.5%");
	//restPage.style.display = "none";
});

function markerReset() {
	//console.log('Reset markers');

	$("#addReview, #reviewButton").attr("disabled", false).css("background-color", "#00aeef");
	rateReset();
	colorReset();

	$(".star").css("filter", "blur(1.5px)").css("color", "black").css("background-color", "black").html("&star;");
	rateCaption();
	$(".newReview p").html("");
}

//resets all buttons, reviews, ratings, stars, 
// and colors when a new restaurant is chosen
$(".container p").on("click", function () {
	rateReset();
	colorReset();

	$("#heading, .newReview p").html("");
	//$(".newReview p").html("");

	//Copies value from restuarant list to the review panel heading
	$(this).clone().appendTo($("#heading")).css("margin-left", "-30px");
	$(".star").css("filter", "blur(1.5px)").css("color", "black").css("background-color", "black").html("&star;");
	rateReset();

	//Clears the first paragraph and enables the add review and submit buttons
	$("#addReview, #reviewButton").attr("disabled", false).css("background-color", "#00aeef");
	$(".newReview p:first").html("");;
});

//When input loses focus the blur is removed from the stars
$("#chatinput").on("blur", function () {
	$(".star").css("filter", "blur(0px)").css("color", "white");
});


//changes style of anonymous caption 
//adds color to the user's assigned star rating
function rateCaption() {
	$(".newReview span:first").css("color", "gold").css("font-size", "18px");
	$(".newReview span:last").css("font-style", "italic").css("font-size", "12px");
}

//once a review is submitted a star rating can be added
//the stars will change color and become filled when clicked
$("#reviewButton").on("click", function () {
	//One star
	$("#str1").on("click", function () {
		//console.log("User rating: one star");
		rateReset();
		colorReset();

		$(this).css("color", "yellow").css("background-color", "red").html("&bigstar;");
		$(".newReview p:first").append("<span> &bigstar;" + "1.0</span>")
			.append("</br><span>&nbsp;&nbsp;&nbsp;&nbsp;A Chompers User </span>");

		rateCaption();
		rateKeeper();
	});

	//Two stars
	$("#str2").on("click", function () {
		//console.log("User rating: two stars");
		rateReset();
		colorReset();

		$(this).css("color", "yellow").css("background-color", "orange").html("&bigstar;");
		$("#str1").css("color", "yellow").html("&bigstar;");
		$(".newReview p:first").append("<span> &bigstar;" + "2.0</span>")
			.append("</br><span>&nbsp;&nbsp;&nbsp;&nbsp;A Chompers User </span>");

		rateCaption();
		rateKeeper();
	});

	//Three stars
	$("#str3").on("click", function () {
		//console.log("User rating: three stars");
		rateReset();
		colorReset();

		$(this).css("color", "yellow").css("background-color", "yellow").html("&bigstar;");
		$("#str1, #str2").css("color", "yellow").html("&bigstar;");
		$(".newReview p:first").append("<span> &bigstar;" + "3.0</span>")
			.append("</br><span>&nbsp;&nbsp;&nbsp;&nbsp;A Chompers User </span>");

		rateCaption();
		rateKeeper();
	});

	//Four stars
	$("#str4").on("click", function () {
		rateReset();
		colorReset();

		$(this).css("color", "yellow").css("background-color", "lightgreen").html("&bigstar;");
		$("#str1, #str2, #str3").css("color", "yellow").html("&bigstar;");
		$(".newReview p:first").append("<span>  &bigstar;" + "4.0</span>")
			.append("</br><span>&nbsp;&nbsp;&nbsp;&nbsp;A Chompers User </span>");

		rateCaption();
		rateKeeper();
	});

	//Five stars
	$("#str5").on("click", function () {
		rateReset();
		colorReset();

		$(this).css("color", "yellow").css("background-color", "green").html("&bigstar;");
		$("#str1, #str2, #str3, #str4").css("color", "yellow").html("&bigstar;");
		$(".newReview p:first").append("<span> &bigstar;" + "5.0</span>")
			.append("</br><span>&nbsp;&nbsp;&nbsp;&nbsp;A Chompers User </span>");

		rateCaption();
		rateKeeper();
	});
});


var restPage = document.getElementById("restaurantsPage");
