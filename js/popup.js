$(function () {
	$(".video1").click(function () {
		$(".popup1").fadeIn();
	});
	$(".popup1 i").click(function(){
		$(".popup1 video").prop('muted', true); 
		$(".popup1").fadeOut();
	});
	$(".video2").click(function () {
		$(".popup2").fadeIn();
	});
	$(".popup2 i").click(function(){
		$(".popup2 video").prop('muted', true); 
		$(".popup2").fadeOut();
	});
	$(".video3").click(function () {
		$(".popup3").fadeIn();
	});
	$(".popup3 i").click(function(){
		$(".popup3 video").prop('muted', true); 
		$(".popup3").fadeOut();
	});
	$(".video4").click(function () {
		$(".popup4").fadeIn();
	});
	$(".popup4 i").click(function () {
		$(".popup4 video").prop('muted', true); 
		$(".popup4").fadeOut();
	});
	$(".video5").click(function () {
		$(".popup5").fadeIn();
	});
	$(".popup5 i").click(function () {
		$(".popup5").fadeOut();
	});
	$(".video6").click(function () {
		$(".popup6").fadeIn();
	});
	$(".popup6 i").click(function () {
		$(".popup6").fadeOut();
	});
	$(".video7").click(function () {
		$(".popup7").fadeIn();
	});
	$(".popup7 i").click(function () {
		$(".popup7").fadeOut();
	});
});
