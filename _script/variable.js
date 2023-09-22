/* NAME: Stacey Nash
    COURSE: ITSE 2302 Intermediate Web Programming
    DATE: Sept 13, 2023
    DESCRIPTION: M1 L2.2 JavaScript Variables and Data Activity practice assisgnment
 */

// In this practice assignment, you will be writing your first custom JavaScript code.  Create a simple HTML file called index.html and create an external JavaScript script called variables.js. Make sure you link to the variables.js file in your HTML code. Using JavaScript, create the following variables using camel casing: (Make up your own variable names that have a meaningful appearance)

// A string variable that stores the following sentence: The Web Design and Development Department at Texas State Technical College prepares students to design and develop responsive websites for Texas businesses and non-profits.
var wddGoal = "The Web Design and Development Department at Texas State Technical College prepares students to design and develop responsive websites for Texas businesses and non-profits.";
// A string variable that stores the greeting: Hello world!
var firstGreeting = "Hello world!";
// A string variable that stores your first name.
var firstName = "Stacey";
// A string variable that stores your last name.
var lastName = "Nash";
// A string that stores the string "     Hello World!      " (Take note of the 5 spaces between the double quotes  and the content)
var spacedGreeting = "     Hello World!     ";
// A string with a list of Iris Johansen's books from her Eve Duncan series: "The Face Of Deception, The Killing Game, The Search, Body Of Lies, Blind Alley, Countdown, Stalemate, Quicksand, Blood Game, Eight Days To Live, Chasing The Night, Eve, Quinn, Bonnie, Sleep No More, Taking Eve, Hunting Eve, Silencing Eve, Shadow Play, Hide Away, Night And Day, Mind Game, Shattered Mirror, Vendetta, Dark Tribute, Smokescreen"
var eveDuncanSeries = "The Face Of Deception, The Killing Game, The Search, Body Of Lies, Blind Alley, Countdown, Stalemate, Quicksand, Blood Game, Eight Days To Live, Chasing The Night, Eve, Quinn, Bonnie, Sleep No More, Taking Eve, Hunting Eve, Silencing Eve, Shadow Play, Hide Away, Night And Day, Mind Game, Shattered Mirror, Vendetta, Dark Tribute, Smokescreen";
// A string that stores the string "10"
var ten = "10";
// A variable that contains the boolean value true.
var isTrue = true;
// A number that stores the number 10
var numTen = 10; 
// A number that stores the number 8.2567
var salesTax = 8.2567;
// Using the variables created above, follow the instructions below: (Make sure you are creating the code in Visual Studio Code. The output from the code will be printed to the browser console window. You can find this in the browser developer tools)

// Find the length of one of the variables that contain a sentence. Console output ex: The variable "whatever your available is called" that contains a sentence is 46.
console.log(spacedGreeting.length);
// Print one of the variables that contain a sentence to all upper case.
console.log(wddGoal.toUpperCase());
// Using any 8 variables, print out their typeOf variable to the console. (Hint: Data types in Javascript video)
console.log(typeof wddGoal);
console.log(typeof firstGreeting);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof spacedGreeting);
console.log(typeof eveDuncanSeries);
console.log(typeof numTen);
console.log(typeof salesTax);
// Using concatenation, print to the console your first name and last name.
console.log(firstName + " " + lastName);
// Using Iris Johansen's books variable, print to the console using the lower case method.
console.log(eveDuncanSeries.toLowerCase());
