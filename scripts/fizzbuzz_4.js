function formSubmit() {
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let middle_initial = document.getElementById('middle_initial').value;  
    let div1 = document.getElementById('div1').value;  
    let div2 = document.getElementById('div2').value;  
    let div3 = document.getElementById('div3').value;  
    let option_1 = document.getElementById('option_1').value;
    let option_2 = document.getElementById('option_2').value;
    let option_3 = document.getElementById('option_3').value;     
     document.getElementById("greeting").textContent = "Welcome to Syd's Shoe Styles, " + first_name + " " + middle_initial + ". " + last_name + "!";

 
   buzz(div1, div2, div3);
   function checkDivision(div1, div2) {

      
    if (div1 % div2 === 0) {
        return true;

    } else {
        return false;
}   

}
    function buzz(div1, div2, div3) {
        for(let i = 1; i <= 125; i++) {
            var fizzDivison;
        
            if(((i % div1) ==0) && ((i % div2) ==0) && ((i % div3) ==0))
            {    
                fizzDivison = (option_1, option_3,option_2);
            }
            else if (((i % div1) ==0) && ((i % div2) ==0))
            {
                fizzDivison = ( option_1,option_2);
            }
            
            else if (((i % div1) == 0) && ((i % div3) == 0))
            {
                fizzDivison = ( option_3, option_1);
            }
            else if (((i % div2) == 0) && ((i % div3) == 0))
            {
                fizzDivison = ( option_3, option_2);
            }
            else if (i % div1 == 0)
            {
                fizzDivison = (option_1);
            }
            else if (i % div2 == 0)
            {
                fizzDivison = (option_2);
            }
            else if (i % div3 == 0)
            {
                fizzDivison = (option_3);
            }
            else{
                fizzDivison = (i);
            }
  var element_1 = document.createElement('li');
  var text = document.createTextNode(i + ' ' + fizzDivison);
  element_1.appendChild(text);
  var pos_new = document.getElementsByTagName('ul')[0];
  pos_new.appendChild(element_1);
    }
 }
}
