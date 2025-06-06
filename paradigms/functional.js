const students = [
  { name: "Alice", gender: "Female", age: 20 },
  { name: "Bob", gender: "Male", age: 22 },
  { name: "Charlie", gender: "Male", age: 19 },
  { name: "Diana", gender: "Female", age: 21 },
  { name: "Eve", gender: "Female", age: 23 },
];

const youngestFemale = students
  .filter((student) => student.gender === "Female")
  .reduce((youngest, current) =>
    current.age < youngest.age ? current : youngest
  );

console.log(youngestFemale);
