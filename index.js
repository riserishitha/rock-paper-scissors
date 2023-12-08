var you = document.querySelector(".firstplayer");
var comp = document.querySelector(".secondplayer");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let arr = ['rock', 'paper', 'scissors'];

let among;
rock.onclick = () => {
    you.src = "./assets/rock-hand.png";
    among = "rock";
    start();
}

paper.onclick = () => {
    you.src = "./assets/paper-hand.png";
    among = "paper";
    start();
}

scissors.onclick = () => {
    you.src = "./assets/scissors-hand.png";
    among = "scissors";
    start();
};
let youstart = 0;
let computerstart = 0;
function start() {
    let comppoints = arr[Math.floor(Math.random() * 3)];
    comp.src = `./assets/${comppoints}-hand.png`;

    if (among == comppoints) {
        // Do nothing for a tie
    } else if (among == "rock" && comppoints == "scissors" || among == "scissors" && comppoints == "paper" || among == "paper" && comppoints == "rock") {
        youstart++;
        document.getElementById("me").innerText = youstart;
    } else {
        computerstart++;
        document.querySelector(".machine").innerText = computerstart;
    }
    loopstop(youstart, computerstart);
}
function loopstop(youstart, computerstart) {
    if (computerstart == 5 || youstart == 5) {
        document.getElementById("output").style.display = "flex";
        document.querySelector(".button").style.display = "block";

        if (computerstart > youstart) {
            document.querySelector("#play").innerHTML = "COMPUTER WON!";
        } else {
            document.querySelector("#play").innerHTML = "YOU WON THE GAME!!";
        }
    }
}
document.querySelector("button").addEventListener("click",function(){
    window.location.href="./index.html"
});




