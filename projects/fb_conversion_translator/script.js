$(document).ready(function() {

	/* START ========================================= */
	// Metrics Load
	addColumnSelection(12);
	addSelections();
	resetMetrics();

	// Conversions Load


	// Show Values Load

	/* END START ===================================== */


	/* Metrics Dropdown Selection ======================= */
	var selections = [
					 	"Impressions",
					 	"Outbound Clicks",
					 	"Landing Page Views",
					 	"View Content",
					 	"Adds to Cart",
					 	"Initiate Checkouts",
					 	"Purchase Information",
					 	"Purchases",
					 	"CPM",
					 	"Purchase Conversion",
					 	"Amount Spent",
					 	"ROAS"
					 ];
	var selection_values = [
					 	"imp",
					 	"click",
					 	"lpv",
					 	"vc",
					 	"atc",
					 	"ic",
					 	"pi",
					 	"pur",
					 	"cpm",
					 	"purconv",
					 	"spent",
					 	"roas"
					 ];

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
	function addSelections() {
		for (var i = 0; i <= selections.length - 1; i++) {
			$(".col").append("<option value='" + selection_values[i] + "'>" + selections[i] + "</option>");
		}
	}
	function resetMetrics() {
		$(".column-1").val("imp");
		$(".column-2").val("click");
		$(".column-3").val("lpv");
		$(".column-4").val("vc");
		$(".column-5").val("atc");
		$(".column-6").val("ic");
		$(".column-7").val("pi");
		$(".column-8").val("pur");
		$(".column-9").val("cpm");
		$(".column-10").val("purconv");
		$(".column-11").val("spent");
		$(".column-12").val("roas");
	}
	/* End Metrics Dropdown Selection =================== */


	/* Conversions Dropdown Selection =================== */
	
	/* End Conversions Dropdown Selection =============== */


	/* Show Values Dropdown Selection =================== */
	
	/* End Show Values Dropdown Selection =============== */


	/* Metrics Options Options ========================== */
	$("#metric-add").click(function() {
		addColumnSelection(1);
		for (var i = 0; i <= selections.length - 1; i++) {
			$(".metric-options .inside .column-container:last-child .col").append("<option value='" + selection_values[i] + "'>" + selections[i] + "</option>");
		}

		return false;
	});
	$("#metric-remove").click(function() {
		$(".metric-options .inside .column-container:last-child").remove();

		return false;
	});
	$("#metric-defaults").click(function() {
		$(".metric-options .inside").empty();
		addColumnSelection(12);
		addSelections();
		resetMetrics();

		return false;
	});
	/* End Metrics Options Options ====================== */


	/* Converion Options Options ======================== */
	$("#conversions-add").click(function() {

		return false;
	});
	$("#conversions-remove").click(function() {

		return false;
	});
	$("#conversions-defaults").click(function() {

		return false;
	});
	/* End Converion Options Options ==================== */


	/* Show Values Options Options ====================== */
	
	/* End Show Values Options Options ================== */


	/* Conversion Process =============================== */
	$(".convert").click(function() {

		return false;
	});
	/* End Conversion Process =========================== */

});
