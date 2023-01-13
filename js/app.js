const computerCD = document.getElementById('computerCD');
const userCD = document.getElementById('userC');
const resultD = document.getElementById('result');
const possibleC = document.querySelectorAll('button');
let userC;
let computerC;
/*
possibleC.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
     userC = e.target.id
 userCD.innerHTML = userC
 generateCC()
 getResult()
}))
*/
function getuserCscissors(){
     userC = "scissors";
     userCD.src = 'img/scissors-icon.png';
     generateCC();
     getResult();
}
function getuserCpaper(){
     userC = "paper";
     userCD.src = 'img/paper-icon.png';
     generateCC();
     getResult();
}
function getuserCrock(){
     userC = "rock";
     generateCC();
     getResult();
     userCD.src = 'img/spock-icon.png';
}


function generateCC(){
     const randomNumber = Math.floor(Math.random() * 3 + 1) // or you can use possibleC.length
     if (randomNumber === 1) {
          computerCC = 'img/spock-icon.png';
          computerC = "rock";
     }
     if (randomNumber === 2) {
          computerCC = 'img/scissors-icon.png';
          computerC = "scissors";

     }
     if (randomNumber === 3) {
          computerCC = 'img/paper-icon.png';
          computerC = "paper";
     }
     computerCD.src = computerCC;
 }

 function getResult() {
     if (computerC == userC) {
          resultD.src = 'img/draw.png';
     }
     if (computerC == 'rock' && userC == 'paper') {
          resultD.src = 'img/win.png';
     }
     if (computerC == 'rock' && userC == 'scissors') {
          resultD.src = 'img/lose.png';
     }
     if (computerC == 'paper' && userC == 'scissors') {
          resultD.src = 'img/win.png';
     }
     if (computerC == 'paper' && userC == 'rock') {
          resultD.src = 'img/lose.png';
     }
     if (computerC == 'scissors' && userC == 'rock') {
          resultD.src = 'img/win.png';
     }
     if (computerC == 'scissors' && userC == 'paper') {
          resultD.src = 'img/lose.png';
     }
 }
 console.log(computerC);
 console.log(userC);