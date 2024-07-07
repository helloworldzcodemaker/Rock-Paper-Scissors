let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game was draw play again🙅‍♂️"
    msg.style.backgroundColor="#091b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        // console.log(`You win! ${userChoice} beats ${compChoice}`);
        msg.innerText = `You win😀! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        user_score.innerText=userscore;
        
        
    }
    else {
        // console.log("You lose");
        // console.log(`You win! ${compChoice} beats ${userChoice}`);
        msg.innerText = `You lose😜. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compscore++;
        comp_score.innerText=compscore;
    }
}

const playGame = (userChoice) => {
    // console.log("User choice=", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    // console.log("Comp choice =", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
        // userWin === true ? console.log("You win") : console.log("You lose");
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        // console.log(choice);
        // console.log("User choice=", userChoice);
        // let compChoice = genCompChoice();
        // let result = playGame(userChoice, compChoice);
        // playGame(userChoice, compChoice);
        // console.log("userscore", userscore);
        // console.log("compscore", compscore);
        // console.log(result);
        // let user_score = document.querySelector("#user-score");
        // let comp_score = document.querySelector("#comp-score");
    });
});
