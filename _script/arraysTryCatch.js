// NAME: Stacey Nash
// COURSE: ITSE 2302 Intermediate Web Programming
// DATE: October 19, 2023
// DESCRIPTION: Complete the .js file using arrays and error handling with try/catch/throw/finally for Module 4 using Javascript.

// https://jshint.com/ 

//Create an array called siteTopics that contains five values of the same data type.  These values should correlate to your website’s subject matter.
var siteTopics = ["calico", "furry", "whiskers", "purr", "paws"];
console.log(siteTopics);
// Create an array called dayNames that contains the names of each day of the week in order, starting with “Monday”.
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(dayNames);
// Create a variable that contains your first name.
var fName = "Stacey";
console.log(fName);
// Create a variable to hold the year you were born. (This is not a string)
var birthYr = 1970;
console.log(birthYr);

// Utilize the arrays you created above and write the following code. Don't use any slice/find methods

// Use an array method to add an additional value to the end of the siteTopics array.  This additional value should also correlate to your website’s subject matter.
siteTopics.push("kitty");
console.log(siteTopics);

// Using concatenation and the appropriate array property, display the following text to the browser’s console: “The length of the siteTopics array is 6”
console.log("The length of the siteTpoics array is " + siteTopics.length);

// Display each value of the siteTopics array in the browser’s console.  Use a while loop to complete this task.
var i = 0;
// each iteration prints an index of the array
while(i < siteTopics.length){
    console.log(siteTopics[i]);
    i++;
}

// Reverse the dayNames array using the reverse method.
dayNames.reverse();

// Print out the dayNames to the console using a for loop.
for(var d = 0; d < dayNames.length; d++){
    console.log(dayNames[d]);
}
// Remove the first item in the dayNames array using an appropriate array method.
dayNames.shift(); // removes the first item in the array
console.log(dayNames);

// Create a try/catch block that includes an if condition to check if the first value of the dayNames array is equal to “Sunday”. If the condition is true, throw a string to the catch block that says "Error: Sunday should be missing!"  The catch block should display any thrown messages/strings in the browser's console.
try{
    if(dayNames[0] == "Sunday"){
        throw "Error: Sunday should be missing!"; // change the logic operator to test this
    }
}catch(error){
    console.log(error);
}

// Add a finally block to the try/catch that displays the following text in the browser’s console: "(Use the variable with your name) was born in the year (use the variable with your birth year).  I think the day was either a (second value of the dayNames array) or (fourth value of the dayNames array)."

finally {
    console.log(fName + " was born in the year " + birthYr + ".  I think the day was either a " + dayNames[1] + " or " + dayNames[3] + "."); // dayNames array is still reversed 
}
