// Task 1
const name = "Aman", age = 21;
const details = `Name = ${name}, Age = ${age}`;
console.log(details); // Name = Aman, Age = 21


// Task 2
const multiLineString = `This is a multi-line string.
It spans across multiple lines,
and it's easy to read and write using template literals.`;

console.log(multiLineString);

// Task 3
const arr = [10, 20, 30, 40, 50];
const [first, second] = arr;
console.log(first); // 10
console.log(second); // 20

// Task 4
const book = { title: "JS", author: "Aman" };
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`); // Title: JS, Author: Aman

// Task 5
const n = [10, 20, 30, 40, 50];
const m = [...n, 60, 70, 80];
console.log(m); // [10, 20, 30, 40, 50, 60, 70, 80]


// Task 6
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
console.log(sum(5)); // Output: 5
console.log(sum()); // Output: 0


// Task 7
const add = (a, b = 1) => {
    return a + b;
}

console.log(add(4, 5)); // Output: 9
console.log(add(4)); // Output: 5


// Task 8
const fullName = "Aman Kumar Sinha";
const langauage = "JS";

const person = {
    fullName,
    langauage,
    greet() {
        console.log(`Hello, my name is ${this.fullName} and I am ${this.langauage} developer.`);
    }
};

console.log(person);
person.greet();


// Task 9

const propName1 = "firstName";
const propName2 = "lastName";

const person2 = {
    [propName1]: "Aman",
    [propName2]: "Sinha",
};

console.log(person2);


