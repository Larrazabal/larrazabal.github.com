$(document).ready(function() {

	$(".convert").click(function() {

		// Store text from input
		var OG = $(".input").val();

		// Check of to remove dollar ($)
		if ($(".remove-dollar-input").prop("checked") == true) {
			OG = OG.split("$").join("");
		}

		// Check if to convert percentages (%)

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

		// Check if AOG.length is divisible by BP
		if (AOG.length % BP) {
			alert("Input does not match column count");
		} else {
			// Clear Table
			$(".output tbody *").remove();

			// Create variable for HTML data to be added
			var HTMLDATA;

			// Set z for current AOG item in loop
			var z = 0;

			for (var x = 1; x <= AOG.length/BP; x++) {
				HTMLDATA = HTMLDATA + "<tr>";
				for (var y = 1; y <= BP; y++) {
					HTMLDATA = HTMLDATA + "<td>" + AOG[z] + "</td>";
					z = z + 1;
				}
				HTMLDATA = HTMLDATA + "</tr>";
			}

			// Add HTML data to table
			$(".output tbody").append(HTMLDATA);
			console.log(HTMLDATA);

			// Show Output
			$(".output-container").show();
		}

		// Stop Page Transfer
		return false;

	});

});

function chunkArray(myArray, chunk_size){
	var index = 0;
	var arrayLength = myArray.length;
	var tempArray = [];
	
	for (index = 0; index < arrayLength; index += chunk_size) {
		myChunk = myArray.slice(index, index+chunk_size);
		// Do something if you want with the group
		tempArray.push(myChunk);
	}

	return tempArray;
}