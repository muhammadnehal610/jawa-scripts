// • Write a loop to print numbers from 1 to 10.

/*
for(var i = 1 ; i <= 10 ; i++){
  console.log(i)
}
*/

// • Write a loop to print even numbers from 1 to 20.

/*
for(var i = 1 ; i <=20 ; i++){
    if(i%2 == 0){
        console.log(i)
    }
}
*/

// • Write a loop to print odd numbers from 1 to 15

/*
for(var i = 1 ; i <=15 ; i++){
    if(i % 2 != 0){
        console.log(i)
    }
    
}
*/

// • Write a loop to print the multiplication table of a number (let's say 7) up to 10.

/*
var number = prompt("Enter a number to show its multiplication");
console.log(`Multiplication table of ${number}`) 
for(var i = 1 ; i <=10 ; i++ ){
    var result = number * i ;
    console.log(`${number} * ${i} = ${result} \n`);
}
*/

// • Write a loop to print the square of numbers from 1 to 10.

/*
console.log('Sq of number from 1 to 10' )
for(var i = 1 ; i <=10 ; i++){
    console.log( i * i)
}
*/


// • Write a loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).

/*
var intigers = [12 , 21 , 89 , 10 , 302]
var smallestNumber = 0
for(var i = 0 ; i <intigers.length ; i++){
    if(intigers[i] > smallestNumber){
        smallestNumber = intigers[i]
    }
}
console.log(smallestNumber)
*/