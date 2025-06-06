const students = [
  { name: "Alice", gender: "Female", age: 20 },
  { name: "Bob", gender: "Male", age: 22 },
  { name: "Charlie", gender: "Male", age: 19 },
  { name: "Diana", gender: "Female", age: 21 },
  { name: "Eve", gender: "Female", age: 23 },
];

console.log(students);

let females = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].gender === "Female") {
    females.push(students[i]);
  }
}

let youngestFemale = null;

for (let i = 0; i < females.length; i++) {
  if (youngestFemale === null || females[i].age < youngestFemale.age) {
    youngestFemale = females[i];
  }
}

console.log(youngestFemale);
