//write a condition to check greatest numbers among 3 numbers
//let a = 20
//let b = 30
//let c = 40

// Using if Conditions
let a = 20;
let b = 30;
let c = 40;

if (a > b && a > c) {
    console.log("The greatest number is a:", a);
} else if (b > a && b > c) {
    console.log("The greatest number is b:", b);
} else if (c > a && c > b) {
    console.log("The greatest number is c:", c);
} else {
    console.log("There is a tie among the numbers.");
}

// Using switch Case
let greatest;

if (a > b && a > c) {
    greatest = "a";
} else if (b > a && b > c) {
    greatest = "b";
} else if (c > a && c > b) {
    greatest = "c";
} else {
    greatest = "tie";
}

switch (greatest) {
    case "a":
        console.log("The greatest number is a:", a);
        break;
    case "b":
        console.log("The greatest number is b:", b);
        break;
    case "c":
        console.log("The greatest number is c:", c);
        break;
    case "tie":
        console.log("There is a tie among the numbers.");
        break;
    default:
        console.log("Invalid input.");
}
