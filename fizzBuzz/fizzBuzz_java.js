//java script for fizzbuzz0 assignment 
//sydney m



function formSubmit() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let middleInitial = document.getElementById('middle_initial').value;
        
   document.getElementById("greeting").textContent = "Welcome to Syd's Recipies, " + firstName + " " + middleInitial + ". " + lastName + "!";
  buzz();
}

function buzz() {
  for(let i = 0; i < 125; i++) {

    //creates new element & stores in variable
    var element_1 = document.createElement('li');
    
    //text node variable and components
    var text = document.createTextNode(i + ' Easy Peasy');
    
    //text node and new element attach
    element_1.appendChild(text);
    
    //element's postition
    var pos_new = document.getElementsByTagName('ul')[0];
    
    //corrects position
    pos_new.appendChild(element_1);
    
  }
  
}