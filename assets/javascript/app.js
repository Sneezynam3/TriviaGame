var start = document.getElementById("start");

var quiz = document.getElementById("quiz");

var qImg = document.getElementById("questionImage");

var question =  document.getElementById("counter");

var counter = document.getElementById("timeGauge");

var timeGauge = document.getElementById("timeGauge");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");

var progress = document.getElementById("progress");

var scoreContainer = document.getElementById("scoreContainer");

let questions = [
    { 
        question: "What does HTML stand for?",
        choiceA : "Hop Skip For Land",
        choiceB : "Hyper Text Mark-up Language",
        choiceC : "Happy To Make Language",
        correct : "B"
    },
    {
        question: "What does CSS stand for?",
        choiceA : "Cascading Style Sheet",
        choiceB : "Common Simple Style",
        choiceC : "Computer Singular Sheet",
        correct : "A"
    },
    {
        question: "What is the proper syntax for a function?",
        choiceA : "function name (parameter1, parameter2) {}",
        choiceB : "faster [array] function parameters",
        choiceC : "{} name (parameter11, parameter)",
        correct : "A"
    },
    {
        question: "What does a while loop do?",
        choiceA : "Loops though the properties of an object.",
        choiceB : "Loops through the the values of an iterable object.",
        choiceC : "Loops through a block of code while a specified condition is true.",
        correct : "C"

    },
    {
        question: "What does a for/in loop do?",
        choiceA : "Loops through a block of code while a specified condition is true",
        choiceB : "Loops through the properties of an object",
        choiceC : "Loops through the values of an iterable object",
        correct : "B"

    },
    {
        question: "What does the pop method do?",
        choiceA : "Adds the front of an array",
        choiceB : "Removes the last element of an object",
        choiceC : "Removes the last element of an array",
        correct : "C"

    };
    {
        question: "What does the splice method do?",
        choiceA : "Used to delete items from an object",
        choiceB : "Used to delete items from an array",
        choiceC : "Used to add new items to an array",
        correct : "C"
    }


]