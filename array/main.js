// 1. Declare an empty array using JS literal notation to store student names in future.

// var arr = [``];

// 2. Declare an empty array using JS object notation to store student names in future.

// var arr = [""];

// 3. Declare and initialize a strings array.

/*var arr = ["Nehal",  "Moiz" , "Ubaid" , "Anus" , "ALi"] ;
console.log(arr);
*/

// 4. Declare and initialize a numbers array.

/*var arr = [8, 9 , 5 , 4 , 2] ;
console.log(arr);
*/

// 5. Declare and initialize a boolean array.

/*var arr = [false , ture] ;
console.log(arr);
*/

// 6. Declare and initialize a mixed array.

/*var arr = ["Nehal",  ture , "Ubaid" , 87 , "ALi"] ;
console.log(arr);
*/

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser

/*
var degress = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

document.write(`<div> <h1>Qulifications</h1> <ol> 
<li>${degress[0]}</li>
<li>${degress[1]}</li>
<li>${degress[2]}</li>
<li>${degress[3]}</li>
<li>${degress[4]}</li>
<li>${degress[5]}</li>
<li>${degress[6]}</li>
<li>${degress[7]}</li> </div>`);
*/

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

/*
var studentNames = ["Michel", "John", "Tony"];
var studentScores = [230, 320, 480];
var totalMark = 500;
document.write(`<h1>srcore of ${studentNames[0]} is ${
  studentScores[0]
} . Percentage : ${(studentScores[0] / totalMark) * 100}% </h1>
<h1>srcore of ${studentNames[1]} is ${studentScores[1]} . Percentage : ${
  (studentScores[1] / totalMark) * 100
}% </h1>
<h1>srcore of ${studentNames[2]} is ${studentScores[2]} . Percentage : ${
  (studentScores[2] / totalMark) * 100
}% </h1>`);
*/

// 9. Initialize an array with color names. Display the array elements in your browser.

// var colorsName = ["red" , "yellow" , "pink" , "blue"];

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var userInput = prompt("Add a color name you went to add in biggning");
// colorsName.unshift(userInput);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// var userInput = prompt("Add a color name you went to add in end");
// colorsName.push(userInput);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// var userInput = prompt("Add multiple color name you went to add in bigning");
// colorsName.splice(0 ,0 , userInput);

// d. Delete the first color in the array. Display the updated
// array in your browser.

// colorsName.shift();

// e. Delete the last color in the array. Display the updated
// array in your browser.

// colorsName.pop();

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// var userInput = prompt("Add a color name");
// var index = prompt("enter a position you went to color ");
// colorsName.splice(index ,0 , userInput);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then Page 3 of 6
// remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// var index = prompt("enter a position you went to color ");
// var deletedCount = prompt("how many color you went to delete ")
// colorsName.splice(index ,deletedCount);

// document.write(`<div><h1>Colors Names</h1> ${colorsName} </div>`);

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

/*
var cities = ["Karachi" , "Hydrabad" , "UK" , "Lahore"];
document.write(`<h2>Cities list: <br />
${cities[0]}
${cities[1]}
${cities[2]}
${cities[3]}
</h2>`)

var removingElements1 = prompt("Enter starting index number who when to copy ")
var removingElements2 = prompt("Enter ending index number who when to copy ")
var copyArry = cities.slice(removingElements1 , removingElements2);

document.write(`<h2>copy arry : <br /> ${copyArry}</h2>`)
*/

// 12. Write a program to create a single string from the below mentioned array:
/*
var arr = ['this' , 'is' ,'my' , 'cat'];
document.write(`<h2>Arry: <br /> ${arr}</h2>`);
var str = arr.join(' ');
document.write(`<h2>String: <br /> ${str}<h2 />`);
*/

// 13. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.

/*
var phoneManufacturers = ['Apple', 'Samsung', 'Motorola' , 'Nokia' , 'Sony', 'Haier'];
document.write(`<select>
<option selected disabled> phone manufacturers </option>
<option> ${phoneManufacturers[0]} </option>
<option> ${phoneManufacturers[1]} </option>
<option> ${phoneManufacturers[2]} </option>
<option> ${phoneManufacturers[3]} </option>
<option> ${phoneManufacturers[4]} </option>
<option> ${phoneManufacturers[5]} </option>
</select>`)
*/
