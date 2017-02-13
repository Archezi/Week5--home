$(document).ready(function(){
	var fullHeightMinusHeader = 0;

	function calcHeighs() {
		fullHeightMinusHeader = $(window).height() - $(".navbar-default").outerHeight();
		fullWidthMinusHeader = $(window).height() - $(".site-nav").outerHeight();
		$()
	}

	calcHeighs();
});