/* Put code for the task below */
$(document).ready(function(){
    /*$("#red").click(function(){
       $(".table").css("background-color", "red");
    });
    $("#blue").click(function(){
        $(".table").css("background-color", "blue");
    });
    $("#green").click(function(){
        $(".table").css("background-color", "green");
    });*/

    $(".color").click(function(){
       $(".table").css("background-color", $(this).val());
    });


});