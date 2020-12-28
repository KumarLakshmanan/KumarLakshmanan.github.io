const questions = [
    {
        question : "Who invented the Light Bulb ?",
        answers : ["Edison" , "Newton"],
        correct : 1,
    },
    {
        question : "What is the name of the largest moon in Saturn ?",
        answers : ["Uranus" , "Titan"],
        correct : 2,
    },
    {
        question : "Which planet is known ad 'Blue Planet' ?",
        answers : ["Jupiter" , "Earth"],
        correct : 2,
    },
    {
        question : "Which is the largest living animal in the world ?",
        answers : ["Elephant" , "Blue Whale"],
        correct : 2,
    },
    {
        question : "Who invented the Computer ?",
        answers : ["Steve Jobs" , "Charles Babbage"],
        correct : 2,
    },
    {
        question : "How many hours are there in a day ?",
        answers : ["24" , "26"],
        correct : 1,
    },
    {
        question : "Which one is the largest continent in world ?",
        answers : ["Asia" , "Africa"],
        correct : 1,
    },
    {
        question : "Who founded Facebook ?",
        answers : ["Larry Page" , "Mark Zuckerberg"],
        correct : 2,
    },
    {
        question : "Which is the longest river on Earth ?",
        answers : ["Nile" , "Ganga"],
        correct : 1,
    },
    {
        question : "Weight is measured by ?",
        answers : ["KiloGrams" , "Litres"],
        correct : 1,
    }
]
var questionIndex = 0;
var scorePoint = 0;
var Counter;
var timer = 20;
var TimerElement = $(".quiz_timer .time")

$(document).ready(function () {
    loadQuiz();
});
function loadQuiz() {
    questionIndex = 0;
    scorePoint = 0;
    timer = 20;
    $(".action_btns .btn-start")
    .html("Start")
    .fadeIn(500)
    .on("click" , () => {
        $(".welcome-txt").fadeOut(500);
        $(".action_btns .btn-start").fadeOut(600)
        setTimeout(() => {
            $(".quiz_stats").fadeIn(500)
            $(".question_wrapper").fadeIn(500)
            loadNewQuestion();
        }, 500);
    });
    refreshQuiz();
}
function loadNewQuestion() {
    if (questionIndex >= questions.length) {
        $(".rScore").html(scorePoint);
        $(".rQuestions").html(questions.length);
        $(".rCorrect").html(scorePoint / 5);
        $(".rWrong").html(questions.length - (scorePoint / 5));
        $(".rPercentage").html(`${((scorePoint / 5) / questions.length * 100).toFixed(1)}%`);
        $(".quiz_wrapper").hide();
        $(".results_wrapper").fadeIn();
    }
    else{
        loadQuestion();
        refreshQuiz();
        TimerElement.html(timer);
        $(".options_wrapper .option").hide();
        $(".options_wrapper .option").removeClass("green");
        $(".options_wrapper .option").removeClass("red");
        $(".action_btns .btn-start").hide();
        $(".options_wrapper").fadeIn(500);
        setTimeout(() => {
            $(".options_wrapper .option:nth-child(1)").fadeIn(500);
            setTimeout(() => {
                $(".options_wrapper .option:nth-child(2)").fadeIn(500);
                $(".action_btns .btn-start").off("click");
                $(".options_wrapper .option").on("click" , (e) => checkAnswer(e));
                Counter = setInterval(TimeInterval , 1000)
            }, 500);
        }, 500);
    }
}
function TimeInterval() {
    timer--;
    TimerElement.html(timer);
    if (timer <= 0) {
        TimerElement.html("0");
        $(`.options_wrapper .option:nth-child(${questions[questionIndex].correct})`).click();
        scorePoint = scorePoint - 5;
        clearInterval(Counter);
        timer = 20;
    }
}
function checkAnswer(e) { 
    Eventclass = e.target.classList;
    if ((Eventclass.contains("one") && questions[questionIndex].correct == 1) || 
        (Eventclass.contains("two") && questions[questionIndex].correct == 2))
    {
        Eventclass.add("green");
        scorePoint = scorePoint + 5;
        $(".points").html(scorePoint);
    }
    else{
        Eventclass.add("red");
        $(".points").html(scorePoint);
    }
    questionIndex++;
    $(".options_wrapper .option").off("click");
    clearInterval(Counter);
    timer = 20;
    if (questionIndex >= questions.length) {
        $(".action_btns .btn-start").html("Go Results").fadeIn("1000").on("click", () => {
            loadNewQuestion();
        });
    }
    else{
        $(".action_btns .btn-start").html("Next Question").fadeIn("1000").on("click", () => {
            loadNewQuestion();
        });
    }
}
function loadQuestion() {
    $(".question_wrapper .question .txt").html(questions[questionIndex].question);
    for (let i = 0; i < questions[questionIndex].answers.length; i++) {
        $(".options_wrapper .option:nth-child("+(i + 1)+")")
            .html(questions[questionIndex].answers[i]);
    }
    clearInterval(Counter);
    timer = 20;
}
function refreshQuiz() {
    $(".total").html(questions.length);
    $(".answered").html(questionIndex + 1);
    $(".points").html(scorePoint);
}