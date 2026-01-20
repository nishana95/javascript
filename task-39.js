// 1. Write a program to print only fruits with more than 5 letters using a loop.

// const fruits = ["apple", "banana", "kiwi", "strawberry", "pear", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].length > 5) {
//     console.log(fruits[i]);
//   }
// }
// -----------------------------------------------------------------------
// 2. Write a program to find the name of the youngest employee in an array of objects.
const employees = [
  { name: "John", age: 30 },
  { name: "Alice", age: 24 },
  { name: "Bob", age: 28 },
  { name: "Sarah", age: 22 }
];

// Assume the first employee is the youngest initially
let youngest = employees[0];

// Loop through the array starting from the second element
for (let i = 1; i < employees.length; i++) {
  if (employees[i].age < youngest.age) {
    youngest = employees[i];
  }
}

console.log("The youngest employee is: " + youngest.name);
// -----------------------------------------------------------------------------