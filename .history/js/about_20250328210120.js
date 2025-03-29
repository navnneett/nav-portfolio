let currentQuestion = 1;
const correctAnswers = ['pink', 'spring', 'rabbit', 'carrot'];
const dressImages = [
    "../img/about/dress-default.png", // Default dress
    "../img/about/dress-1.png", // Dress for question 1
    "../img/about/dress-2.png", // Dress for question 2
    "../img/about/dress-3.png", // Dress for question 3
    "../img/about/dress-4.png"  // Dress for question 4
];

let currentDressImage = dressImages[0]; // Default dress image

function startGame() {
    document.querySelector(".game-landing-container").style.display = "none"; // Hide start page
    document.querySelector("#game-section").style.display = "block"; // Show game section
    showQuestion(currentQuestion); // Show first question
    // Set the initial dress image
    document.getElementById("dress-image").src = currentDressImage;
}

function checkAnswer(questionNumber, selectedAnswer) {
    const feedback = document.querySelector(`#feedback${questionNumber}`);
    const dressImage = document.getElementById("dress-image");

    // Show feedback when the answer is clicked
    feedback.style.display = "block"; // Show the feedback message box

    if (selectedAnswer === correctAnswers[questionNumber - 1]) {
        feedback.textContent = "Yay! You got it right!";
        feedback.classList.remove('incorrect-feedback'); // Remove incorrect feedback if any
        feedback.classList.add('correct-feedback'); // Add correct feedback class
        // Update the dress image for the next question (if any)
        currentDressImage = dressImages[questionNumber];  // Update dress image based on the question number
        dressImage.src = currentDressImage;
    } else {
        feedback.textContent = `Oops! The correct answer is ${correctAnswers[questionNumber - 1]}.`;
        feedback.classList.remove('correct-feedback'); // Remove correct feedback if any
        feedback.classList.add('incorrect-feedback'); // Add incorrect feedback class
    }
}

function showQuestion(questionNumber) {
    const currentQuestionElement = document.getElementById(`question${questionNumber}`);
    currentQuestionElement.style.display = "block"; // Show the current question
    // Hide the feedback box before the user selects an answer
    document.querySelector(`#feedback${questionNumber}`).style.display = "none";
}

function nextQuestion(questionNumber) {
    // Hide the current question
    document.querySelector(`#question${questionNumber}`).style.display = "none";
    // Show the next question or finish the game
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

    // Check if all answers are correct
    if (correctAnswersGiven === 4) {
        document.querySelector("#end-message").textContent = "Congratulations! You got all answers correct!";
        document.querySelector("#end-image").src = "../img/game/bunny-prince.png"; // Success Image
    } else {
        document.querySelector("#end-message").textContent = "Oh, maybe she needs more time to dress.";
        document.querySelector("#end-image").src = "../img/game/bunny-sitting.png"; // Failure Image
    }

    // Hide the game section and show the end page
    document.querySelector("#game-section").style.display = "none";
    document.querySelector("#end-section").style.display = "block";
}

// Go back to the start page
function goBack() {
    document.querySelector(".game-landing-container").style.display = "block"; // Show start page
    document.querySelector("#game-section").style.display = "none"; // Hide game section
    document.querySelector("#end-section").style.display = "none"; // Hide end page
    resetGame(); // Reset the game variables
}

// Restart the game and reset the position
function restartGame() {
    document.querySelector("#end-section").style.display = "none"; // Hide end section
    document.querySelector(".game-landing-container").style.display = "block"; // Show start page
    document.querySelector("#game-section").style.display = "none"; // Hide game section

    resetGamePosition(); // Reset the position
    resetGame(); // Reset the game variables
}

// Game Start Page Styling - Making sure the content remains centered
function resetGamePosition() {
    const gameLandingContent = document.querySelector(".game-landing-content");
    gameLandingContent.style.position = "absolute"; // Reset position to absolute
    gameLandingContent.style.top = "50%";  // Center it vertically
    gameLandingContent.style.left = "50%"; // Center it horizontally
    gameLandingContent.style.transform = "translate(-50%, -50%)"; // Ensure it's perfectly centered
}

// Reset game variables
function resetGame() {
    currentQuestion = 1; // Reset question tracker
    document.querySelector("#question1").style.display = "none"; // Hide all question pages
    document.querySelector("#question2").style.display = "none";
    document.querySelector("#question3").style.display = "none";
    document.querySelector("#question4").style.display = "none";
    
    // Reset feedback and images
    document.querySelector("#feedback1").textContent = "";
    document.querySelector("#feedback2").textContent = "";
    document.querySelector("#feedback3").textContent = "";
    document.querySelector("#feedback4").textContent = "";
    document.querySelector("#dress-image").src = dressImages[0]; // Reset to the first dress
    currentDressImage = dressImages[0]; // Reset to initial dress image
}
