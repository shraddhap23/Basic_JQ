$(document).ready(function(){

    $("h1").click(function(){
      $(this).hide();
    });

    $(".puppy").hover(function(){
    	$(".puppy").fadeOut(1000);
    });

    $("#two").click(function(){
    	$(".black").animate({height: "400px"})
    });

    $("#three").click(function(){
    	$(".pink").animate({opacity: "0.5"});
    });

    $("#four").click(function(){
    	$(".green").animate({height: "toggle"});
    });

    $("#five").click(function(){
    	$(".red").slideUp(2000);
    });

    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });

    $("#seven").click(function(){
    	$(".yellow").slideUp(2000)
    							.slideDown(2000);
    });

    $("#hover").hover(function(){
    	$("#pull").slideDown("slow");
    })

    $("#ten").click(function(){
    $(".orange").animate({width: "100px"});
    });


});