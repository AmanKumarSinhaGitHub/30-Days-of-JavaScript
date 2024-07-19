// Task 1
const book = {
    title: "JavaScript",
    author: "Aman",
    price: 500,
    year: 2024
}

console.log(book); // { title: 'JavaScript', author: 'Aman', price: 500, year: 2024 }

// Task 2
console.log(book.title); // JavaScript
console.log(book.author); // Aman


// Task 3
const book2 = {
    title: "Python",
    author: "Aman",
    year: 2024,
    getBookDetails: function () {
        return `${this.title} by ${this.author} in ${this.year}`;
    }
}

console.log(book2.getBookDetails()); // Python by Aman in 2024


// Task 4
const book3 = {
    title: "C++",
    author: "Aman",
    year: 2024,
    updateYear: function (newYear) {
        this.year = newYear;
    }
}

console.log(book3.year); // 2024
book3.updateYear(2025);
console.log(book3.year); // 2024


// Task 5
const library = [
    {
        title: "coding books library",
        books: [
            "JavaScript", "Python", "C++"
        ]
    },
    {
        title: "science books library",
        books: [
            "Physics", "Chemistry", "Maths"
        ]
    }
]

console.log(library); // [ { title: 'coding books library', books: [ 'JavaScript', 'Python', 'C++' ]


// Task 6
for (let i = 0; i < library.length; i++) {
    console.log("Title = ", library[i].title);
    for (let j = 0; j < library[i].books.length; j++) {
        console.log("Book = ", library[i].books[j]);
    }
}

/*
Title =  coding books library
Book =  JavaScript
Book =  Python
Book =  C++
Title =  science books library
Book =  Physics
Book =  Chemistry
Book =  Maths
*/


// Task 7

const libraryTwo = [
    {
        name: "coding books library",
        books: [
            {
                title: "JavaScript",
                year: 2024,
                getBookDetails: function () {
                    return `${this.title} in ${this.year}`;
                }
            },

            {
                title: "Python",
                year: 2024,
                getBookDetails: function () {
                    return `${this.title} in ${this.year}`;
                }
            },

            {
                title: "C++",
                year: 2024,
                getBookDetails: function () {
                    return `${this.title} in ${this.year}`;
                }

            }

        ]
    },
    {
        name: "science books library",
        books: [
            {
                title: "Physics",
                year: 2024,
                getBookDetails: function () {
                    return `${this.title} in ${this.year}`;
                }
            },

            {
                title: "Chemistry",
                year: 2024,
                getBookDetails: function () {
                    return `${this.title} in ${this.year}`;
                }
            },

            {
                title: "Maths",
                year: 2024,
                getBookDetails: function () {
                    return `${this.title} in ${this.year}`;
                }
            }
        ]
    }
]

libraryTwo.forEach(library => {
    library.books.forEach(book => {
        console.log(book.getBookDetails());
    })
});


// Task 8

// Iterate over each library
for (const library of libraryTwo) {
    console.log(`Library Name: ${library.name}`);
    
    // Iterate over each book in the library
    for (const book of library.books) {
        console.log(`Book Details:`);
        
        // Iterate over each property of the book
        for (const property in book) {
            if (book.hasOwnProperty(property)) {
                console.log(`${property}: ${book[property]}`);
            }
        }
        
    }
}


console.log("----------------------------------------------")


// Task 9
// Iterate over each library
for (const library of libraryTwo) {
    
    // Iterate over each book in the library
    for (const book of library.books) {
        
        const keys = Object.keys(book);
        const values = Object.values(book);
        
        console.log("Keys:", keys);
        console.log("Values:", values);
       
    }
}