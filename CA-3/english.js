

function checkAnswer(answer) {
    const resultElement = document.getElementById('quiz-result');
    
    if (answer === 'A') {
        resultElement.textContent = "Correct! An apple is indeed a fruit.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}