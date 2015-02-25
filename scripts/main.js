
//hide and show nav menu
var $nav = $("#nav_panel");
var $hamburger = $("#hamburger");
var $mainContent = $(".main_content");
//hide nav bar
$nav.hide();

//show nav bar
$hamburger.click(function(){
	$nav.toggle();
	// $mainContent.css("width", "70%").css("float", "right");
});


$("#artOne").click(function() {
	$("#article_one").find();
	$nav.hide();
});

$("#artTwo").click(function(){
	$("#article_two").find();
	$nav.hide();
});


$("#artThree").click(function(){
	$("#article_three").find();
	$nav.hide();
});
