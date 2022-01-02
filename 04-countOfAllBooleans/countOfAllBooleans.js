function countOfAllBooleans(arr) {
  // Insert code here;
let ct = 0

for(i = 0; i<=arr.length; i++){

if(arr[i] === true || arr[i] === false){
ct++
}
else{
}
}
return ct
}

// Do not edit this line;
module.exports = countOfAllBooleans;