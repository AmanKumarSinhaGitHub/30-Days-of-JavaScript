// Note : To use modules, first we need to create a pachage.json file 
// by running "npm init -y" command in the terminal.
// Then we need to add "type": "module" in the package.json file. 
// Then we can use modules in our project.
// To Run : node "c:\Users\amankumar\OneDrive\Desktop\30 Days of JavaScript\Day 13 - Modules\index.js"


// Task 1
import { add } from "./mathModule.js";
console.log(add(10, 20)); // 30


// Task 2
import { person } from './personModule.js';

let personName = person.name;
console.log(personName); // Aman
person.greet(); // Hello, My name is Aman


// Task 3
import { sum, subtract, multiply, divide } from "./math2Module.js";

console.log(sum(10, 20)); // 30
console.log(subtract(20, 10)); // 10
console.log(multiply(10, 20)); // 200
console.log(divide(20, 10)); // 2

// Task 4
import addThreeNumbers from "./addThreeNumberModule.js";
console.log(addThreeNumbers(10, 20, 30));


// Task 5
import * as math from "./utilModule.js";
console.log(math.PI); // 3.14159
console.log(math.add(10, 20)); // 30
console.log(math.subtract(20, 10)); // 10


// Task 6
// https://www.npmjs.com/package/lodash
// Run this : npm install lodash
import _ from 'lodash';

console.log(`Random No = ${_.random(10, 20)}`); // Random number between 10 and 20


// Task 7
// npm install axios
// https://www.npmjs.com/package/axios

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

