$(document).ready(function() {

	/* Selections ======================================= */
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
	/* End Selections =================================== */


	/* START ============================================ */
	// Metrics Load
	addMetricColumn(12);
	addSelections(".col");
	resetMetrics();

	// Conversions Load
	addConversionColumn(9);
	addSelections(".conv");
	resetConversions();


	// Show Values Load

	/* END START ======================================== */


	/* Metrics Functions ================================ */
	function addMetricColumn(amt) {
		var curAmt = $(".column-container").length;
		for (var i = curAmt + 1; i <= amt + curAmt; i++) {
			$(".metric-options .inside").append(
				"<div class='cont column-container column-container-" + i + "'>" +
					"<label for='column-" + i + "'>Column " + i + ":</label> " +
					"<select class='col column-" + i + "' name='column-" + i + "' id='column-" + i + "'></select>" +
				"</div>");
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
	/* End Metrics Functions ============================ */

	/* Conversions Functions ============================ */
	function addConversionColumn(amt) {
		var curAmt = $(".conversion-container").length;
		for (var i = curAmt + 1; i <= amt + curAmt; i++) {
			$(".conversion-options .inside").append(
				"<div class='cont conversion-container'>" +
					"<span>Conversion " + i + ": </span>" +
					"<select class='conv conv-" + i + "-1' name='conv-" + i + "-1' id='conv-" + i + "-1'></select>" +
					"<span> &gt; </span>" +
					"<select class='conv conv-" + i + "-2' name='conv-" + i + "-2' id='conv-" + i + "-2'></select>" +
				"</div>");
		}
	}
	function resetConversions() {
		$(".conv-1-1").val("imp");
		$(".conv-1-2").val("click");

		$(".conv-2-1").val("click");
		$(".conv-2-2").val("lpv");

		$(".conv-3-1").val("lpv");
		$(".conv-3-2").val("atc");

		$(".conv-4-1").val("atc");
		$(".conv-4-2").val("ic");

		$(".conv-5-1").val("ic");
		$(".conv-5-2").val("pur");

		$(".conv-6-1").val("lpv");
		$(".conv-6-2").val("pur");

		$(".conv-7-1").val("atc");
		$(".conv-7-2").val("pur");

		$(".conv-8-1").val("pi");
		$(".conv-8-2").val("pur");

		$(".conv-9-1").val("lpv");
		$(".conv-9-2").val("vc");
	}
	/* End Conversions Functions ============================ */


	/* Show Values Functions ============================ */
	function addSvalColumn(amt) {
		var curAmt = $(".conversion-container").length;
		for (var i = curAmt + 1; i <= amt + curAmt; i++) {
			$(".conversion-options .inside").append(
				"<div class='cont conversion-container'>" +
					"<span>Conversion " + i + ": </span>" +
					"<select class='conv conv-" + i + "-1' name='conv-" + i + "-1' id='conv-" + i + "-1'></select>" +
					"<span> &gt; </span>" +
					"<select class='conv conv-" + i + "-2' name='conv-" + i + "-2' id='conv-" + i + "-2'></select>" +
				"</div>");
		}
	}
	/* End Show Values Functions ============================ */


	/* Metrics Options Options ========================== */
	$("#metric-add").click(function() {
		addMetricColumn(1);
		addSelections(".metric-options .inside .column-container:last-child .col");

		return false;
	});
	$("#metric-remove").click(function() {
		$(".metric-options .inside .column-container:last-child").remove();

		return false;
	});
	$("#metric-defaults").click(function() {
		$(".metric-options .inside").empty();
		addMetricColumn(12);
		addSelections(".col");
		resetMetrics();

		return false;
	});
	/* End Metrics Options Options ====================== */


	/* Converion Options Options ======================== */
	$("#conversions-add").click(function() {
		addConversionColumn(1);
		addSelections(".conversion-options .inside .conversion-container:last-child .conv");

		return false;
	});
	$("#conversions-remove").click(function() {
		$(".conversion-options .inside .conversion-container:last-child").remove();

		return false;
	});
	$("#conversions-defaults").click(function() {
		$(".conversion-options .inside").empty();
		addConversionColumn(9);
		addSelections(".conv");
		resetConversions();

		return false;
	});
	/* End Converion Options Options ==================== */


	/* Show Values Options Options ====================== */
	$("#sval-add").click(function() {

		return false;
	});
	$("#sval-remove").click(function() {

		return false;
	});
	$("#sval-defaults").click(function() {

		return false;
	});
	/* End Show Values Options Options ================== */


	/* Conversion Process =============================== */
	$(".convert").click(function() {

		return false;
	});
	/* End Conversion Process =========================== */



	/* Add Selections =================================== */
	function addSelections(target) {
		for (var i = 0; i <= selections.length - 1; i++) {
			$(target).append("<option value='" + selection_values[i] + "'>" + selections[i] + "</option>");
		}
	}
	/* End Add Selections =============================== */

});
