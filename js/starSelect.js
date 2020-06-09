function starFilter() {
	//hides all names/ratings in paragraph list
	$(".newRest p:contains(1.)").css("display", "none");
	$(".newRest p:contains(2.)").css("display", "none");
	$(".newRest p:contains(3.)").css("display", "none");
	$(".newRest p:contains(4.)").css("display", "none");
	$(".newRest p:contains(5.)").css("display", "none");
}

function filterStyle() {
	//once the restaurants are sorted, the style is changed
	$(".newRest p").css("backgroundColor", "gray").css("color", "white");
}

function starSelect() {
	//sort restaurants based on number of stars
	//displays only the ratings containing the specified number
	if (starSelection.value == "all") {
		starOption.innerHTML = "Filter Restaurants";

		starFilter();

		$(".newRest p:contains(1.)").css("display", "block")
		$(".newRest p:contains(2.)").css("display", "block")
		$(".newRest p:contains(3.)").css("display", "block");
		$(".newRest p:contains(4.)").css("display", "block");
		$(".newRest p:contains(5.)").css("display", "block");
		$(".newRest p:contains(5.)").css("display", "block");

		//resets paragraph style to original alternating css style
		$(".newRest p:nth-child(odd)").css("backgroundColor", "white").css("color", "black");
		$(".newRest p:nth-child(even)").css("backgroundColor", "gray").css("color", "white");
	} else if (starSelection.value == "1") {
		starOption.innerHTML = "&bigstar;";

		starFilter();
		$(".newRest p:contains(1.)").css("display", "block");
		filterStyle();
	} else if (starSelection.value == "2") {
		starOption.innerHTML = "&bigstar;&bigstar;";

		starFilter();
		$(".newRest p:contains(2.)").css("display", "block");
		filterStyle();
	} else if (starSelection.value == "3") {
		starOption.innerHTML = "&bigstar;&bigstar;&bigstar;";

		starFilter();
		$(".newRest p:contains(3.)").css("display", "block");
		filterStyle();
	} else if (starSelection.value == "4") {
		starOption.innerHTML = "&bigstar;&bigstar;&bigstar;&bigstar;";

		starFilter();
		$(".newRest p:contains(4.)").css("display", "block");
		filterStyle();
	} else if (starSelection.value == "5") {
		starOption.innerHTML = "&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;";

		starFilter();
		$(".newRest p:contains(5.)").css("display", "block");
		filterStyle();
	}
	starSelection.value = "";
}