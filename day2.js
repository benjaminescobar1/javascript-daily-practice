// Day 6 - Build Coding Logic
// File: day2.js
// Topic: Conditional Statements and Problem Solving

{

let balance = 1000;
let withdrawal = 300;
let remainingBalance = (balance - withdrawal);

if (balance >= withdrawal) {
    console.log('Withdrawal is allowed');
    console.log('Remaining balance: ' + remainingBalance);
} else {
    console.log('Insufficient funds');
}

}

// Second Exercise
{

let accountBalance = 1000;
let depositAmount = 500;

if (depositAmount <= 0){
    console.log("Invalid deposit");
} else { 
    let newBalance = (accountBalance += depositAmount);
    console.log(newBalance);
}

}

// Third Exercise
{ // add this to beginning and end to reuse values

let balance = 400;
let withdrawal = 500;
let withdrawalLimit = 500;

if ((balance >= withdrawal) && (withdrawal <= withdrawalLimit)) {
    console.log("Withdrawal approved");
} else {
    console.log("Withdrawal denied");
}

} // add this to beginning and end to reuse values

// Fourth Exercise 

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Day off");
}

let isPremiumMember = false;
let orderTotal = 75;

if (isPremiumMember || orderTotal >= 50) {
    console.log("Free Shipping");
} else {
    console.log("Shipping fee required");
}