function div(a, b) {
  if (b === 0) {
    return [undefined, "Error: Division by zero"];
  }
  return [a / b, null];
}

let a = 10;
let b = 0;
// let b = 2;

let [result, error] = div(a, b);

if (error) {
  console.error(error);
} else {
  console.log(`Result: ${result}`);
}