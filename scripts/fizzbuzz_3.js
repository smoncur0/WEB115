//java script for fizzbuzz3 assignment 
//sydney m



function formSubmit() {
  let first_Name = document.getElementById('first_name').value;
  let last_Name = document.getElementById('last_name').value;
  let middle_initial = document.getElementById('middle_initial').value;  

   document.getElementById("greeting").textContent = "Welcome to Syd's Shoe Styles, " + first_Name + " " + middle_initial + ". " + last_Name + "!";
   let div1 = 3;
   let div2 = 5;
   let div3 = 7;
   let count = 140;

   buzz(div1, div2, div3, count);
}
function checkDivison(div1, div2) {

      
      if (div1 % div2 === 0) {
          return true;

      } else {
          return false;
  }   
}
function buzz(div1, div2, div3, limit) {
  for(let i = 1; i <= limit; i++) {
    
//new variable for loop
    let fizzDivison;

    //conditions for loop
    if (i % div1 === 0){
        fizzDivison = "- Fun";
    
    } else if(i % div2 === 0) { 
        fizzDivison = "- Quick";
      
    } else if(i % (div1 * div2* div3) === 0)  { 
      fizzDivison = "- Fun and Quick";

    } else { 
        fizzDivison = "- Super Quick and Fun!";

    }
    

  var element_1 = document.createElement('li');

  var text = document.createTextNode(i + ' ' + fizzDivison);

  element_1.appendChild(text);

  var pos_new = document.getElementsByTagName('ul')[0];

  pos_new.appendChild(element_1);
  
}
  
} 
