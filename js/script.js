$(document).ready(function() {
	var count = 1;
	$("header ul").hide();
	$("#navigation_toggle").click(function() {
		count++;
		if (count % 2 === 0) {
			$("header ul").show();
			$("#navigation_toggle").addClass("active");
			$("#navigation_toggle").removeClass("inactive");
		} else {
			$("header ul").slideUp();
			$("#navigation_toggle").removeClass("active");
			$("#navigation_toggle").addClass("inactive");
		}
	});
});