let numbers = [];
let input = prompt("Enter a number (or 0 to exit):");

while (input !== "0") {
    numbers.push(Number(input));
    input = prompt("Enter a number (or 0 to exit):");
}

numbers.sort((a, b) => b - a);

console.log(numbers);
