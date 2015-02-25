
//hide and show nav menu
var $nav = $("#nav_panel");
var $hamburger = $("#hamburger");
var $mainContent = $(".main_content");
//hide nav bar
$nav.hide();

//show nav bar
$hamburger.click(function(){
	$nav.toggle();
	// $mainContent.outerWidth(50%);
});

$("#artOne").click(function(){
	$("#article_one").slideToggle();
});
