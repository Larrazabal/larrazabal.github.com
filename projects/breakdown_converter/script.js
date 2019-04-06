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

		// Clear Table
		$(".output tbody *").remove();

		// Make sure that AOG can be divided by BP
		if (AOG.length % BP !== 0) {

			alert("Input does not match column count.");

		} else {

			// Create <tr> for every AOG/BP
			for (var rn = 1; rn <= (AOG.length/BP); rn++) {
				$(".output tbody").append("<tr class='tr-" + rn + "'>");
			}

			// Divide AOG into BP chunks
			CAOG = chunkArray(AOG, BP);
			console.log(CAOG);

			// Every CAOG[x] into corresponding <tr class="tr-[x+1]">
			for (var x = 0; x <= CAOG.length; x++) {
				currn = x + 1;
				for (; ; i) {
				}
			}
				//$(".tr-" + currn + " td");

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