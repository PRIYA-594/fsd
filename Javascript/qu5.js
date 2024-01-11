/*In command prompt 
-npm init
.....
-npm install prompt-sync
.....
To run the js code 
-node qu5.js
*/

/*
Question 5:

Write a JavaScript function that generates all combinations of a string.

Input : 'dog'



Output : d,do,dog,o,og,g
*/

//code
const prompt=require('prompt-sync')()
a=prompt()
let comb = new Set();
for(i=0;i<a.length;i++)
{
    for(j=0;j<a.length;j++)
    {
        comb.add(a.substr(i,j+1));
    }
}
arr=[]
for(str of comb)
{
    arr.push(str);
}
console.log(arr.join(","))
