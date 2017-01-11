$(document).ready(function(){
	"use strict";

	var logo = $(".logo");

	logo.animate({
		opacity: 1,
		top: 50%
	}, "slow");
	// Logo Animation
	/*setTimeout(function() 
		{$(".logo").css('opacity', 0).css('hight', 60%).animate(
			{ opacity: 1, hight: 50% }, "slow");}
	), 1000);*/
	//$(".modal-overlay").fadeOut();


});