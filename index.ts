#! /usr/bin/env node 
import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance: number = 10000;
let myPinCode: number = 12345;

// Print welcome message
console.log("welcome");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code: ",
    },
]);

if (pinAnswer.pin === myPinCode) {
    console.log("Pin is correct, Login Successfully! ");
    console.log(`Current Account Balance: ${myBalance}`);

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Enter your operation: ",
            choices: [
                "Check Amount",
                "withdraw Amount",
            ],
        },
    ]);

    if (operationAns.operation === "withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount: ",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance ");
        } else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaining balance is ${myBalance}`);
        }
    } else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is ${myBalance}`);
    }
} else {
    console.log("Incorrect Pin, Try Again");
}