$(document).ready(function () {

    var counter = 5;

    var interval = setInterval(decreaseSeconds, 1000);

    function decreaseSeconds() {
        counter--;
        $(secondsLeft).text("Seconds remaining: " + counter);
        if (counter === 0) {
            clearInterval(interval);
            timeUp();
        }
    }

    function restart() {
        // All choices are cleared/unchecked.
        $('input[name=choice]').prop('checked', false);
        // Time starts over.
        interval;
    }

    // The user first sees the start screen.
    $("#gameScreen").hide();

    // When the user presses the start button, quiz is displayed. Quiz starts.
    $("#startButton").click(function () {
        $("#startScreen").hide();
        $("#gameScreen").show();
        // $("#hereWeGo")[0].play();
        restart();
    });





});