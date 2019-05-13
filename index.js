// Some examples from lecture included here. Scroll down and look for 
// the numbers for the assignment

function countDown(n) {
  if(n === 0) return
  console.log(n)
  countDown(n - 1)
}
//countDown(5)

const upperStr = function(str){
  if (str === "") {
    return "";
}
  const newChar = str[0].toUpperCase();

  // Concatenate new data with reduced string for next iteration...
  return newChar + upperStr(str.slice(1)); 
}
//console.log(upperStr('hello'));

function arrayDoubler(arr) {
  if(!arr.length) {
    return []
  }
  return [arr[0] * 2, ...arrayDoubler(arr.slice(1))]
}
//console.log(arrayDoubler([1, 2, 3]))

const isValid = function(str, open=0) {
  if (str.length === 0) {
      return open === 0;
  }
  if (open < 0) {
      return false;
  }
  const char = str.charAt(0);
  if (char === '(') {
      open++;
  }
  if (char === ')') {
      open--;
  }
  return isValid(str.slice(1), open);
};
//console.log(isValid('(((()))))'));

const filter = function(arr, predicate){
  //base case
  if (!arr.length){
      return [];
  }
  if (predicate(arr[0])) {
      return [arr[0], ...filter(arr.slice(1), predicate)];
  }
  return filter(arr.slice(1), predicate);
};
// let arr = [10,5,6,3,8];
// console.log(filter(arr, x => x < 7));

//input: 5 output: 101
// base case
//  input <= 0
//    return ''
// take the input
// input % 2 -> 0's and 1's
// hold the 0s 1s + recursiveCall(input / 2 -> reduce the input)
function binaryRep(input) {
  if(input <= 0) {
    return ''
  }
  let binary = Math.floor(input % 2);
  return binaryRep(Math.floor(input / 2)) + binary;
}
//console.log(binaryRep(25))

// 01.) Counting Sheep
function countingSheep(number) {
  if(number === 0) return
  console.log(`${number}: Another sheep jump over the fence`)
  countingSheep(number - 1)
}
//countingSheep(3)

// 02.) Power Calculator
function powerCalculator(base, exponent) {
  if(exponent <= 0) {
    console.log('exponent should be >= 0')
    return
  }
  if(exponent === 1) {
    return
  }
  let raised = base * base
  console.log(raised)
  powerCalculator(raised, exponent - 1)
}
//powerCalculator(10, 2)

// 03.) Reverse String
function reverseString(str) {
  if (str === "") {
    return "";
  }
  else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
//console.log(reverseString('hello'))

// 04.) nth Triangular Number
function triangularNumber(n) {
  if(n <= 1) {
    return n;
  } 
  else {
    return n + triangularNumber(n - 1)
  }
}
//console.log(triangularNumber(3));

// 05.) String Splitter
// if string length 0 return
// if first character is '/' get rid of it
// 
// function stringSplitter(string, index) {
//   if(string === '') {
//     return '';
//   }
//   if(string.charAt(index) === '/') {
//     stringSplitter(string.substr(index))
//   }
//   index++;
//   return stringSplitter(string, index);
// }
function stringSplitter(string, delimeter) {
  let index = string.search(delimeter);
  if(index === -1) {
    return string
  }
  let newString = string.substr(0, index);
  let restOfString = string.substr(index + delimeter.length, string.length);
  return newString + stringSplitter(restOfString, delimeter);
}
console.log(stringSplitter('02/20/2020', '/'));

// 06.) Fibonacci
function fibonacci() {

}

// 07.) Factorial
function factorial() {

}

// 08.) Find a way out of the maze
function maze() {

}

// 09.) Find ALL the ways out of the maze
function mazeAll() {

}

// 10.) Anagrams
function anagrams() {

}

// 11.) Organization Chart
function organizationChart() {

}

// 12.) Binary Representation
function binaryRepresentation() {

}

