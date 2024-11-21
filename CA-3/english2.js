

function checkAnswer(answer) {
    const resultElement = document.getElementById('quiz-result');
    
    if (answer === 'A') {
        resultElement.textContent = "Correct! A cat is indeed an animal.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}