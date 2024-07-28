// Task 1
function func1() {
    let name = "Aman";
    return function func2() {
        console.log(name);
    }
}

const innerFunc = func1(); // func1() will return func2
innerFunc();


// Task 2

function counter() {
    let count = 0;

    // return an object with two methods
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    }

}

const count = counter();
count.increment();
count.increment();
console.log(count.getCount()); // 2


// Task 3
function generateID() {

    let lastID = 0;

    return function () {
        lastID++;
        return lastID;
    };
}

const id = generateID();
console.log(id()); // 1
console.log(id()); // 2


// Task 4
function greet(username) {
    return function () {
        console.log(`Hello ${username}`);
    }
}

const greetUser = greet("Aman");
greetUser(); // Hello Aman


// Task 5
function createFunctionArray() {
    let functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push(function () {
            console.log(i);
        });
    }

    return functions;
}

const funcArray = createFunctionArray();
funcArray.forEach((func) => {
    func();
});


// Task 6

function manageItems() {
    let items = [];

    return {
        addItem: function (item) {
            items.push(item);
        },
        removeItem: function (item) {
            items = items.filter((i) => i !== item);
        },
        getItems: function () {
            return items;
        }
    }
}

const manager = manageItems();

manager.addItem("item1");
manager.addItem("item2");
manager.removeItem("item2");
let items = manager.getItems();

console.log(items); // ["item1"]


// Task 7
function memoizeAddition(add) {
    const cache = {};

    return function (a, b) {
        const key = `${a},${b}`;

        if (cache[key]) {
            return cache[key];
        }

        const result = add(a, b);
        cache[key] = result;

        return result;
    };
}

// Example usage
function add(a, b) {
    return a + b;
}

const memoizedAdd = memoizeAddition(add);

console.log(memoizedAdd(3, 4)); // Computes and returns 7
console.log(memoizedAdd(3, 4)); // Returns cached result 7
console.log(memoizedAdd(4, 5)); // Computes and returns 9




// Task 8
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Logs: 120
console.log(memoizedFactorial(5)); // Logs: 120 (retrieved from cache)
