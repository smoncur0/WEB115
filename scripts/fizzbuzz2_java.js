//java script for fizzbuzz2 assignment 
//sydney m



function formSubmit() {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let middleInitial = document.getElementById('middle_initial').value;  
 
     document.getElementById("greeting").textContent = "Welcome to Syd's Shoe Styles, " + firstName + " " + middleInitial + ". " + lastName + "!";
     let firstDivisor = 3;
     let secondDivisor = 5;
     let count = 140;
     buzz(firstDivisor, secondDivisor);
  }
  function checkDivision(firstDivisor, secondDivisor) {

        
        if (firstDivisor % secondDivisor === 0) {
            return true;

        } else {
            return false;
    }   
  }
  function buzz(firstDivisor, secondDivisor, countLimit) {
    for(let i = 1; i <= countLimit; i++) {
  
      //creates new element & stores in variable for loop
      var fizzDivision;
      
      if (i % firstDivisor === 0) {
          fizzDivision = "Fun";
      
      } else if(i % secondDivisor === 0) { 
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
    
    //corrects position
    pos_new.appendChild(element_1);
    
  }
    
} 
