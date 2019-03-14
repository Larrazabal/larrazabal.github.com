$(document).ready(function() {

	var $window = $(window);
	var winWidth;
	var winHeight;

	// Header On Load
	function checkSize() {
		winWidth = $window.width();
		winHeight = $window.height();

		$("#map").css("height", winHeight);
	}

	checkSize();

	$(window).resize(checkSize);


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