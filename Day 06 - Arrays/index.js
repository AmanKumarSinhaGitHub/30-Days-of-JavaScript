// Task 1
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ] 

// Task 2
let firstElement = arr[0];
console.log(firstElement); // 1

// Task 3
arr.push(6);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

// Task 4
arr.pop();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// Task 5
arr.shift(0);
console.log(arr); // [ 2, 3, 4, 5 ]

// Task 6
arr.unshift(1);
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// Task 7
const double = arr.map((element) => {
    return element * 2;
})
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(double); // [ 2, 4, 6, 8, 10 ]

// Task 8
const even = arr.filter((element) => {
    return element % 2 === 0;
})
console.log(even); // [ 2, 4 ]

// Task 9
const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 15

// Task 10
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Task 11
arr.forEach((element) => {
    console.log(element);
})

// Task 12
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// method 1
for (let i = 0; i < matrix.length; i++) {
    let str = "";
    for (let j = 0; j < matrix[i].length; j++) {
        str += matrix[i][j] + " ";
    }
    console.log(str);
}

// method 2
matrix.forEach((row) => {
    let str = "";
    row.forEach((element) => {
        str += element + " ";
    })
    console.log(str);
})

// Task 13
console.log(matrix[1][2]); // 6