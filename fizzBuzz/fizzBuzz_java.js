//java script for fizzbuzz0 assignment 
//sydney m



function formSubmit() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let middleInitial = document.getElementById('middle_initial').value;
        
document.getElementById("greeting").textContent = "Welcome to Syd's Recipies, " + firstName + " " + middleInitial + ". " + lastName + "!";
let count = prompt(`How high do you want to count, ${firstName}?`);
buzz(count);
}

function buzz(counter) {
for(let i = 0; i <= counter; i++) {
  var evenOdd;
  
  if (i % 2 === 0) {
    evenOdd = 'this is an even number';
  } else {
    evenOdd = 'this is an odd number';
  }



    //creates new element & stores in variable
    var element_1 = document.createElement('li');
    
    //text node variable and components
    var text = document.createTextNode(i + ' Easy Peasy ||' + evenOdd);
    
    //text node and new element attach
    element_1.appendChild(text);
    
    //element's postition
    var pos_new = document.getElementsByTagName('ul')[0];
    
    //corrects position
    pos_new.appendChild(element_1);
    
  }
  
}
