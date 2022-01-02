function titleCaseEdit(title) {
  // Insert code here;

  let separateTitle = title.toLowerCase().split(' ');
   
    for(let i = 0; i < separateTitle.length; i++) 
     {
       separateTitle[i] = separateTitle[i].charAt(0).toUpperCase() + separateTitle[i].substring(1);
     }
   return separateTitle.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;