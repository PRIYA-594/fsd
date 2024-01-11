/*In command prompt 
-npm init
.....
-npm install prompt-sync
.....
To run the js code 
-node qu2.js
*/

/*Question 2:

Design a Program to read a list of integers and rotate the elements by 'n'
positions

Example:

Input:

5

1 12 43 5 6

3

Output:

5 6 1 12 43
*/

//js code

const prompt = require('prompt-sync')();
n = prompt("Enter the size of the array ");
list = prompt("Enter the array ");
pos=prompt("Enter the rotate index ");
arr=list.split(" ");
for(i=pos;i<n;i++)
{
    console.log(arr[i]);
}
for(i=0;i<pos;i++)
{
    console.log(arr[i]);
}
