function formSubmit() {
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let middle_initial = document.getElementById('middle_initial').value;  
   
     document.getElementById("greeting").textContent = "Welcome to Syd's Shoe Styles, " + first_name + " " + middle_initial + ". " + last_name + "!";

   let div1 = 3;
   let div2 = 5;
   let div3 = 7;
   buzz(div1, div2, div3);
   function checkDivision(div1, div2) {

      
    if (div1 % div2 === 0) {
        return true;

    } else {
        return false;
}   

}
    function buzz(div1, div2, div3) {
        for(let i = 1; i <= 140; i++) {
            var fizzDivison;
        
            if(((i % div1) ==0) && ((i % div2) ==0) && ((i % div3) ==0))
            {    
                fizzDivison = ("- Quick Super Fun!" );
            }
            else if (((i % div1) ==0) && ((i % div2) ==0))
            {
                fizzDivison = ( "- QuickFun" );
            }
            
            else if (((i % div1) == 0) && ((i % div3) == 0))
            {
                fizzDivison = ( "- Super Quick" );
            }
            else if (((i % div2) == 0) && ((i % div3) == 0))
            {
                fizzDivison = ( "- Super Fun" );
            }
            else if (i % div1 == 0)
            {
                fizzDivison = ( "- Quick" );
            }
            else if (i % div2 == 0)
            {
                fizzDivison = ( "- Fun" );
            }
            else if (i % div3 == 0)
            {
                fizzDivison = ( "- Super" );
            }
            else{
                fizzDivison = ("- "+i);
            }
  var element_1 = document.createElement('li');
  var text = document.createTextNode(i + ' ' + fizzDivison);
  element_1.appendChild(text);
  var pos_new = document.getElementsByTagName('ul')[0];
  pos_new.appendChild(element_1);
    }
 }
}
