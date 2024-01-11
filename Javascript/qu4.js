/*In command prompt 
-npm init
.....
-npm install prompt-sync
.....
To run the js code 
-node qu4.js
*/
/*Question 4:



Write a JavaScript function that reverses a number. 

Input : 32243



Output : 34223
*/

//code

const prompt = require('prompt-sync')();
a = prompt()
arr=a.split("")
arr.reverse()
console.log(arr.join(""))
