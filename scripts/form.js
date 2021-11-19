function formData() {
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var personal_back = "Personal Background: " + document.getElementById('personal_back').value;
    var academic_back = "Academic Background: " + document.getElementById('academic_back').value;
    var computer_platform = "Primary Computer Platform: " + document.getElementById('computer_platform').value;
    var course_list = "Courses I'm Taking, and Why: " + document.getElementById('course_list').value;
    var funny_item = "Funny/Interesting item about yourself: " + document.getElementById('funny_item').value;
    document.getElementById("greeting").textContent = "Welcome to Syd's Shoe Styles, " + first_name + " " + last_name + "!";
    
    introData(personal_back, academic_back, computer_platform, course_list, funny_item);
  
    display(introData);
  }
  
  
  function display(introData) {
  
    for (let i = 0; i < introData.length; i++) {
        var element_1 = document.createElement('li');
        var text = document.createTextNode(i + ' ' + introData);
        element_1.appendChild(text);
        var pos_new = document.getElementsByTagName('ul')[0];
        pos_new.appendChild(element_1);
    }
  
  }
