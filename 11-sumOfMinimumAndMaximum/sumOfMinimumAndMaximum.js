function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
let min = Math.min(...nums)
let max = Math.max(...nums)
return (max + min)
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;