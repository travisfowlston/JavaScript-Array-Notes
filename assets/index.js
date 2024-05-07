// JavaScript Notes
// array = A variable like structure that can hold more than 1 value

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.sort((a, b) => (b - a)); = sorts the array in reverse numerical order

let fruits = ["apple", "orange", "grape", "pineapple", "cherry", "banana"];

// fruits[0]; = gets the first element of the array
// fruits.sort(); = sorts the array in alphabetical order
// fruits.sort().reverse(); = sorts the array in reverse alphabetical order
// fruits.push("cucumber"); = adds element to the end of the array
// fruits.pop(); = removes last element of the array
// fruits.unshift("cucumber"); = adds element to the beginning of the array
// fruits.shift(); = removes first element of the array
// fruits.length; = gets the total number of elements in the array
// fruits.indexOf("apple"); = finds the index of the element, returns -1 if no index is found

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

console.log(fruits);
console.log(numbers);

// This is a conditional statement that checks if the array has more than 5 elements
/* if (fruits.length >= 5) {
  console.log("That's a lot of fruit!");
} else {
  console.log("That's not a lot of fruit, perhaps consider getting some more!");
} */
