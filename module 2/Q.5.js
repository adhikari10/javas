let numbers = [];
while (true) {
    let num = prompt("Enter a number (or 0 to exit): ");
    if (num === "0") {
        break;
    } else if (numbers.includes(Number(num))) {
        console.log("The number has already been given.");
        break;
    } else {
        numbers.push(Number(num));
    }
}

numbers.sort((a, b) => a - b);
console.log(numbers);


