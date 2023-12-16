alert("Hi and welcome to this exciting game of rock-paper-scissors. Relive your childhood 😁")
let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const resetbtn=document.querySelector("#Reset");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    // console.log("game is draw");
    msg.innerText="Game was draw!"
    msg.style.backgroundColor="black";
    msg.style.color="white "
}
const showWinner=(userWin,userId,compChoice)=>{
    if(userWin){
        // console.log("u win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! your ${userId} beats ${compChoice}`
        msg.style.backgroundColor="yellowgreen";
        msg.style.color="black"
    }
    else{
        // console.log("u loose")
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! computer's ${compChoice} beats your ${userId}`
        msg.style.backgroundColor="orangered";
        msg.style.color="white"
    }
}
const playGame=(userId)=>{
    // console.log("user choice is",userId);
    const compChoice=genCompChoice();
    // console.log("comp choice is",compChoice);
    if(userId===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userId==="rock"){
            userWin=compChoice==="paper"? false:true;
        }
        else if(userId==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userId,compChoice);
    }
}
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userId=choice.getAttribute("id");
        // console.log("choice was clicked",userId);
        playGame(userId);
    });
});
resetbtn.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userScorePara.innerText=0;
    compScorePara.innerText=0;
    msg.innerText="Play your move"
    msg.style.backgroundColor="black";
    msg.style.color="white "
})