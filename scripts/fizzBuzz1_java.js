//java script for fizzbuzz0 assignment 
//sydney m



function formSubmit() {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let middleInitial = document.getElementById('middle_initial').value;
    let count = 140;    
     document.getElementById("greeting").textContent = "Welcome to Syd's Recipies, " + firstName + " " + middleInitial + ". " + lastName + "!";
    buzz(count);
  }
  
  function buzz(countLimit) {
    for(let i = 1; i <= (countLimit); i++) {
  
      //creates new element & stores in variable for loop
      var fizzList;
      
      if(i % 3 === 0) { 
        fizzList = "Fun";
      } else if ( i % 5 === 0) {
          fizzList = "Yum";
      } else if (i % 15 === 0) {
          fizzList = "Yum N Fun";
      } else {
          fizzList = "Fun No Yum";
      }
      
    
    //creates new element & stores in variable
    var element_1 = document.createElement('li');
    
    //text node variable and components
    var text = document.createTextNode(i + ' ' + fizzList);
    
    //text node and new element attach
    element_1.appendChild(text);
    
    //element's postition
    var pos_new = document.getElementsByTagName('ul')[0];
    
    //corrects position
    pos_new.appendChild(element_1);
    
  }
    
} 