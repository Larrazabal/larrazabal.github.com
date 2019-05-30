$(document).ready(function() {

	/* ======= Dropdown Selection ======= */
	var selections = [
					 	"Impressions",
					 	"Outbound Clicks",
					 	"Landing Page Views",
					 	"Adds to Cart",
					 	"Initiate Checkouts",
					 	"Purchases",
					 	"Purchase Information",
					 	"CPM",
					 	"Purchase Conversion",
					 	"Amount Spent",
					 	"ROAS"
					 ];
	var selection_values = [
					 	"imp",
					 	"click",
					 	"lpv",
					 	"atc",
					 	"ic",
					 	"pur",
					 	"pi",
					 	"cpm",
					 	"purconv",
					 	"spent",
					 	"roas"
					 ];
	addSelections();
	function addSelections() {
		for (var i = 0; i <= selections.length - 1; i++) {
			$(".col").append("<option value='" + selection_values[i] + "'>" + selections[i] + "</option>");
		}
	}
	function addColumnSelection(amt) {
		var curAmt = $(".column-container").length;
		for (var i = curAmt + 1; i <= amt + curAmt; i++) {
			$(".metric-options .inside").append(
				"<div class='column-container column-container-" + i + "'>" +
					"<label for='column-" + i + "'>Column " + i + ":</label> " +
					"<select class='col column-" + i + "' name='column-" + i + "' id='column-" + i + "'></select>" +
				"</div>");
		}
	}
	/* ===== End Dropdown Selection ===== */


	/* ===== Metric Options Options ===== */
	$("#metric-add").click(function() {
		return false;
	});
	$("#metric-remove").click(function() {
		return false;
	});
	$("#metric-defaults").click(function() {
		$(".metric-options .inside").empty();
		addColumnSelection(13);
		addSelections();

		return false;
	});
	/* === End Metric Options Options === */


	/* ======= Conversion Process ======= */
	$(".convert").click(function() {

		return false;
	});
	/* ===== End Conversion Process ===== */

});
