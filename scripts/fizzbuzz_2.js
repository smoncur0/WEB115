//java script for fizzbuzz2 assignment 
//sydney m


//uses information entered by user to make the form function
function formSubmit() {
  let first_Name = document.getElementById('first_name').value;
  let last_Name = document.getElementById('last_name').value;
  let middle_initial = document.getElementById('middle_initial').value;  

   document.getElementById("greeting").textContent = "Welcome to Syd's Shoe Styles, " + first_Name + " " + middle_initial + ". " + last_Name + "!";
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
  
   
      let fizzDivision;
   //conditions for loop to run   
      if (i % div1 === 0) {
          fizzDivision = "Fun";
      
      } else if(i % div2 === 0) { 
          fizzDivision = "Quick";

      } else {
          fizzDivision = "Quick No Fun";
      }
      
    
 //helps the page run within a list
    var element_1 = document.createElement('li');
  
    var text = document.createTextNode(i + ' ' + fizzDivision);
    
 
    element_1.appendChild(text);
    
  
    var pos_new = document.getElementsByTagName('ul')[0];
    

    pos_new.appendChild(element_1);
    
  }
    
} 
