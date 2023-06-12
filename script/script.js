$("#onhover").css({
    opacity:0
});

document.getElementById("btn").addEventListener("click", function(){
    $("#onhover").animate({opacity:0.6});
});