let currentQuestion = 0;
const correctAnswers = ['pink', 'spring', 'rabbit', 'carrot']; // Add correct answers

function startGame() {
    document.querySelector(".landing-container").style.display = "none";
    document.querySelector("#game-section").style.display = "block";
    showQuestion(1);
}

function checkAnswer(questionNumber, selectedAnswer) {
    const feedback = document.querySelector(`#feedback${questionNumber}`);
    const dressImage = document.getElementById("dress-image");

    if (selectedAnswer === correctAnswers[questionNumber - 1]) {
        feedback.textContent = "Yay! You got it right!";
        feedback.style.color = "green";
        // Update the dress image for the next question if correct
        dressImage.src = `../img/game/dress${questionNumber + 1}.png`;
    } else {
        feedback.textContent = `Oops! The correct answer is ${correctAnswers[questionNumber - 1]}.`;
        feedback.style.color = "red";
    }
}

function showQuestion(questionNumber) {
    document.querySelector(`#question${questionNumber}`).style.display = "block";
}

function nextQuestion(questionNumber) {
    if (currentQuestion < 4) {
        currentQuestion++;
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
    currentQuestion = 0;
    document.querySelector(".landing-container").style.display = "block";
    document.querySelector("#end-section").style.display = "none";
    document.querySelector("#game-section").style.display = "none";
}
