function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
let set = new Set()
  
for(let i = 0; i < args.length; i++){

for(let j of args[i]){

set.add(j)
}
   
}

return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;