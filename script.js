/**
 * Created by meljohndelbarrio on 28/06/17.
 */
//Create a secret number

var secretNumber = 4;
//Ask user for guess

var guess = prompt("Guess a number");

//Check if guess is correct

if (Number(guess) === secretNumber)
{
    alert("You guessed the number right");
}
else if (Number(guess) > secretNumber)
{
 alert("Too high");

}else
{
    alert("Too low");
}
