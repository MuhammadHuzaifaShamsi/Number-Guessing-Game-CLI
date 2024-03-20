#! /usr/bin/env node
import inquirer from "inquirer";
async function startGame() {
    while (true) {
        const randomNumber = Math.floor(Math.random() * 10);
        let answer = await inquirer.prompt([
            {
                name: "guess",
                type: "number",
                message: "Make Your Guess between 1-10:"
            }
        ]);
        const userGuess = answer.guess;
        if (userGuess == randomNumber) {
            console.log("Congrats! You Gessed Right!! \nYou WIN :) ");
            break;
        }
        else {
            console.log("Better Luck Next Time.");
        }
    }
}
startGame();
