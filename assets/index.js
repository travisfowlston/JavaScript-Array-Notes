// JavaScript Notes
// array = A variable like structure that can hold more than 1 value

let numbers = [2, 1, 3, 9, 10, 7, 6, 8, 4, 5];

// numbers.sort((a, b) => (a - b)); = sorts the array in numerical order
// numbers.sort((a, b) => (b - a)); = sorts the array in reverse numerical order

let fruits = ["apple", "orange", "grape", "pineapple", "cherry", "banana"];

// fruits.sort(); = sorts the array in alphabetical order
// fruits.sort().reverse(); = sorts the array in reverse alphabetical order
// fruits.push("cucumber"); = adds element to the end of the array
// fruits.pop(); = removes last element of the array
// fruits.unshift("cucumber"); = adds element to the beginning of the array
// fruits.shift(); = removes first element of the array
// fruits.length; = gets the total number of elements in the array
// fruits.indexOf("apple"); = finds the index of the element, returns -1 if no index is found

// forEach() = used to iterate over the elements of an array and apply a specified function (callback) to each element.
// array.forEach(callback)
// element, index, array are provided

// map() = accepts a callback and applies it to each element in the array, then returns a new array with the results.

// This is a for loop that prints out each element in the array
/* for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
} */

// This is a function that deletes a fruit from the array using the filter method
/* function deleteFruit(index) {
  fruits = fruits.filter((_, i) => i !== index);
}
deleteFruit(1); */

// This is a function that adds a fruit to the array using the push method
/* function addFruit(fruit) {
  fruits.push(fruit);
} 
addFruit("cucumber");
addFruit("pear");
addFruit("grapefruit"); */

// foreach() method example
/* fruits.forEach(capitalize) // Executes a callback function on each element in the array. Change the callback to the function you want to execute.
fruits.forEach(display); // Displays the elements in the array

function display(element) {
  console.log(element);
}
function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}
function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
} */

// console.log(fruits);
// console.log(numbers);

// This is a conditional statement that checks if the array has greater than or equal to 5 elements
/* if (fruits.length >= 5) {
  console.log("That's a lot of fruit!");
} else {
  console.log("That's not a lot of fruit, perhaps consider getting some more!");
} */
