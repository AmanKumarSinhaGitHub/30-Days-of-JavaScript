// Task 1
function isEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    }
    else {
        console.log(`${num} is odd`);
    }
}

isEven(5);


// Task 2
function square(num) {
    return num * num;
}

console.log(square(5));


// Task 3
const max = function (a, b) {
    return a > b ? a : b;
}

console.log(max(5, 10));


// Task 4
const concatenate = function (str1, str2) {
    return str1 + str2;
}

console.log(concatenate("Hello", "World"));

// Task 5
const sum = (num1, num2) => num1 + num2;

console.log(sum(2, 3));

// Task 6
const haveChar = (str, char) => {
    return str.includes(char);
}

console.log(haveChar("Hello", "e"));

// Task 7
const multiply = (a, b = 5) => {
    return a * b;
}

console.log(multiply(2));
console.log(multiply(3, 5));

// Task 8
const greeting = (name, age = 10) => {
    return `Hello ${name}, you are ${age} years old`;
}

console.log(greeting("Rohan"));

// Task 9
const callFunc = (func, num) => {
    while (num--) {
        func();
    }
}

const printHello = () => {
    console.log("Hello");
}

callFunc(printHello, 5);


// Task 10
const callHigherOrderFunc2 = (func1, func2, value) => {
    const result = func1(value);
    func2(result);
};

const func1 = (value) => {
    return value + 10; 
};

const func2 = (func1Value) => {
    console.log("Result after applying both functions:", func1Value);
};

callHigherOrderFunc2(func1, func2, 5); 