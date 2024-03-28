import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin : ",
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("your pin is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: [
                "deposit",
                "withdraw",
                "check your balance"
            ]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountANS = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountANS.amount > mybalance) {
            console.log("Insufficient balance");
        }
        else {
            mybalance -= amountANS.amount;
            console.log("your remaining balance is " + mybalance);
        }
    }
}
else {
    console.log("your pin is incorrect");
}
