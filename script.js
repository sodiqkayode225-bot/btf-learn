const quotes = [
  "Small steps every day lead to big success.",
  "Consistency beats talent when talent is inconsistent.",
  "Learning today builds tomorrow.",
  "Every question you solve makes you stronger.",
  "Success begins with one study session."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").innerText = randomQuote;

function startLearning() {
    alert("🚀 Welcome to BTF LEARN!\n\nToday's mission has begun. Stay focused and earn your XP!");
}
