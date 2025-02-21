let starsCollected = 0;
const starCountElement = document.getElementById("star-count");
const bunnyElement = document.getElementById("magic-bunny");

const princessOutfit = "princess-outfit.png"; // Path to the princess outfit
const bunnyGif = "bunny-gif.gif"; // Path to bunny gif

const questions = [
    {
        question: "What is my favorite color?",
        correctAnswer: "blue",
        options: ["Blue", "Green", "Red"],
    },
    {
        question: "What is my favorite food?",
        correctAnswer: "pizza",
        options: ["Pizza", "Burger", "Sushi"],
    },
    {
        question: "Where is my favorite place to visit?",
        correctAnswer: "paris",
        options: ["Paris", "New York", "Tokyo"],
    },
    {
        question: "What is my favorite animal?",
        correctAnswer: "panda",
        options: ["Panda", "Lion", "Elephant"],
    },
];

let currentQuestionIndex = 0;

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (answer.toLowerCase() === currentQuestion.correctAnswer) {
        starsCollected++;
        updateStars();

        // Check if all questions have been answered correctly
        if (starsCollected === questions.length) {
            changeBunnyToPrincess();
            alert("Congrats! You've answered all questions correctly and earned all stars!");
        } else {
            alert("Correct! You earned a star!");
        }
    } else {
        alert("Oops! That's not the right answer. Try again!");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayNextQuestion();
    }
}

function updateStars() {
    starCountElement.textContent = starsCollected;
}

function changeBunnyToPrincess() {
    // Hide the bunny and show the princess outfit
    bunnyElement.style.display = 'none';
    const princessOutfitElement = document.createElement("img");
    princessOutfitElement.src = princessOutfit;
    princessOutfitElement.alt = "Princess Outfit";
    princessOutfitElement.classList.add("bunny-princess-outfit");

    // Show the bunny gif after the princess outfit change
    const bunnyGifElement = document.createElement("div");
    bunnyGifElement.classList.add("bunny-gif");

    document.getElementById("game-container").classList.add("end-game");

    // Append the new elements to the container
    document.getElementById("game-container").appendChild(princessOutfitElement);
    document.getElementById("game-container").appendChild(bunnyGifElement);
}

function displayNextQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = ""; // Clear previous buttons

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option.toLowerCase());
        answerButtons.appendChild(button);
    });
}

function restartGame() {
    starsCollected = 0;
    currentQuestionIndex = 0;
    updateStars();
    document.querySelectorAll('.bunny-princess-outfit, .bunny-gif').forEach(outfit => outfit.remove());
    document.getElementById("game-container").classList.remove("end-game");
    bunnyElement.style.display = 'block';
    displayNextQuestion();
}

// Start the game
displayNextQuestion();
