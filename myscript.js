
$(document).ready(function () {
    $("#btn").click(function () {
    //collect student data from student form
  function validateForm() 
    {
        let fname = document.forms["myForm"]["fname"].value;
        if (fname == "") 
        {
            alert("First Name must be filled out"); 
            return false;       
        }

        let lname = document.forms["myForm"]["lname"].value;
        if (lname == "") 
        {
            alert("Last Name must be filled out");
            return false;
        }  
     }


    function getStudentData() 
    {
    let student = {
    fname: $("#fname").val(),
    lname: $("#lname").val(),
    seldept: $("#seldept").val(),
    email: $("#email").val(),
    contact: $("#contact").val(),
    gender: $("input[type='radio']:checked").val(),
    } 
    //$("#studentForm")[0].reset();
    return student; 
}


//store student data to localStorage
function storeDataToLocalStorage() {
    if (!localStorage.getItem("student")) {
    localStorage.setItem("student",JSON.stringify(getStudentData()));
    } else {
    localStorage.removeItem("student");
    localStorage.setItem("student", JSON.stringify(getStudentData()));
    }
}

//send data to server with AJAX request
function sendData() {
    let xhr = new XMLHttpRequest();
    let data = JSON.stringify(getStudentData());
    xhr.open("POST", "http://localhost:8080/storedata",true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    }
    //call storeDataToLocalStorage and sendData functions
    storeDataToLocalStorage();
   // sendData();

    window.location.href = "displayform.html";

   
    });
    });