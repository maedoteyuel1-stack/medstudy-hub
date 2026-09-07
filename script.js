script.js
function welcomeMessage() {
    alert("Welcome to MedStudy Hub! 🧠📚🚀");
}

function checkAnswer(button, correct) {
    const result = document.getElementById("challenge-result");

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


/* IDEA GENERATOR */

const ideas = [
    "Create a study app for students.",
    "Build a website that helps students organize homework.",
    "Create a medical flashcard platform.",
    "Design an app that teaches basic anatomy.",
    "Create a small tutoring business.",
    "Build a website where students share study tips.",
    "Create a revision planner for exams.",
    "Build a platform that connects students with useful learning resources.",
    "Create a business that turns recycled materials into useful products.",
    "Design a simple app that helps students track their goals."
];


function generateIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const ideaText = document.getElementById("idea-text");

    if (ideaText) {
        ideaText.textContent = "💡 " + ideas[randomIndex];
    }
}


/* RUN AFTER THE PAGE LOADS */

document.addEventListener("DOMContentLoaded", function () {

    const medicalWord = document.getElementById("medical-word");
    const wordDefinition = document.getElementById("word-definition");

    if (medicalWord && wordDefinition) {

        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const dayOfYear = Math.floor(
            (today - start) / 86400000
        );

        const word =
            medicalWords[dayOfYear % medicalWords.length];

        medicalWord.textContent = "🧠 " + word.word;
        wordDefinition.textContent = word.definition;
    }

});
