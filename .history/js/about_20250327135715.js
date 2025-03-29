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

function nextQuestion(questionNumber) {
    document.getElementById(`question${questionNumber}`).style.display = "none"; // Hide current question
    currentQuestion++; // Increment to the next question
    if (currentQuestion <= 4) {
        showQuestion(currentQuestion);
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

function resetGame() {
    currentQuestion = 1;
    document.querySelector(".landing-container").style.display = "block";
    document.querySelector("#end-section").style.display = "none";
    document.querySelector("#game-section").style.display = "none";
}
