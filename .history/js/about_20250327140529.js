let currentQuestion = 1;
const correctAnswers = ['pink', 'spring', 'rabbit', 'carrot'];

function startGame() {
    document.querySelector(".game-landing-container").style.display = "none";
    document.querySelector("#game-section").style.display = "block";
    showQuestion(currentQuestion);
}

function checkAnswer(questionNumber, selectedAnswer) {
    const feedback = document.querySelector(`#feedback${questionNumber}`);
    const dressImage = document.getElementById("dress-image");

    if (selectedAnswer === correctAnswers[questionNumber - 1]) {
        feedback.textContent = "Yay! You got it right!";
        feedback.style.color = "green";
        dressImage.src = `../img/game/dress${questionNumber + 1}.png`;  // Update the dress image for the next question
    } else {
        feedback.textContent = `Oops! The correct answer is ${correctAnswers[questionNumber - 1]}.`;
        feedback.style.color = "red";
    }
}

function showQuestion(questionNumber) {
    const currentQuestionElement = document.getElementById(`question${questionNumber}`);
    currentQuestionElement.style.display = "block";
}

// Function to show the next question
function nextQuestion(questionNumber) {
    // Hide the current question
    document.querySelector(`#question${questionNumber}`).style.display = "none";
    // Show the next question
    if (questionNumber < 4) {
        document.querySelector(`#question${questionNumber + 1}`).style.display = "block";
    } else {
        finishGame();
    }
}


function finishGame() {
    const correctAnswersGiven = correctAnswers.filter((answer, index) => {
        return document.querySelector(`#feedback${index + 1}`).textContent.includes("Yay");
    }).length;

    if (correctAnswersGiven === 4) {
        document.querySelector("#end-message").textContent = "Congratulations! You got all answers correct!";
        document.querySelector("#end-image").src = "../img/game/bunny-prince.png"; // Success Image
    } else {
        document.querySelector("#end-message").textContent = "Oh, maybe she needs more time to dress.";
        document.querySelector("#end-image").src = "../img/game/bunny-sitting.png"; // Failure Image
    }

    document.querySelector("#game-section").style.display = "none";
    document.querySelector("#end-section").style.display = "block";
}

// Function to handle going back to the start page
function goBack() {
    document.querySelector(".game-landing-container").style.display = "block"; // Show the start page
    document.querySelector("#game-section").style.display = "none"; // Hide the game section
    document.querySelector("#end-section").style.display = "none"; // Hide the end section
    resetGame(); // Reset the game variables if necessary (optional)
}

// Reset game to initial state
function resetGame() {
    currentQuestion = 1;
    // Hide all questions
    document.querySelector("#question1").style.display = "none";
    document.querySelector("#question2").style.display = "none";
    document.querySelector("#question3").style.display = "none";
    document.querySelector("#question4").style.display = "none";
}
