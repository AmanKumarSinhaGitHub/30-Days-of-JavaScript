// Task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2 
for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5 * i}`);
}

// Task 3
let i = 1, sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);


// Task 4
let num = 10;
while (num > 0) {
    console.log(num);
    num--;
}

// Task 5
num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);


// Task 6
num = 5;
let fact = 1;
do {
    fact *= num;
    num--;
} while (num > 0);
console.log(fact);


// Task 7
for(let i=1; i<=5; i++){
    let str = "";
    for(let j=1; j<=i; j++){
        str += "* ";
    }
    console.log(str);
}

// Task 8
for(let i=1; i<=10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

// Task 9
for (let i=1; i<=10; i++){
    if(i===7){
        break;
    }
    console.log(i);
}