$(document).ready(function () {

    var counter = 10;
    
    var interval;

    // The user first sees the start screen.
    $("#startScreen").show();
    $("#gameScreen, #timeUpScreen").hide();

    // When the user presses the start button, quiz is displayed. Quiz starts.
    $(".btn").click(function () {
        $("#startScreen, #timeUpScreen").hide();
        $("#gameScreen").show();
        // $("#hereWeGo")[0].play();
        counter = 10;
        restart();
    });

    function restart() {
        // All choices are cleared/unchecked.
        $('input[name=choice]').prop('checked', false);
        // Time starts over.
        interval = setInterval(decreaseSeconds, 1000);
        interval;
    }

    function decreaseSeconds() {
        counter--;
        $(secondsLeft).text("Seconds remaining: " + counter);
        if (counter === 0) {
            clearInterval(interval);
            timeUp();
        }
    }

    function timeUp() {
        $("#startScreen, #gameScreen").hide();
        $("#timeUpScreen").show();
    }





});