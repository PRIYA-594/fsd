/*In command prompt 
-npm init
.....
-npm install prompt-sync
.....
To run the js code 
-node qu6.js
*/

/*Question 6:

Write a JavaScript function to convert an amount to coins. 

Note:

Function Name: amountTocoins(amount, CoinsList)

Input: 46, [25, 10, 5, 2, 1]

Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.

Output : 25, 10, 10, 1
*/

//js code

function coinChange(amount, coi) 
{
    //let coins=coi.split(", ");   
    if (amount === 0) 
    {
      return [];
    } 
    else 
    {
      if (amount >= coins[0]) 
      {
        left = (amount - coins[0]);
        return [coins[0]].concat(coinChange(left, coins));
      } 
      else {
        coins.shift();
        return coinChange(amount, coins);
      }
    }
  }

const prompt = require('prompt-sync')()
a=prompt();
arr=a.split(", [")
arr[1]=arr[1].replace("]","")
console.log(arr[1])
coinChange(arr[0],arr[1])
