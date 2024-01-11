/*In command prompt 
-npm init
.....
-npm install prompt-sync
.....
To run the js code 
-node qu3.js
*/

/*Question 3:

Design a Program to read a list of integers and print the numbers with an even
number of digits.

Example:

Input:

5

1 123 72 94 6

Output:

72 94*/

//js code
const prompt = require('prompt-sync')();
n = prompt();
list=prompt();
arr=list.split(" ");
for(i=0;i<n;i++)
{
    if(arr[i].length%2===0)
    {
        console.log(arr[i])
    }
}
