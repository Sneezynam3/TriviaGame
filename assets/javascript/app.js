

var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hop Skip For Land",
            "Hyper Text Mark-up Language",
            "Happy To Make Language"],
        correct: "Hyper Text Mark-up Language"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheet",
            "Common Simple Style",
            "Computer Singular Sheet"],
        correct: "Cascading Style Sheet"
    },
    {
        question: "What is the proper syntax for a function?",
        choices: ["function name (parameter1, parameter2) {}",
            "faster [array] function parameters",
            "{} name (parameter11, parameter)"],
        correct: "function name (parameter1, parameter2) {}"
    },
    {
        question: "What does a while loop do?",
        choices: ["Loops though the properties of an object.",
            "Loops through the the values of an iterable object.",
            "Loops through a block of code while a specified condition is true."],
        correct: "Loops through a block of code while a specified condition is true."

    },
    {
        question: "What does a for/in loop do?",
        choices: ["Loops through a block of code while a specified condition is true",
            "Loops through the properties of an object",
            "Loops through the values of an iterable object"],
        correct: "Loops through the properties of an object"

    },
    {
        question: "What does the pop method do?",
        choices: ["Adds the front of an array",
            "Removes the last element of an object",
            "Removes the last element of an array"],
        correct: "Removes the last element of an array"

    },
    {
        question: "What does the splice method do?",
        choices: ["Used to delete items from an object",
            "Used to delete items from an array",
            "Used to add new items to an array"],
        correct: "Used to add new items to an array"
    }
];


//initial values
var counter = 30;
var currentQuestion = 0;
var score = 0;
var missed = 0;
var timer;



function displayQ (question, choice) {
    
    $("#questionsHere").empty()
    $("#questionsHere").append(`<form>
    <div class="form-group">
        <label for="question">${question}</label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="question"  value="option1">
            <label class="form-check-label" for="option1">
            ${choice[0]}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="question" value="option2">
            <label class="form-check-label" for="option2">
            ${choice[1]}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="question" value="option3">
            <label class="form-check-label" for="option3">
            ${choice[2]}
            </label>
        </div>

        <button type="submit" id="Game" class="btn btn-primary">Submit</button>
</form>`)
}



function nextQuestion() {
    var isQuestionOver = (questions.length - 1) === currentQuestion;
    if (isQuestionOver) {
        displayResult();
        console.log("Game over!")
    } else {
        currentQuestion++;
        loadQuestion();
    };

};

function timeUp() {
    clearInterval(timer);
    missed++;
    preloadImage("missed");
    setTimeout(nextQuestion, 3000)
    nextQuestion();
}

function countDown() {
    counter--;

    $("#time").html("Timer: " + counter);

    if (counter === 0) {
        timeUp();
    }
}


function loadQuestion() {
    clearInterval(timer);
    counter = 30;
    timer = setInterval(countDown, 1000)
    var question = questions[currentQuestion].question;
    var choices = questions[currentQuestion].choices;
    $("#time").html("Timer: " + counter);
    displayQ (question, choices);
    
};

function loadChoices(choices) {
    var result = "";

    for (let i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;
};

$(document).on("click", "#Game", function (event) {
    event.preventDefault();
    console.log("test");
    clearInterval(timer);
    var userInput = $('input[name = "question"]:checked').val();
    console.log(userInput)
    var correctAnswer = questions[currentQuestion].correctAnswer;
    if (correctAnswer === selectedAnswer) {
        score++;
        console.log("Winner!!!");
        nextQuestion();
        preloadImage("win");
        setTimeout(nextQuestion, 3000)
    } else {
        missed++;
        nextQuestion();
        console.log("Loser!")
        setTimeout(nextQuestion, 3000)
    }

});

function displayResult() {
    var result = `
    <p>You get ${score} questions(s) right</p>
    <p>You missed ${missed} questions(s)</p>
    <p>Total questions ${questions.length} questions(s) right</p>
    <button class="btn btn-primary" id="reset" >ResetGame</button>
    `;

    $("#game").html(result);
}

$(document).on("click", "#reset", function () {
    counter = 30;
    currentQuestion = 0;
    score = 0;
    missed = 0;
    clearInterval(timer);

    loadQuestion();
});

function loadRemainingQuestion() {
    var remainingQuestion = questions.length - (currentQuestion + 1);
    var totalQuestion = questions.length;

    return `Remaining Questions: ${remainingQuestion}/${totalQuestion}`;
}


var trueImage = [
    "assets/images/giphy(T).gif"
];

var falseImage = [
    "assets/images/giphy(F).gif"
]

function preloadImage(status) {
    var correctAnswer = questions[currentQuestion].correctAnswer

    if (status === "win") {
        $("#game").html(`
            <p class="preload-image">Congrats, you know your stuff!</p>
            <p class="preload-image">The correct answer is <b>${correctAnswer}</b></p>

        `)
    } else {
        $("#game").html(`
        <p class="preload-image">The correct answer is <b>${correctAnswer}</b></p>
        <p class="preload-image">You lost that one!</p>
      `)
    }
}
