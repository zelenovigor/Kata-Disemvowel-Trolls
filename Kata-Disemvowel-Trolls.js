/**
 * Disemvowel Trolls
 * https://www.codewars.com/kata/52fba66badcd10859f00097e 
 */
// Solution 1
// replace - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace 
// regular expressions RegExp - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
function disemvowel(str) {
  let regularExpression = /[aeiou]/gi;
  console.log("Original string: " + str) 
  str = str.replace(regularExpression, "");
  console.log("After using replace: " + str)
  return str;
}

// // Example using RegExp
// let str = "Hello Hello my name is Niko Pico Lico Ziso";
// let regExp = /hello/gi;
// console.log("Original string: " + str);
// str = str.replace(regExp, "");
// console.log("After replace: " + str);

// // Example using RegExp - understanding what /i does
// let str = "Hello hello my name is Niko Pico Lico Ziso";
// let regExp = /hello/g;
// console.log("Original string: " + str);
// str = str.replace(regExp, "");
// console.log("After replace: " + str);

// // Example using RegExp - understanding what /g does
// let str = "Hello Hello my name is Niko Pico Lico Ziso";
// let regExp = /hello/i;
// console.log("Original string: " + str)
// str = str.replace(regExp, "");
// console.log("After replace: " + str);

// // Example using RegExp - /str/ vs /[str]/
// let str = "Hello Hello my name is Niko Pico Lico Ziso";
// let regExp = /[hlmnskpcz]/gi;
// console.log("Original string: " + str);
// str = str.replace(regExp, "");
// console.log("After replace: " + str);

// Solution 1.2 - one liner
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Solution 1.3 - the Victor 
const disemvowel = str => str.replace(/[aeiou]/gi, "");

// Solution 2
// charAt - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// indexOf - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// toLowercase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
const disemvowel = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = '';
  
  for (let i = 0; i <= str.length; i++) { // interate through the string
    if (vowels.indexOf(str.charAt(i).toLowerCase()) == -1)  // check if the current character exist in the vowels array
      newStr += str.charAt(i);       // if it doesn't exist then add it to the new string
  }
  return newStr;
}

// Solution 3
// split - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// filter - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// includes - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// toLowerCase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// join - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
function disemvowel(str) {
  let vowels = "aeiou";
  let strArr = str.split("");   // turn string into array
  let filterArr = strArr.filter(letter => {
    return !vowels.includes(letter.toLowerCase());  // if the letter is not found in vowels then add it to the filterArr
  });
  let newStr = filterArr.join("")
  
  return newStr;
}

// Solution 3.1 
const disemvowel = str => str.split('').filter(letter => !"aeiou".includes(letter.toLowerCase())).join('');
© 2020 GitHub, Inc.
