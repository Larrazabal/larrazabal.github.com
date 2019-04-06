$(document).ready(function() {

	$(".convert").click(function() {

		// Store text from input
		var OG = $(".input").val();

		// Convert OG to array AOG
		var AOG = OG.split("\n");

		// Make sure 2 < breakpoint < 99
		if ($(".breakpoint-input").val() < 2) {
			$(".breakpoint-input").val("2")
		} else if ($(".breakpoint-input").val() > 99) {
			$(".breakpoint-input").val("99")
		}

		// Store Breakpoint
		var BP = $(".breakpoint-input").val();

		// Make sure that AOG can be divided by BP
		if (AOG.length % BP !== 0) {
			alert("Input does not match column count.");
		} else {
			// Loop every breakpoint
			
		}

		// Show Output
		$(".output-container").show();

		// Stop Page Transfer
		return false;

	});

});