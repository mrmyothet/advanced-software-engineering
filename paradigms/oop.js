const students = [
  { name: "Alice", gender: "Female", age: 20 },
  { name: "Bob", gender: "Male", age: 22 },
  { name: "Charlie", gender: "Male", age: 19 },
  { name: "Diana", gender: "Female", age: 21 },
  { name: "Eve", gender: "Female", age: 23 },
];

class StudentProcessor {
  constructor(students) {
    this.students = students;
  }

  findFemales() {
    return this.students.filter((student) => student.gender === "Female");
  }

  findYoungest(students) {
    return students.reduce((youngest, current) =>
      current.age < youngest.age ? current : youngest
    );
  }

  findYoungestFemale() {
    const females = this.findFemales();
    return this.findYoungest(females);
  }
}

const processor = new StudentProcessor(students);
const youngestFemale = processor.findYoungestFemale();
console.log(youngestFemale);
