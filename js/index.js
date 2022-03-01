
// index.html effect when the mouse go over buttoms
const buttoms = document.querySelectorAll(".option")

for (let buttom of buttoms) {
   buttom.addEventListener('mouseover', function(event) {
      buttom.classList.add("hoverButtom");
   })
   buttom.addEventListener('mouseout', function(event) {
      buttom.classList.remove("hoverButtom")
   })
}



