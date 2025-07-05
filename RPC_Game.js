let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourscore = document.querySelector("#user-score");
const computerscore = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
        // console.log(`choice was clicked ${userId}`)
    })
})

const compChoice = () => {
    const options = ["rock","paper","scissor"];
    const idx = Math.floor(Math.random()*3);
    return options[idx];

}

const showWinner = (userWin, userChoice , comchoice) =>{
    if(userWin){
        console.log("you win!")
        msg.innerText = `Bingo You Win! ${userChoice} beats ${comchoice}`;
        userscore++;
        yourscore.innerText =userscore;
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose!")
        msg.innerText = `oops You lose! ${comchoice} beats ${userChoice}`;
        compscore++;
        computerscore.innerText = compscore;
        msg.style.backgroundColor = "#175676";
    }
     
}

const playgame = (user) =>{
    console.log(`user choice is ${user}`);
    const comchoice= compChoice();
    console.log(`computer choice is ${comchoice}`); 

    if(user === comchoice){
        console.log("Game was Draw")
        msg.innerText = "It's a Draw Guess Again"
        msg.style.backgroundColor = "#0077b6";
    } 
    else {
        let userWin = true;
        if(user === "rock"){
            //scissors, paper
            userWin = comchoice ==="paper" ? false : true;
        } 
        else if (user === "paper"){
            //rock, scissors
            userWin = comchoice ==="scissor" ? false : true;
        } else {
            // paper, rock
            userWin = comchoice === "rock" ? false : true; 
        }
        showWinner(userWin , user , comchoice);
    }
}