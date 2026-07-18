function startLearning() {
    alert("🚀 Welcome to BTF LEARN!\n\nLet's begin today's study session.");

    let xp = document.getElementById("xp");
    let currentXP = parseInt(xp.innerText);

    currentXP += 10;

    xp.innerText = currentXP;
}
function correctAnswer(){

alert("🎉 Great Job!\n\nYou earned +20 XP!");
}
function checkAnswer(answer){

if(answer==5){

alert("🎉 Correct!\n\n+10 XP");

}else{

alert("❌ Wrong Answer\n\nTry Again");

}

}
