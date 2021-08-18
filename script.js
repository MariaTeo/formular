console.log('merge?')

const form1 = document.getElementById("form1")

const form2 = document.getElementById
("form2")
const btn1 = document.getElementById('first_btn')

btn1.addEventListener("click", oriceNume())

function displayForm(a, b) {
  a.style.display = "block"
  b.style.display = "none"
}

function oriceNume(e) {
  displayForm(form1, form2)
  e.preventDefault()
}
