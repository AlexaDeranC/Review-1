// ✅ Final Challenge

// 1. Create a calculator function
// Should accept 3 arguments: num1, operator (+, -, *, /), num2

function calculator(num1, operator, num2) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            return 'Error: Cannot divide by zero';
        }
        return num1 / num2;
    } else {
        return 'Invalid operator';
    }
}

console.log(calculator(5, '+', 3))  
console.log(calculator(10, '/', 0))

  
// 2. Loop through object data challenge question 2:

const students = {
  Alice: 90,
  Bob: 82,
  Charlie: 95
};

for (let name in students) {
  console.log(name + ': ' + students[name]);
}


  

  