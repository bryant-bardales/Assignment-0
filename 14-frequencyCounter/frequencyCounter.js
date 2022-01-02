function frequencyCounter(word) {
  // Insert code here;
let ct = {}

for(let i = 0; i < word.length; i++){

if(ct[word[i]] != null){
ct[word[i]]++
}

else{
ct[word[i]] = 1
}

}

return ct
}

// Do not edit this line;
module.exports = frequencyCounter;