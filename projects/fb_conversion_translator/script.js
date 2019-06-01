$(document).ready(function() {

	/* START Selections ======================================= */
	var selections = [
		{
			"title": "Impressions",
			"id": "imp"
		},
		{
			"title": "CPM",
			"id": "cpm"
		},
		{
			"title": "Cost/1000 People Reached",
			"id": "cpr"
		},
		{
			"title": "Outbound Clicks",
			"id": "click"
		},
		{
			"title": "Landing Page Views",
			"id": "lpv"
		},
		{
			"title": "View Content",
			"id": "vc"
		},
		{
			"title": "Adds to Cart",
			"id": "atc"
		},
		{
			"title": "Initiate Checkouts",
			"id": "ic"
		},
		{
			"title": "Purchase Information",
			"id": "pi"
		},
		{
			"title": "Purchases",
			"id": "pur"
		},
		{
			"title": "Purchase Conversion",
			"id": "purconv"
		},
		{
			"title": "Amount Spent",
			"id": "spend"
		},
		{
			"title": "ROAS",
			"id": "roas"
		}
	];
	/* END Selections =================================== */


	/* START START ============================================ */
	// Metrics Load
	var defMetric = 13;
	addMetricColumn(defMetric);
	addSelections(".col");
	resetMetrics();

	// Conversions Load
	var defConv = 9;
	addConversionColumn(defConv);
	addSelections(".conv");
	resetConversions();


	// Show Values Load
	var defSval = 6;
	addSvalColumn(defSval);
	addSelections(".sval");
	resetSval();

	/* END START ======================================== */


	/* START Metrics Functions ================================ */
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
	/* END Metrics Functions ============================ */

	/* START Conversions Functions ============================ */
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
	/* END Conversions Functions ============================ */


	/* START Show Values Functions ============================ */
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
	/* END Show Values Functions ============================ */


	/* START Metrics Options Options ========================== */
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
		addMetricColumn(defMetric);
		addSelections(".col");
		resetMetrics();

		return false;
	});
	/* END Metrics Options Options ====================== */


	/* START Converion Options Options ======================== */
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
		addConversionColumn(defConv);
		addSelections(".conv");
		resetConversions();

		return false;
	});
	/* END Converion Options Options ==================== */


	/* START Show Values Options Options ====================== */
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
		addSvalColumn(defSval);
		addSelections(".sval");
		resetSval();

		return false;
	});
	/* END Show Values Options Options ================== */


	/* START Add Selections =================================== */
	function addSelections(target) {
		for (var i = 0; i <= selections.length - 1; i++) {
			$(target).append("<option value='" + selections[i].id + "'>" + selections[i].title + "</option>");
		}
	}
	/* END Add Selections =============================== */


	/* CONVERSION ======================================= */

	var inputData;
	$(".convert").click(function() {

		// GET DATA
		inputData = $(".input").val();

		// SPLIT INPUT BY LINE INTO ARRAY
		inputData = inputData.split(/\n/);

		// ROW COUNT
		inputSize = inputData.length;

		// SPLIT EACH ARRAY BY TAB
		for (var i = 0; i <= inputSize - 1; i++) {
			inputData[i] = inputData[i].split(/\t/);
		}

		// GET SELECTED METRICS
		var metricAmt = $(".column-container").length;
		var metricsSelected = [];
		for (var i = 1; i <= metricAmt; i++) {
			metricsSelected[i-1] = $(".column-" + i).val();
		}

		// CLEAR OUTPUT
		$(".output thead").empty();
		$(".output tbody").empty();

		// WRITE ON OUTPUT TABLE HEAD
		$(".output thead").append("<td>Name</td>");
		for (var i = 0; i < metricAmt; i++) {
			$(".output thead").append("<td>" + IDToTitle(metricsSelected[i]) + "</td>");
		}

		// WRITE ON OUTPUT TABLE BODY
		$(".output tbody").append();
		var outputTableString = "";
		for (var i = 0; i < inputSize; i++) {
			outputTableString += "<tr class='output-row-" + (i + 1) + "'>"
			for (var x = 0; x <= metricAmt; x++) {
				outputTableString += "<td>" + inputData[i][x] + "</td>";
			}
			outputTableString += "</tr>"
		}
		$(".output tbody").append(outputTableString);

		// SHOW OUTPUT
		$(".output-container").show();

		// GET SELECTED CONVERSIONS
		var conversionAmt = $(".conversion-container").length;
		var conversionsSelected = [];
		for (var i = 1; i <= conversionAmt; i++) {
			conversionsSelected.push({
				"from": $(".conv-" + i + "-1").val(),
				"to": $(".conv-" + i + "-2").val()
			});
		}

		// OUTPUT CONVERSIONS TO TABLES
		$(".output-conversions-container").empty();
		for (var y = 0; y < inputSize; y++) {
			$(".output-conversions-container").append("<table class='output-conversions output-conversions-" + (y + 1) + "''><thead></thead><tbody></tbody></table>");

			var conversionHeaderString = "";
			conversionHeaderString += "<tr>";
			conversionHeaderString += "<td colspan='3'>" + inputData[y][0] + " Conversions</td>";
			conversionHeaderString += "<td>" + "Percentage" + "</td>";
			conversionHeaderString += "</tr>";
			$(".output-conversions-" + (y + 1) + " thead").append(conversionHeaderString);

			for (var i = 0; i < conversionAmt; i++) {
				var conversionString = "";
				conversionString += "<tr>";
				conversionString += "<td><strong>" + IDToTitle(conversionsSelected[i].from) + "</strong></td>";
				conversionString += "<td rowspan='2' class='tcent tarrow'>" + " &gt; " + "</td>";
				conversionString += "<td><strong>" + IDToTitle(conversionsSelected[i].to) + "</strong></td>";
				conversionString += "<td rowspan='2' class='tcent'>" +
									turnToPercentage((turnToNumber(IDToVal(conversionsSelected[i].to, (y)))) /
									(turnToNumber(IDToVal(conversionsSelected[i].from, (y))))) +
									"</td>";
				conversionString += "</tr>";

				conversionString += "<tr>";
				conversionString += "<td>" + IDToVal(conversionsSelected[i].from, (y)) + "</td>";
				conversionString += "<td>" + IDToVal(conversionsSelected[i].to, (y)) + "</td>";
				conversionString += "</tr>";

				$(".output-conversions-" + (y + 1) + " tbody").append(conversionString);
			}
		}

		// OUTPUT SHOW VALUES TO TABLES
		$(".output-sval-container").empty();
		var svalAmt = $(".sval-container").length;
		for (var y = 1; y <= inputSize; y++) {
			$(".output-sval-container").append("<table class='output-sval output-sval-" + y + "''><thead></thead><tbody></tbody></table>");
		
			var svalHeaderString = "<tr><td colspan='" + svalAmt + "'>" + inputData[y-1][0] + " Data</td></tr>";
			svalHeaderString += "<tr>";
			for (var i = 1; i <= svalAmt; i++) {
				svalHeaderString += "<td>" + IDToTitle($(".sval-" + i).val()) + "</td>";
			}
			svalHeaderString += "</tr>";
			$(".output-sval-" + y + " thead").append(svalHeaderString);

			var svalString = "<tr>"
			for (var i = 1; i <= svalAmt; i++) {
				svalString += "<td>" + IDToVal($(".sval-" + i).val(), (y-1)) + "</td>";
			}
			svalString += "</tr>";
			$(".output-sval-" + y + " tbody").append(svalString);
		}
		console.log(IDToVal($(".sval-6").val(), 0));
		return false;
	});

	/* END CONVERSION =================================== */

	/* Data Conversion ================================== */
	function turnToNumber(input) {
		input = input.replace(/,/g, "");
		return input;
	}

	function turnToPercentage(input) {
		input = (input*100).toFixed(2);
		input = input + "%";
		return input;
	}

	function IDToVal(ID, rowNum) {
		var cl = $(".column-container").length;
		var IDlocInSelected;
		var theValue;
		for (var i = 0; i <= cl; i++) {
			if (ID == $(".column-" + i).val()) {
				theValue = inputData[rowNum][i];
				break;
			}
		}

		return theValue;
	}

	function IDToTitle(ID) {
		var IDloc;
		var theTitle;
		for (var i = 0; i < selections.length; i++) {
			if (ID == selections[i].id) {
				IDloc = i;
				break;
			}
		}
		theTitle = selections[IDloc].title;

		return theTitle;
	}
	/* END Data Conversion ============================== */

});
