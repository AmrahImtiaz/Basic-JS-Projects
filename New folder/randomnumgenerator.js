
function randomnumgame(){
const min_num = 1;
const max_num = 100;
const computerchoice = Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;
let attempts = 0;
let running = true;

while(running==true){
    val =  window.prompt("Please enter your num : ");
    guess= Number(val)

    if (guess==computerchoice){
        alert("Congrats! You got it right! It took you " + attempts + " attempts");
        running = false;
    }
    else if(guess>computerchoice){ //guess to high 
    alert("Your guess is too high, Try again");
    attempts++;
    }
    else{ //guess to low
    alert("Your guess is too low, Try again");

    }
}
}


