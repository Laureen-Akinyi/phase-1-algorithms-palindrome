function isPalindrome(word) {
  // Write your algorithm here
 let palindromeWord = word.split("").reverse().join("")
 if (word == palindromeWord){
   return true
 } else{
   return false
  }
}

/* 
  Add your pseudocode here
  The function takes one argument
  If the argument passed return true 
  
  else return false
*/

/*
  Add written explanation of your solution here
  I declared a variable, palindromeWord which splits reverses and joins the word passed back to one word
  If the word matches it returns true
  else retuens false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
