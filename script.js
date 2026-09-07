script.js
function welcomeMessage() {
    alert("Welcome to MedStudy Hub! 🧠📚🚀");
}
function checkAnswer(button, correct) {
    const result = document.getElementById("challenge-result");

    if (correct) {
        result.textContent = "🎉 Correct! The cerebellum helps control balance and coordination.";
    } else {
        result.textContent = "❌ Not quite! Try again.";
    }
}
