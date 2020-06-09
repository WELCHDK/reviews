var addReview = document.getElementById('addReview');
//Add a review button is clicked
addReview.onclick = function () {
	if (document.getElementById('reviewInput').style.display === "block") {
		document.getElementById('reviewInput').style.display = "none"

		if (document.getElementById('block').style.display === "none") {
			document.getElementById('block').style.display = "block"
		} else {
			document.getElementById('block').style.display === "none"
		}
	} else {
		document.getElementById('reviewInput').style.display = "block"
		document.getElementById('block').style.display = "none"
	}
}


var inputBox = document.getElementById("chatinput");
var button = document.getElementById("reviewButton");

button.onclick = function () {
	//create a new paragraph from the user's input
	var node = document.createElement("p");
	var textnode = document.createTextNode("\"" + inputBox.value + "\"");

	//if input is empty, submit button is not functional
	if (inputBox.value == "" || inputBox.value.length == 0 || inputBox.value == null) {
		preventDefault();
	} else {
		node.appendChild(textnode);
		//reviews are placed at the top of the container to show most recent feedback
		var chrono = document.getElementById('newReview');
		chrono.insertBefore(node, chrono.childNodes[0]);
		//after submission, input is cleared
		inputBox.value = "";
	}
	//once submitted both the (Add Review) and (submit) buttons are disabled
	$("#reviewInput").css("display", "none");
	$("#block").css("display", "block");
	$("#addReview").attr("disabled", true).css("background-color", "black");
	$("#reviewButton").attr("disabled", true);
}

$("#chatinput").on("focus", function () {
	$("#reviewButton").css("background-color", "#00aeef");
});
$("#chatinput").on("blur", function () {
	$("#reviewButton").css("background-color", "black");
});
