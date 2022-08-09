
//Función que al posicionarse sobre un texto se puede esconder e igual volver aparecer//
$(function () {

    $("#p1").mouseenter(function () {


        $("#p2").fadeOut();

    });

    $("#p1").mouseleave(function () {


        $("#p2").fadeIn();

    });

    $("#p2").mouseenter(function () {


        $("#p3").fadeOut();

    });

    $("#p2").mouseleave(function () {


        $("#p3").fadeIn();

    });

   
});


//Función que cambia la opacidad cuando se posiciona sobre la imagen//

$(function () {

    $(".foto").hover(function () {
        $(this).animate({ 'opacity': '1.90' }, 100);
    },
        function () {
            $(this).animate({ 'opacity': '1.90' }, 100);
        });

});

//Función que al realizar click sobre un texto , sale información sobre esta//
$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideDown(5000);
    });
    $("#stop").click(function () {
        $("#panel").slideUp(500);
    });
});

//Función que al realizar click sobre un texto se puede imprimir la página//
$(function () {
    $(".printPage").click(function () {
        window.print();
        return false;
    });
});


//Geolocalización//
$(function () {
    $("#find").click(function () { //user clicks button
        if ("geolocation" in navigator) { //check geolocation available 
            //try to get user current location using getCurrentPosition() method
            navigator.geolocation.getCurrentPosition(function (position) {
                $("#result").html("Found your location Lat : " + position.coords.latitude + " Lang :" + position.coords.longitude);
                
            });
        } else {
            console.log("Browser doesn't support geolocation!");
        }
    });
});