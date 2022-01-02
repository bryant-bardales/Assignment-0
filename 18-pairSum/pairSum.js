function pairSum(nums, target) {
  // Insert code here;

let e = new Error("Error")

if(nums.length <= 1){
throw e
}

for(var i = 0; i < nums.length; i++){

for(var j = 0; j < nums.length; j++){

if(i !== j){

if(nums[i] + nums[j] == target){

return true;
}
}
}
} 

return false;
}

// Do not edit this line;
module.exports = pairSum;