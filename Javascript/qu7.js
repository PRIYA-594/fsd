/*In command prompt 
-npm init
.....
-npm install prompt-sync
.....
To run the js code 
-node qu7.js
*/

/*Question 7:

Write a JavaScript function to split a string and convert it into an array of
words.

Function Name: string_to_array(stringName)

Input: "Robin Singh"



Output: ["Robin", "Singh"]*/

//js code

function string_to_array(stringName)
{
    arr=stringName.split(" ")
    console.log(arr);
}
const prompt = require('prompt-sync')()
str = prompt()
string_to_array(str)
