// Task 1
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`Hello, my name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }
}


const rohan = new Person("Rohan", 25);
rohan.greeting();


// Task 2
class Person2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    changeAge(newAge){
        this.age = newAge;
    }

    getAge(){
        console.log(`Age is ${this.age}`);
    }
}

const sohan = new Person2("Sohan", 30);
sohan.getAge(); // 30

sohan.changeAge(35);
sohan.getAge(); // 35


// Task 3

class Student extends Person{
    constructor(name, age, studentID){
        super(name, age);
        this.studentID = studentID;
    }

    getStudentID(){
        return this.studentID;
    }
}


const karn = new Student("Karn", 20, 1234);
karn.greeting();
console.log(karn.getStudentID()); // 1234


// Task 4


class Student2 extends Person{
    constructor(name, age, studentID){
        super(name, age);
        this.studentID = studentID;
    }

    // overriding the greeting method
    greeting(){
        console.log(`Hello, my name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
        console.log(`My student ID is ${this.studentID}`);
    }
}

let ram = new Student2("Ram", 22, 1234);
ram.greeting(); 

// Task 5
class Person3{

    static greeting(){
        console.log("Hello, I am a static method");
    }
}

Person3.greeting()


// Task 6

class Student3 {

    static totalStudent = 0;

    constructor(name, roll){
        this.name = name;
        this.roll = roll;
        Student3.totalStudent++;
    }

    

}

let aman = new Student3("Aman", 101);
console.log(Student3.totalStudent); // 1

let amit = new Student3("Amit", 102);
console.log(Student3.totalStudent); // 2


// Task 7

class Person4 {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}


let mohan = new Person4("Mohan", "Kumar");
mohan.fullName;


// Task 8

class Person5{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

}


let rahul = new Person5("Rahul", "Kumar");
rahul.fullName; // Rahul Kumar
rahul.fullName = "Rahul Singh";
rahul.fullName; // Rahul Singh


// Task 9

class Account {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}, Balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log(`Insufficient funds. Balance: ${this.#balance}`);
        } else {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}, Balance: ${this.#balance}`);
        }
    }
}

// Task 10
const account = new Account();
account.deposit(100); // Deposited: 100, Balance: 100
account.withdraw(50); // Withdrawn: 50, Balance: 50
account.withdraw(70); // Insufficient funds. Balance: 50


