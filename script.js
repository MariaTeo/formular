const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const btn1 = document.getElementById("first_btn");
const btn2 = document.getElementById("lastF");
const inputFname = document.getElementById("fname")
const inputLname = document.getElementById("lname")
const inputEmail = document.getElementById("email")
const arr = [inputEmail, inputFname, inputLname]

btn1.addEventListener("click", function (e) {
  displayForm(form1, form2);
  formVAlidation(arr)
  e.preventDefault();
});

btn2.addEventListener("click", function (e) {
  displayForm(form2, form1), e.preventDefault();
});

function displayForm(a, b) {
  a.style.visibility = "hidden";
  b.style.visibility = "visible";
}


function formVAlidation(arr) {
  for(let i = 0; i<arr; i++) {
    console.log(arr, "merge")
  }
}

