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
const medicalWords = [
    {
        word: "Neuron",
        definition: "A specialized cell that sends and receives nerve signals."
    },
    {
        word: "Synapse",
        definition: "A connection where nerve cells communicate with each other."
    },
    {
        word: "Dopamine",
        definition: "A neurotransmitter involved in movement, motivation and reward."
    },
    {
        word: "Serotonin",
        definition: "A neurotransmitter involved in mood, sleep and other body functions."
    },
    {
        word: "Neuroglia",
        definition: "Cells that support, protect and maintain neurons."
    },
    {
        word: "Cerebellum",
        definition: "A brain region important for balance and coordination."
    },
    {
        word: "Reflex",
        definition: "A rapid, automatic response to a stimulus."
    }
];

const today = new Date();
const start = new Date(today.getFullYear(), 0, 0);
const dayOfYear = Math.floor((today - start) / 86400000);

const word = medicalWords[dayOfYear % medicalWords.length];

document.getElementById("medical-word").textContent = "🧠 " + word.word;
document.getElementById("word-definition").textContent = word.definition;
