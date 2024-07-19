# Day 7: Objects

Tasks/Activities:

### Activity 1: Object Creation and Access

- Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

- Task 2: Access and log the title and author properties of the book object.

### Activity 2: Object Methods

- Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

- Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

### Activity 3: Nested Objects

- Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

- Task 6: Access and log the name of the library and the titles of all the books in the library.

### Activity 4: The `this` Keyword

- Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

### Activity 5: Object Iteration

- Task 8: Use a `for... in` loop to iterate over the properties of the book object and log each property and its value.

- Task 9: Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object.

### Feature Request:

1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.

3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using `for... in` loop and `Object.keys/Object.values`.

### Achievement:

By the end of these activities, students will:

- Create and manipulate objects with properties and methods.

- Understand and use the `this` keyword in object methods.

- Work with nested objects and arrays of objects.

- Iterate over an object's properties using loops and built-in methods.

## Notes on Object Iteration

### `for...in` Loop

- The `for...in` loop goes through all the properties of an object, including properties inherited from its prototype.
- It is useful for looping over the properties of an object to access both keys (property names) and values.
- Example:
  ```javascript
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  ```
  In this example, `key` is the property name, and `obj[key]` is the property value. `hasOwnProperty` ensures that only the object's own properties are logged, not inherited ones.

### `for...of` Loop

- The `for...of` loop is designed for iterating over iterable objects like arrays, strings, maps, and sets. It doesn't work directly on plain objects.
- It is useful for looping through values in these iterable collections.
- Example:
  ```javascript
  const arr = [1, 2, 3];
  for (const value of arr) {
    console.log(value);
  }
  ```
  Here, `value` takes on each item in the array `arr`, one at a time, and logs it.

### `Object.keys` and `Object.values`

- `Object.keys(obj)` returns an array of the object's own property names (keys).
- `Object.values(obj)` returns an array of the object's own property values.
- These methods are useful for getting all the keys or values of an object to loop through them.
- Example:

  ```javascript
  const obj = {
    name: "Alice",
    age: 25,
    city: "Wonderland",
  };

  const keys = Object.keys(obj); // ["name", "age", "city"]
  const values = Object.values(obj); // ["Alice", 25, "Wonderland"]

  console.log("Keys:", keys);
  console.log("Values:", values);
  ```

  In this example, `keys` contains all the property names of `obj`, and `values` contains all the property values of `obj`. We can then log these arrays to see the keys and values.
