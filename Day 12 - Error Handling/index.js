// Task 1
function add(a, b) {
    return c; // 'c' is not defined, this will throw a ReferenceError
}

try {
    console.log(add(1, 2));
} catch (e) {
    console.error("An error occurred:", e.message); // Log the error message
}

// Task 1 (alternative)
function fun() {
    throw new Error("This is an error");
}

try {
    fun();
}
catch (e) {
    console.error("Error: ", e.message);
}


// Task 2
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(1, 0));
}
catch (e) {
    console.error("Error: ", e.message);
}


// Task 3
function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Invalid Input");
    }
    return a * b;
}

try {
    console.log(multiply(5, 2));
    console.log(multiply('a', 2));
}
catch (e) {
    console.error("Error: ", e.message);
}
finally {
    console.log("This will always be executed");
}


// Task 4
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent Error class constructor with the message
        this.name = "CustomError"; // Set the error name to CustomError
    }
}

function customFunction() {
    throw new CustomError("This is a custom error");
}

try {
    customFunction();
}
catch (e) {
    console.log(e.name);
    console.error("Error: ", e.message);
}


// Task 5
class InvalidInputError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidInputError";
    }
}

function checkInput(a) {
    if (typeof a !== 'number') {
        throw new InvalidInputError("Invalid Input");
    }
    return a;
}

try {
    console.log(checkInput(5));
    console.log(checkInput('a'));
}
catch (e) {
    console.error("Error: ", e.message);
}


// Task 6

const randomPromise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 100);

    setTimeout(() => {
        if (random % 2 === 0) {
            resolve(random);
        }
        else {
            reject(random);
        }
    }, 2000);
});


randomPromise
    .then((message) => {
        console.log("Resolved: ", message);
    })
    .catch((message) => {
        console.error("Rejected: ", message);
    })


// Task 7

const handleFunction = async () => {
    try {
        const result = await randomPromise;
        console.log("Resolved: ", result);
    }
    catch (e) {
        console.error("Rejected: ", e);
    }
}

handleFunction();

// Task 8

const invalidAPIURL = "https://invalid";

fetch(invalidAPIURL)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Fetch error:", error.message);
    });



// Task 9

const fetchData2 = async () => {
    try {
        const response = await fetch(invalidAPIURL);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
};

fetchData2();
