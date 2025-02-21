let starsCollected = 0;
const starCountElement = document.getElementById("star-count");
const bunnyElement = document.getElementById("magic-bunny");

const outfits = [
    "outfit1.png", // Replace with actual image paths for outfits
    "outfit2.png",
    "outfit3.png",
    "outfit4.png", // Outfit 4 for the 4th star
];

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
            changeBunnyOutfit();
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

function changeBunnyOutfit() {
    // Only change outfit when all stars are collected
    if (starsCollected === outfits.length) {
        const outfit = outfits[starsCollected - 1]; // Outfit based on stars
        const newOutfit = document.createElement("img");
        newOutfit.src = outfit;
        newOutfit.alt = `Outfit ${starsCollected}`;
        newOutfit.classList.add("bunny-outfit", "active");

        // Append the new outfit to the bunny container
        bunnyElement.parentElement.appendChild(newOutfit);
    }
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

displayNextQuestion();
