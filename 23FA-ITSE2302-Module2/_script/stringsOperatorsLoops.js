/* NAME: Stacey Nash
   COURSE: ITSE-2302 - Intermediate Web Programming
   DATE: 1 October 2023
   DESCRIPTION: This program demonstrates strings, operators, and loops in Javascript to satisfy Module 2 mastery assessment. 
*/

var family = "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
var relatives = "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
var summer = "This summer they plan on traveling to El Paso to visit as many family members as possible.";

// Use whichever method you prefer to extract the numerical values from the first sentence and store them in three separate variables.
// extract numerical values from var family and store into three separate variables
// Regular expression can be used to extract all three numbers at once: (/\d+/g)
// use .match (https://www.w3schools.com/jsref/jsref_match.asp)

// extract the numerical values from the first sentence
var famOne = family.match("5");
var famTwo = family.match("4");
var famThree = family.match("1");

console.log(famOne, famTwo, famThree);

var relOne = relatives.match("6");
var relTwo = relatives.match("2");
var relThree = relatives.match("100");

console.log(relOne, relTwo, relThree);

// Using the variable that is storing the value “100”, extract the values “10” and “0”
var relFour = relatives.slice(96, 98); // extract '10'
var relFive = relatives.slice(98); // extract '0'

console.log(relFour, relFive);

// parseInt(var) converts strings to integers
var famOne = parseInt(famOne); // 5
var famTwo = parseInt(famTwo); // 4
var famThree = parseInt(famThree); // 1
var relOne = parseInt(relOne); // 6
var relTwo = parseInt(relTwo); // 2
var relThree = parseInt(relThree); // 100
var relFour = parseInt(relFour); // 10
var relFive = parseInt(relFive); // 0 

console.log(famOne, famTwo, famThree, relOne, relTwo, relThree, relFour, relFive);
// With the variables that are storing 5, 4, 1, 6, 2, and 10, add the variables ... store in sumTotal
var sumTotal = famOne + famTwo + famThree + relOne + relTwo + relFour; // total = 28

console.log("The variable sumTotal is storing " + sumTotal);

// extract the string “San Antonio” from second sentence; store new string into new var
var city = relatives.substring(41, 52);
console.log(city);

//alter the third sentence variable
summer2 = summer.replace("El Paso", city);
console.log(summer2);

var cars = famThree;
while( cars <= relFour) {
   console.log("I saw " + cars + " cars on my trip");
   cars++; // must be placed here to avoid infinite loop
}

