
//hide and show nav menu
var $nav = $("#nav_panel");
var $hamburger = $("#hamburger");
var $mainContent = $(".main_content");
//hide nav bar
// $nav.hide();

//show nav bar
// $hamburger.click(function(){
// 	$("#something").toggleClass(#active)
// 	$nav.toggle("slow");
	// $nav.addClass( )
	// $( ".main_content" ).last().addClass( "nav_panel" );
	// $mainContent.css("width", "70%").css("float", "right");
// });

$hamburger.click(function(){
      $("#nav_panel").toggleClass("active");
      $(".main_content").toggleClass("active");
});

$("#artOne").click(function() {
	$("#article_one").find();
	$nav.hide("slow");
});

$("#artTwo").click(function(){
	$("#article_two").find();
	$nav.hide("slow");
});


$("#artThree").click(function(){
	$("#article_three").find();
	$nav.hide("slow");
});

