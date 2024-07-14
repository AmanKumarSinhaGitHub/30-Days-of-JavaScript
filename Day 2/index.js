// Task 1
let num1 = 100;
let num2 = 20;

console.log(num1 + num2); // 120

// Task 2
console.log(num1 - num2); // 80


// Task 3
console.log(num1 * num2); // 2000


// Task 4
console.log(num1 / num2); // 5


// Task 5
console.log(num1 % num2); // 0


// Task 6
let n = 10;
let m = n+=5;
console.log(m); // 15


// Task 7
let x = 20;
let y = x-=5;
console.log(y); // 15


// Task 8
let a = 10;
let b = 20
if(a > b){
    console.log("a is greater than b");
}else{
    console.log("b is greater than a");
}
// Output : b is greater than a


// Task 9

let c = 15;
let d = 10;

console.log(c >= d); // true
console.log(c <= d); // false


// Task 10
let e = 10;
let f = '10';
console.log(e == f); // true
console.log(e === f); // false


// Task 11
let age = 20;
let haveDrivingLicense = true;

if(age >= 18 && haveDrivingLicense){
    console.log("You can drive");
}
else{
    console.log("You can't drive");
}
// Output : You can drive


// Task 12
age = 20;
haveDrivingLicense = false;
if(age >= 18 || haveDrivingLicense){
    console.log("You can drive");
}
else{
    console.log("You can't drive");
}
// Output: You can drive


// Task 13
let isRaining = true;
console.log(!isRaining); // false


// Task 14
let number = 10;
let isEven = number%2 == 0 ? true : false;
console.log(isEven); // true


