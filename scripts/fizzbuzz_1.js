//java script for fizzbuzz1 assignment 
//sydney m



function formSubmit() {
  let first_Name = document.getElementById('first_name').value;
  let last_Name = document.getElementById('last_name').value;
  let middle_initial = document.getElementById('middle_initial').value;  

    let count = 140;    
     document.getElementById("greeting").textContent = "Welcome to Syd's Shoe Styles, " + first_Name + " " + middle_initial + ". " + last_Name + "!";
    buzz(count);
  }
  
  function buzz(countLimit) {
    for(let i = 1; i <= countLimit; i++) {

      let fizzList;
      
      if (i % 15 === 0) {
          fizzList = "QuickNFun";
      } else if(i % 3 === 0) { 
        fizzList = "Fun";
      } else if ( i % 5 === 0) {
          fizzList = "Quick";
      } else {
          fizzList = "Quick No Fun";
      }
      
    
    let element_1 = document.createElement('li');
    let text = document.createTextNode(i + ' ' + fizzList);
    element_1.appendChild(text);
    let pos_new = document.getElementsByTagName('ul')[0];
    pos_new.appendChild(element_1);
    
  }
    
} 
