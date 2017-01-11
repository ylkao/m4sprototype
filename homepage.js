$(document).ready(function(){
	"use strict";

	var logo = $(".logo");

	$(".help-button").click(function() {
		$(".img-overlay").animate({ opacity: "1" }, 'slow');
		setTimeout(function() {$(".pop").attr('src', 'Resources/help.jpg')}, 700);
		$(".img-overlay").animate({ opacity: "0" }, 'slow');
	});

	$(".home-button").click(function() {
		$(".img-overlay").animate({ opacity: "1" }, 'slow');
		setTimeout(function() {$(".pop").attr('src', 'Resources/home.jpg')}, 700);
		$(".img-overlay").animate({ opacity: "0" }, 'slow');
	});

	$(".signup-button").click(function() {
		$(".img-overlay").animate({ opacity: "1" }, 'slow');
		setTimeout(function() {$(".pop").attr('src', 'Resources/signup.jpg')}, 700);
		$(".img-overlay").animate({ opacity: "0" }, 'slow');
	});

	$(".signin-button").click(function() {
		$(".img-overlay").animate({ opacity: "1" }, 'slow');
		setTimeout(function() {$(".pop").attr('src', 'Resources/signin.jpg')}, 700);
		$(".img-overlay").animate({ opacity: "0" }, 'slow');
	});

	$(".proto-button").click(function() {
		openInNewTab("https://popapp.in/w/projects/5870097e0c8102da0f6538e4/preview/587015ec3e43a3257a1b1e95");
	});

	$(".about-button").click(function(){
			$("#modal-container").show();
	});

	$("#cancel").click(function(){
		$("#modal-container").hide();
	});



	// Logo Animation
	logo.animate({
		opacity: '1',
		top: '50%' }, "slow");

	setTimeout(function() {logo.animate({ opacity: '0' }, 
		{ duration: 200, queue: true })}, 1300);

	setTimeout(function() {$(".modal-overlay").animate({ opacity: '0' }, 
		{ duration: 200, queue: true })}, 1300);

	setTimeout(function() {$(".modal-container").animate({ "z-index": '-1' }, 
		{ duration: 200, queue: true })}, 1500);


/*
	    $(".logo").animate({
	       opactiy: 0
	    }, { duration: 200, queue: false }); */ 

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

});