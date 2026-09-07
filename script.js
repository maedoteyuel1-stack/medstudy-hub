function welcomeMessage() {
    alert("Welcome to MedStudy Hub! 🧠📚🚀");
}

function checkAnswer(button, correct) {
    const result = document.getElementById("challenge-result");

    if (!result) return;

    if (correct) {
        result.textContent =
            "🎉 Correct! The cerebellum helps control balance and coordination.";
    } else {
        result.textContent = "❌ Not quite! Try again.";
    }
}


/* MEDICAL WORD OF THE DAY */

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
        definition: "Cells that support and protect neurons."
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

function showMedicalWord() {
    const medicalWord = document.getElementById("medical-word");
    const wordDefinition = document.getElementById("word-definition");

    if (!medicalWord || !wordDefinition) return;

    const dayOfYear = Math.floor(
        (new Date() - new Date(new Date().getFullYear(), 0, 0)) /
        86400000
    );

    const word = medicalWords[dayOfYear % medicalWords.length];

    medicalWord.textContent = "🧠 " + word.word;
    wordDefinition.textContent = word.definition;
}


/* IDEA GENERATOR */

const ideas = [
    "Build a website that helps students study medicine 🧠",
    "Create a quiz about the human brain 🔬",
    "Build a study planner for students 📚",
    "Create an app that teaches medical vocabulary 🩺",
    "Start a small student business 🚀",
    "Create a website about neuroscience 🧠",
    "Build a flashcard tool for medical students 🎓",
    "Create a platform where students can share study notes 💡"
];

function generateIdea() {
    const ideaText = document.getElementById("idea-text");

    if (!ideaText) return;

    const randomIndex = Math.floor(Math.random() * ideas.length);

    ideaText.textContent = "💡 " + ideas[randomIndex];
}


/* START AFTER PAGE LOADS */

document.addEventListener("DOMContentLoaded", function () {
    showMedicalWord();
});
