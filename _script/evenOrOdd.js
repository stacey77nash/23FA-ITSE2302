/*
    NAME: Stacey Nash
    COURSE: ITSE 2302 Intermediate Web Programming
    DATE: October 7, 2023
    DESCRIPTION: Complete the .js file using conditional statements, user input, string conversion, logical operators, and determining whether the output is even or odd for Module 3 using Javascript.
*/

// create variables for user input 
var num1 = window.prompt("Enter a number between 1 and 100:");
var num2 = window.prompt("Enter a number between 101 and 200:");

num1 = parseInt(num1);
num2 = parseInt(num2);

// test num1 and num2 to see if they are both integers and within the specified ranges
while ((isNaN(num1)) || (isNaN(num2)) || (num1 < 1 || num1 > 100) || (num2 < 101 || num2 > 200) || (num1 === "" || num2 === "")) {
    alert("Invalid entry");
    alert("Please enter digits within the specified ranges.");
    num1 = window.prompt("Enter a number between 1 and 100:");
    num2 = window.prompt("Enter a number between 101 and 200:");
}
    
alert("Good work! See the console for more details.");
    product = num1 * num2; // product = the result of multiplying two numbers
    parity = product % 2;  // parity definition: (of a number) the fact of being even or odd.

    switch (parity) {
        
        case 0:
        parity == 0; // number divided evenly by 2
        console.log(product + " is an even number.");
        break;
        default: // any remainder means an odd number
        parity != 0;
        console.log(product + " is an odd number.");
        break;
    }
    


    
    
         


 
