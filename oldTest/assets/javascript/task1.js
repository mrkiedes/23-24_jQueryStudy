
/* Put code for the task below */
$(document).ready(function(){
    $("#imageTask1").mouseenter(function(){
        $("#buttonTask1").show();
    });

    $("#buttonTask1").click(function(){
        $("#imageTask1").hide();
    });
});