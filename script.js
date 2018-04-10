// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    // when i click to find out
    // reveal more information

    $("a").on("click", function() {
    	$(".col").append("<h1>It's 2.4%!</h1>");
    });
});