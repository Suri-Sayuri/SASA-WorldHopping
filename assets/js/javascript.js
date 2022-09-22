$(function(){
// ---------- P6 Tab contents ---------------------
 
$("#btn-service").click(function(){
       $("#service").fadeIn("slow");
       $("#contact").hide();
       $("#aboutus").hide();
   });
   $("#btn-contact").click(function(){
    $("#service").hide();
    $("#contact").fadeIn("slow");
    $("#aboutus").hide();
    });
    $("#btn-aboutus").click(function(){
        $("#service").hide();
        $("#contact").hide();
        $("#aboutus").fadeIn("slow");
    });
   
// --------- P6 Modal ------------------------------

$(".submit").click(function(){
    $(".overlay").show();
});
$(".close").click(function(){
    $(".overlay").hide();
});

// -------- Fadein animation --------------

    // Whenever the window is scrolled ... 
    $(window).scroll( function(){
        // Check the location of the object
        $('.fade-in').each( function(){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
    
            // If the object is inside the window, fade it in!
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });

// ------------- h1 animation ------------

setInterval(function(){
  text1();
},0);
function text1(){
  $(".span1").show(500);
  setInterval(function(){
      text2();
  },2000);
}
function text2(){
$(".span2").show(500);
setInterval(function(){
    text3();
},1550);
}
function text3(){
    $(".span3").show(1000);
}

// ----------  P5 Fullscreen and animation --------------
$("#s-history").click(function(){
    $("#s-history").show();
    $("#alhambra").hide(1000);
    $("#andalcia").hide(1000);
    $("#tapas").hide(1000);
    $("#flamenco").hide(1000);
    $("#stsebastian").hide(1000);
    $("#barcelona").hide(1000);
    $("#donquijote").hide(1000);
    $("#santiago").hide(1000);
    $("#sierra").hide(1000);
       
            $("#P5-overlay").show(1500);
       
});
function circles(){
    $("#s-history").show(1000);
    $("#alhambra").show(1000);
    $("#andalcia").show(1000);
    $("#tapas").show(1000);
    $("#flamenco").show(1000);
    $("#stsebastian").show(1000);
    $("#barcelona").show(1000);
    $("#donquijote").show(1000);
    $("#santiago").show(1000);
    $("#sierra").show(1000);
}

$("#close1").click(function(){
    $("#P5-overlay").hide(2000, function(){
        circles();
    });
});

$("#alhambra").click(function(){
    $("#s-history").hide(1000);
    $("#alhambra").show();
    $("#andalcia").hide(1000);
    $("#tapas").hide(1000);
    $("#flamenco").hide(1000);
    $("#stsebastian").hide(1000);
    $("#barcelona").hide(1000);
    $("#donquijote").hide(1000);
    $("#santiago").hide(1000);
    $("#sierra").hide(1000);
            $("#P5-overlay2").show(3000).css("visibility","visible");
    
});
$("#close2").click(function(){
    $("#P5-overlay2").hide(2000,function(){
        circles();
    });
});

// ----------- Menu Accordion ---------

$("#hamburger").click(function(){
    $("#menu li").slideToggle();
});

// ----------- P4 Slider -----------

$(".slider1").slick({
    dots:true,
    infinate:true,
    speed:500,
    fade:true,
    cssEase:"liner",
    autoplay:true
})


});