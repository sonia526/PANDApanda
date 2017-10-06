$("h2").addClass("animated bounceInLeft");

$("img").addClass("animated pulse");
$(document).ready(function(){
    $(".cajapadre").click(function(){
        $(this).hide();
    });
});
 
    $(".origen").click(function(){
        $("#textORIGEN").toggle();
    });
    $(".extincion").click(function(){
        $("#textoextincion").toggle();
    });
    $(".pandas").click(function(){
        $(".cajapadre").slideDown();
    });
