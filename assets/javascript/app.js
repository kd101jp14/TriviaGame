$(document).ready(function () {

    // The user has 90 seconds to answer trivia questions, so counter starts at 90.
    var counter = 90;

    //The `interval` variable is defined within the restart function.
    // It is declared globally so other functions may have access to it.
    var interval;

    // The user first sees the start screen.
    $("#startScreen").show();
    $("#gameScreen, #timeUpScreen").hide();

    // When the user presses the start button, quiz is displayed and countdown starts.
    // (This function is also executed when the user presses the restart button after results are displayed.)
    $(".playbtn").click(function () {
        $("#startScreen, #timeUpScreen").hide();
        $("#gameScreen").show();
        $("#hereWeGo")[0].play();
        counter = 90;
        restart();
    });

    // Instead of waiting for time to run out, the user may see results by pressing the submit button.
    $("#submitButton").click(function () {
        timeUp();
        clearInterval(interval);
    });

    function restart() {
        // All choices are cleared/unchecked.
        $('input[name=choice]').prop('checked', false);
        // Time starts over.
        interval = setInterval(decreaseSeconds, 1000);
    }

    function decreaseSeconds() {
        counter--;
        $(secondsLeft).text("Seconds remaining: " + counter);
        if (counter === 0) {
            clearInterval(interval);
            timeUp();
            counter = 10; 
        }
    }

    function timeUp() {
        $("#startScreen, #gameScreen").hide();
        $("#timeUpScreen").show();
        $("#yay")[0].play();
    }





});