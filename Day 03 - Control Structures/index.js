// Task 1
let a = 10;

if (a === 0) {
    console.log("Number is zero");
}
else if (a % 2 === 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}

// Task 2
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}


// Task 3
let num1 = 10, num2 = 30, num3 = 20;
if (num1 > num2 && num1 > num3) {
    console.log("Number 1 is greater");
}
else if (num2 > num1 && num2 > num3) {
    console.log("Number 2 is greater");
}
else {
    console.log("Number 3 is greater");
}


// Task 4
let day = 5;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input");
}


// Task 5
let marks = 77;
switch (true) {
    case (marks >= 90):
        console.log("Grade A");
        break;
    case (marks >= 80):
        console.log("Grade B");
        break;
    case (marks >= 70):
        console.log("Grade C");
        break;
    case (marks >= 60):
        console.log("Grade D");
        break;
    case (marks >= 40):
        console.log("Grade E");
        break;
    default:
        console.log("Grade F");
        break;
}


// Task 6
let n = 5;
console.log(n % 2 === 0 ? "Even" : "Odd");

// Task 7
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}