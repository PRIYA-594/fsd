/*In command prompt 
-npm init
.....
-npm install prompt-sync
.....
To run the js code 
-node qu1.js
*/

/*Question 1:

Design a Program to check whether the given strings are anagrams of each other
or not

Example:

Input:

silent

listen

Output:

Anagram*/
var prompt = require('prompt-sync')();
a=prompt("Enter String 1 ");
b=prompt("Enter String 2 ");
arr = a.split(''); brr=b.split(''); arr.sort(); brr.sort(); 
f=0;
for(i=0,j=0;i<arr.length&&j<brr.length;i++,j++)
{
    if(arr[i]===brr[i])
    {
        f=1
    }
    else{
        f=0
        break
    }
}
if(f===1)
{ 
    console.log("Anagram");
}
else{ 
    console.log("NOt Anagram");
}
