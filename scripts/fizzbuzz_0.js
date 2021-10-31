//java script for fizzbuzz0 assignment 
//sydney m



function formSubmit()
{
 function formSubmit() {
  let first_Name = document.getElementById('first_name').value;
  let last_Name = document.getElementById('last_name').value;
  let middle_initial = document.getElementById('middle_initial').value;  

   document.getElementById("greeting").textContent = "Welcome to Syd's Shoe Styles, " + first_Name + " " + middle_initial + ". " + last_Name + "!";
  let count = prompt(`How high do you want to count, ${firstName}?`);
  buzz(count);
}

function buzz(counter)
{
  
  for(let i = 0; i <= counter; i++)
  {
    let evenOdd;

    if (i % 2 === 0)
  {
      evenOdd = 'this is an even number';
  } 
  
  else
  {
    evenOdd = 'this is an odd number';
  }




    let element_1 = document.createElement('li');
    

    let text = document.createTextNode(i + ' Easy Peasy || ' + evenOdd);
    

    element_1.appendChild(text);
    
   
    let pos_new = document.getElementsByTagName('ul')[0];
 
    pos_new.appendChild(element_1);
 
  } 
}
