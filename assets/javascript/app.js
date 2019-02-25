$(document).ready(function () {

    // The user has 90 seconds to answer trivia questions, so counter starts at 90.
    var counter = 90;

    //The `interval` variable is defined within the restart function.
    // It is declared globally so other functions may have access to it.
    var interval;

    var correctAnswser = 0;
    var incorrectAnswer = 0;
    var unanswered = 0;

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

    // User's choices are used to determine the amount correct, incorrect, and unanswered.
    function submitAnswer() {
        var choices = ('input[name=choice]');
        var userAnswer;

        for (i = 0; i < choices.length; i++) {
            if (choices[i].value === "true") {
                correctAnswser++;
                alert(correctAnswser);
            }
            if (choices[i].value === "false") {
                incorrectAnswer++;
                alert(incorrectAnswer);
            }
            if (choices[i].value !== "true" && choices[i].value !== "false") {
                unanswered++;
                alert(unanswered);
            }
        }

    }

    // Instead of waiting for time to run out, the user may see results by pressing the submit button.
    $("#submitButton").click(function () {
        timeUp();
        $(secondsLeft).text("Seconds remaining: 90");
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
            timeUp();
            $(secondsLeft).text("Seconds remaining: 90");
        }
    }

    function timeUp() {
        $("#startScreen, #gameScreen").hide();
        $("#timeUpScreen").show();
        $("#yay")[0].play();
        clearInterval(interval);
        counter = 90;
    }





});