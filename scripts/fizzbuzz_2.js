//java script for fizzbuzz2 assignment 
//sydney m



function formSubmit() {
    let first = document.getElementById('first').value;
    let last = document.getElementById('last').value;
    let middle = document.getElementById('middle').value;  
 
     document.getElementById("greeting").textContent = "Welcome to Syd's Shoe Styles, " + first + " " + middle + ". " + last + "!";
     let div1 = 3;
     let div2 = 5;
     let count = 140;
     buzz(div1, div2, count);
  }
  function checkDivision(div1, div2) {

        
        if (div1 % div2 === 0) {
            return true;

        } else {
            return false;
    }   
  }
  function buzz(div1, div2, countLimit) {
    for(let i = 1; i <= countLimit; i++) {
  
      //creates new element & stores in variable for loop
      var fizzDivision;
      
      if (i % div1 === 0) {
          fizzDivision = "Fun";
      
      } else if(i % div2 === 0) { 
          fizzDivision = "Quick";

      } else {
          fizzDivision = "Quick No Fun";
      }
      
    
    //creates new element & stores in variable
    var element_1 = document.createElement('li');
    
    //text node variable and components
    var text = document.createTextNode(i + ' ' + fizzDivision);
    
    //text node and new element attach
    element_1.appendChild(text);
    
    //element's postition
    var pos_new = document.getElementsByTagName('ul')[0];
    
    //changes position
    pos_new.appendChild(element_1);
    
  }
    
} 
