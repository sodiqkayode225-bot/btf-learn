function startLearning() {
    alert("🚀 Welcome to BTF LEARN!\n\nLet's begin today's study session.");

    let xp = document.getElementById("xp");
    let currentXP = parseInt(xp.innerText);

    currentXP += 10;

    xp.innerText = currentXP;
}
