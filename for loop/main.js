// 3. Write a program to print numeric counting from 1 to 10.

/*
for (var i = 1 ; i <=10 ; i++){
    console.log(i);
}
*/

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

/*
var number = prompt("Enter a number to show its multiplication");
var tableLength = prompt("Enter length multiplication table");
console.log(`Multiplication table of ${number}`) 
console.log(`Length ${tableLength}`) 
for(var i = 1 ; i <=tableLength ; i++ ){
    var result = number * i ;
    console.log(`${number} * ${i} = ${result} \n`);
}
*/

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

/*
var fruits = ["apple ", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}
for (var i = 0; i <= fruits.length; i++) {
  console.log(`Element at index ${i} is ${fruits[i]}`);
}
*/

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

/*
document.write(` <h2>Counting</h2>`);
for (var i = 1; i <= 15; i++) {
  document.write(` ${i},`);
}

document.write(` <h2>Reverse Counting</h2>`);
for (var i = 10; i >= 1; i--) {
  document.write(` ${i},`);
}

document.write(` <h2>Even</h2>`);
for (var i = 0; i <= 10; i++) {
  document.write(` ${i * 2},`);
}

document.write(` <h2>Odd</h2>`);
for (var i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    document.write(`${i},`);
  }
}

document.write(` <h2>Serise</h2>`);
for (var i = 1; i <= 10; i++) {
  document.write(` ${i * 2}k,`);
}
*/

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.

/*
var A = ["cake", "apple pie", "cookie", "chips", "atties"];
var userInput = prompt("Welcome to ABC bakery how went to give sir ");
var isFound = true;
for (var i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    document.write(`${A[i]} is <b> Avalable </b> at index ${i} in our bakary`);
    isFound = false;
  }
}
if (isFound === true) {
  document.write(
    `We are sorry . ${userInput} is <b>Not Avalable</b> in our bakary`
  );
}
*/

// 10. Write a program to print multiples of 5 ranging 1 to 100.

/*
for(var i = 1 ; i <=20 ; i++){
  document.write(`${i*5},`)
}
*/

