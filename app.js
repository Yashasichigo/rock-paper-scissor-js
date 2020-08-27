let userScore = 0;
let compScore = 0;
const scoreBoard_div = document.querySelector(".score-board");
const userScore_div = document.getElementById("user-score");
const computerScore_div = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const actionMsg_p = document.getElementById("action-message");

function getComputerChoice() {
    let choices = ["r","p","s"];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissor";
}

function winningMsg(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);  // userChoice can be r,p,s so depending on what we click the green border apperars if user win
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    userScore ++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!!!`;
    userChoice_div.classList.add("green_glow");
    setTimeout(() => userChoice_div.classList.remove("green_glow"), 300);
}

function loosingMsg(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);  // userChoice can be r,p,s so depending on what we click the red border apperars if user loose
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    compScore ++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = compScore;
    compScore = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} does not beat ${convertToWord(computerChoice)}${smallCompWord}. You loose.`
    userChoice_div.classList.add("red_glow");
    setTimeout(() => userChoice_div.classList.remove("red_glow"), 300);
}

function drawMsg(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);  // userChoice can be r,p,s so depending on what we click the grey border apperars if itsa draw
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} is same as ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`
    userChoice_div.classList.add("grey_glow");
    setTimeout(() => userChoice_div.classList.remove("grey_glow"), 300);
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            winningMsg(userChoice, computerChoice);
            break;
    }

    switch (userChoice + computerChoice) {
        case "sr":
        case "rp":
        case "ps":
            loosingMsg(userChoice, computerChoice);
            break;
    }

    switch (userChoice + computerChoice) {
        case "rr":
        case "pp":
        case "ss":
            drawMsg(userChoice, computerChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener("click", function() {
        game("r");
    })

    paper_div.addEventListener("click", function() {
        game("p");
    })

    scissor_div.addEventListener("click", function() {
        game("s");
    })
}

main()