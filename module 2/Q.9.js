"use strict"
function even(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

let numbers = [2, 7, 4];
let evenNumbers = even(numbers);

console.log(`Array: ${numbers}`);
console.log(`Even numbers: ${evenNumbers}`);
