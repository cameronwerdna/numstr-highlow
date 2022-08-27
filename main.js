//function which takes a string of numbers (separated by spaces) and returns the largest & smallest number, respectively.

function highAndLow(numbers){ 
    let nums = numbers.split(' ')
    return `${Math.max(...nums)} ${Math.min(...nums)}`
  }

console.log(highAndLow('1 2 3 4 5')) // => 5 1
console.log(highAndLow('23 34 345 46 5')) // => 345 5
console.log(highAndLow('4 7 1 0 -1 59')) // => 59 -1