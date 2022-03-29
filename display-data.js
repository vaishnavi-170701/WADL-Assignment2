$(document).ready(function () {
    getData();
    });

    function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    $("#fname").text(studentObj.fname);
    $("#lname").text(studentObj.lname);
    $("#seldept").text(studentObj.seldept);
    $("#email").text(studentObj.email);
    $("#contact").text(studentObj.contact);
    $("#gender").text(studentObj.gender);
    }