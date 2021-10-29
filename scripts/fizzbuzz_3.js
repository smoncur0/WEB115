//java script for fizzbuzz3 assignment 
//sydney m



function formSubmit() {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let middleInitial = document.getElementById('middle_initial').value;  
 
     document.getElementById("greeting").textContent = "Welcome to Syd's Shoe Styles, " + firstName + " " + middleInitial + ". " + lastName + "!";
     let divide1 = 3;
     let divide2 = 5;
     let divide3 = 7;
     let count = 140;
     buzz(divide1, divide2, divide3, count);
  }
  function checkDivision(divide1, divide2) {

        
        if (divide1 % divide2 === 0) {
            return true;

        } else {
            return false;
    }   
  }
  function buzz(divide1, divide2, divide3) {
    for(let i = 1; i <= countLimit; i++) {
  
      //creates new element & stores in variable for loop
      let fizzDivision;
      
      if ((i % divide1) % checkDivision === 0) {
          fizzDivision = "Fun";
      
      } else if((i % divide2) % checkDivision === 0) { 
          fizzDivision = "Quick";

      } else ((i % divide3) % checkDivision === 0)  {
          fizzDivision = "BANG!";
      }
      
    
    //creates new element & stores in variable
    let element_1 = document.createElement('li');
    
    //text node variable and components
    let text = document.createTextNode(i + ' ' + fizzDivision);
    
    //text node and new element attach
    element_1.appendChild(text);
    
    //element's postition
    let pos_new = document.getElementsByTagName('ul')[0];
    
    //corrects position
    pos_new.appendChild(element_1);
    
  }
    
} 
