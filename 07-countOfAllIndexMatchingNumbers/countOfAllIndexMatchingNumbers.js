function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
let ct = 0

for(let i = 0; i <= nums.length; i++){
if(nums[i] === i){
ct++
}
else{
}
}
return ct
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;