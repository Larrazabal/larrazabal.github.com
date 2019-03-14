$(document).ready(function() {

	var $window = $(window);
	var winWidth;
	var winHeight;

	// Map scroll to center

	// Header On Load
	function checkSize() {
		winWidth = $window.width();
		winHeight = $window.height();

		$("#map").css("height", winHeight);
		$("#notes").css("height", winHeight);
	}

	checkSize();

	$(window).resize(checkSize);

	$("#note-welcome").show();


	$("#map svg text").click(function() {
		var thisLink = $(this).attr("data-click");

		$("#notes article").hide();
		$(thisLink).show();

		$("#map svg text").removeClass("selected-object");
		$(this).addClass("selected-object");

		return false;
	});

/*	DRAG TO SCROLL (BUGGED)

	var clicked = false, clickY;
	$("#map").on({
		'mousemove': function(e) {
			clicked && updateScrollPos(e);
		},
		'mousedown': function(e) {
			clicked = true;
			clickY = e.pageY;
			$("#map").css("cursor", "grabbing");
		},
		'mouseup': function() {
			clicked = false;
			$("#map").css("cursor", "grab");
		}
	});

	var updateScrollPos = function(e) {
		$("#map").scrollTop($(window).scrollTop() + (clickY - e.pageY));
	}
*/

});