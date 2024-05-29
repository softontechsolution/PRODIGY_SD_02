// NUMBER GUESSING GAME

const miniNum = 1;
const maxiNum = 100;

const ansNum = Math.floor(Math.random() * (maxiNum - miniNum + 1)) + miniNum;

let attemptNum = 0;
let guess;
let running = true;

while (running){

    guess = window.prompt(`Guess a number between ${miniNum} - ${maxiNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if( guess < miniNum || guess > maxiNum){
        window.alert("Number is out of range! Enter a number within Range!");
    }
    else{
        attemptNum ++;
        if(guess < ansNum){
            window.alert("OOPS! TOO LOW, TRY AGAIN!");
        }
        else if(guess > ansNum){
            window.alert("OOPS! TOO HIGH, TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT! THE ANSWER WAS ${ansNum}. It took you ${attemptNum} attempts`);
            running = false;
        }
    }
}