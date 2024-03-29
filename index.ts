#!/usr/bin/env node 
import inquirer from "inquirer";

console.log("Welcome to Simple Command Line ATM");
console.log("PIN number = 1234")

let balance : number = 200000;
const pin : number = 1234;

const askForPin = await inquirer.prompt(
  {
    name : "pinAsk",
    type : "number",
    message : "Enter your PIN number"
  }
)

if (askForPin.pinAsk===pin){
  console.log("Successfully accessed");
  const Options = await inquirer.prompt(
    {
      name : "options",
      type : "list",
      message : "Select your desired option from the following:",
      choices : ["Balance","Withdraw"]
    }
  )
  if (Options.options==="Balance"){
    console.log(`Your  current balance is ${balance} Rupees`)
  }
  else if (Options.options==="Withdraw"){
    const withdrawOptions = await inquirer.prompt([
      {name : "options",
      type : "list",
      message : "Select amount to Withdraw",
      choices : [1000,2000,5000,10000,"Other Amount"]
      }
    ])
    if (withdrawOptions.options==="Other Amount"){
      const otherAmount = await inquirer.prompt({
        name : "options",
        type : "number",
        message : "Enter amount : "
      }
      );
      if (otherAmount.options>balance){
        console.log("Insufficient Amount Entered")
      }
      else{
      balance-=otherAmount.options;
      console.log(`You have successfully withdraw ${otherAmount.options} Rupees`)
      console.log(`Now your current balance is ${balance} Rupees`);
      }
    }
    else{
      balance-=withdrawOptions.options;
      console.log(`You have successfully withdraw ${withdrawOptions.options} Rupees`)
      console.log(`Now your current balance is ${balance} Rupees`);
    }
  } 

}
else{
  console.log("Incorrect PIN number")
};