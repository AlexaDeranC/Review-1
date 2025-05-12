
// ✅ Warm-Up Questions

// 1. Write a loop that counts down from 10 to 1.
for (let i = 10; i >= 1; i--){
    console.log(i)
}

// 2. Create a function that takes a string and returns the string reversed.
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"))

// 3. Write a function that checks if a number is even or odd.
function isEvenOrOdd(num) {
      if ( num % 2 === 0){
        return "Even";
    }
}
console.log(isEvenOrOdd(4))



// 4. Use a loop to sum all numbers from 1 to 100.
let sum = 0;
for (let i =1; i <= 100; i++){
    sum += i;
}


// 5. Create an array of 5 favorite foods and log each one to the console.
const favFoods = [ "Pizza", "Tacos", "Pickles", "Pasta", "Ramen"]
favFoods.forEach(food => {
    console.log(food)
})


// Bonus: Write a function that returns true if a string is a palindrome.
function isPalindrome(str){
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');  
     return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("Racecar"))