$(document).ready(function() {

	/* Selections ======================================= */
	var selections = [
					 	"Impressions",
					 	"CPM",
					 	"Cost/1000 People Reached",
					 	"Outbound Clicks",
					 	"Landing Page Views",
					 	"View Content",
					 	"Adds to Cart",
					 	"Initiate Checkouts",
					 	"Purchase Information",
					 	"Purchases",
					 	"Purchase Conversion",
					 	"Amount Spent",
					 	"ROAS"
					 ];
	var selection_values = [
					 	"imp",
					 	"cpm",
					 	"cpr",
					 	"click",
					 	"lpv",
					 	"vc",
					 	"atc",
					 	"ic",
					 	"pi",
					 	"pur",
					 	"purconv",
					 	"spend",
					 	"roas"
					 ];
	/* End Selections =================================== */


	/* START ============================================ */
	// Metrics Load
	addMetricColumn(13);
	addSelections(".col");
	resetMetrics();

	// Conversions Load
	addConversionColumn(9);
	addSelections(".conv");
	resetConversions();


	// Show Values Load
	addSvalColumn(6);
	addSelections(".sval");
	resetSval();

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
		$(".column-2").val("cpm");
		$(".column-3").val("cpr");
		$(".column-4").val("click");
		$(".column-5").val("lpv");
		$(".column-6").val("vc");
		$(".column-7").val("atc");
		$(".column-8").val("ic");
		$(".column-9").val("pi");
		$(".column-10").val("pur");
		$(".column-11").val("purconv");
		$(".column-12").val("spend");
		$(".column-13").val("roas");
	}
	/* End Metrics Functions ============================ */

	/* Conversions Functions ============================ */
	function addConversionColumn(amt) {
		var curAmt = $(".conversion-container").length;
		for (var i = curAmt + 1; i <= amt + curAmt; i++) {
			$(".conversion-options .inside").append(
				"<div class='cont conversion-container conversion-container-" + i + "'>" +
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
		var curAmt = $(".sval-container").length;
		for (var i = curAmt + 1; i <= amt + curAmt; i++) {
			$(".sval-options .inside").append(
				"<div class='cont sval-container sval-container-" + i + "'>" +
					"<label for='sval-" + i + "'>Value " + i + ":</label> " +
					"<select class='sval sval-" + i + "' name='sval-" + i + "' id='sval-" + i + "'></select>" +
				"</div>");
		}
	}
	function resetSval() {
		$(".sval-1").val("cpm");
		$(".sval-2").val("cpr");
		$(".sval-3").val("pur");
		$(".sval-4").val("purconv");
		$(".sval-5").val("spend");
		$(".sval-6").val("roas");
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
		addMetricColumn(13);
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
		addSvalColumn(1);
		addSelections(".sval-options .inside .sval-container:last-child .sval");

		return false;
	});
	$("#sval-remove").click(function() {
		$(".sval-options .inside .sval-container:last-child").remove();

		return false;
	});
	$("#sval-defaults").click(function() {
		$(".sval-options .inside").empty();
		addSvalColumn(6);
		addSelections(".sval");
		resetSval();

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
