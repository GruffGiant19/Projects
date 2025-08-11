// Some arithmetic operations

let price = 25;
let discount = 0.1;

let newprice = price*discount;

console.log(newprice);


let lotSize = 0.1;
let currentPrice = 158.04;
let riskRatio = 2;

function calculateLotSize(accountBalance, riskPercentage, stopLossPips, pipValue) {
    // Calculate the amount to risk per trade
    let riskAmount = accountBalance * (riskPercentage / 100);

    // Calculate the lot size
    let lotSize = riskAmount / (stopLossPips * pipValue);

    return lotSize;
}

// Example usage
let accountBalance = 10000; // Account balance in your currency
let riskPercentage = 1; // Risk percentage per trade
let stopLossPips = 50; // Stop loss in pips
let pipValue = 10; // Pip value in your currency

let calculatedLotSize = calculateLotSize(accountBalance, riskPercentage, stopLossPips, pipValue);
console.log("Calculated Lot Size:", calculatedLotSize);

let score = 82;

if (score >= 90){
    console.log("A");
} else if(score >= 80
){
    console.log("B");
}else if (score >= 70)
    console.log("C");
else if (score >= 60){
    console.log("D");
}
else {
    console.log("F");
}