$(document).ready(function () {
    $("#gameScreen").hide();

    $("#startButton").click(function () {
        $("#startScreen").hide();
        $("#gameScreen").show();
    });
});