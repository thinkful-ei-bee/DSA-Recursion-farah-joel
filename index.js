function countDown(n) {
  if(n === 0) return
  console.log(n)
  countDown(n - 1)
}
//countDown(5)

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
powerCalculator(10, 2)

// 03.) Reverse String
function reverseString() {

}

// 04.) nth Triangular Number
function triangularNumber() {

}

// 05.) String Splitter
function stringSplitter() {

}

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

