// Task 1

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120 : 5X4X3X2X1
console.log(factorial(3)); // 6 : 3X2X1


// Task 2


