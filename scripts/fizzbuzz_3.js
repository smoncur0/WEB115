//java script for fizzbuzz3 assignment 
//sydney m



function formSubmit() {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let middleInitial = document.getElementById('middle_initial').value;  
 
     document.getElementById("greeting").textContent = "Welcome to Syd's Shoe Styles, " + firstName + " " + middleInitial + ". " + lastName + "!";
     let value1 = 3;
     let value2 = 5;
     let value3 = 7;
     let count = 140;
     buzz(value1, value2, value3, count);
  }
function solve(firstvalue, secondvalue, thirdvalue)
{
  if(value2 % value1 === 0) 
  {
      return true;
      
  }else if(value1 % value3 === 0)
  {    return true;
    
  }else 
  {   return false;

}
    function buzz(value1, value2, value3)
{
    for(let i = 1; i <= count; i++) {
  
      let fizzSolve;
      
      if ((i, value1)solve {
          fizzSolve = "Fun";
      
      } else if((i, value2)solve) { 
          fizzSolve = "Quick";

      } else ((i, value3)solve)  
      {
          fizzSolve = "BANG!";
      }
      
    
    let element_1 = document.createElement('li');

    let text = document.createTextNode(i + ' ' + fizzsolve);
    
    
    element_1.appendChild(text);
    

    let pos_new = document.getElementsByTagName('ul')[0];
    
 
    pos_new.appendChild(element_1);
    
  }
    
} 
