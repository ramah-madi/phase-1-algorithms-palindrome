function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("")
  return reversedWord === word
  
}

/* 
  Add your pseudocode here
   if the reversed word equal the original word
    return true
  else 
    return false

*/

/*
  Add written explanation of your solution here
  1. the palindrome word could be read from left to write and vice versa
     so when the word is reversed, it should equal the original word.

  2. then compare the reversed with the original if they are the same then return true 
     otherwise return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");
}

module.exports = isPalindrome;
