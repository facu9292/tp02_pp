
let num = document.getElementById("num");
let btnRestar = document.getElementById("restar");
let btnSumar = document.getElementById("sumar");
let addToCart = document.querySelector(".food-addToCart");
let buySection = document.querySelector("footer.flex");
let cant = 1;
num.innerText = cant;
btnRestar.innerText = "block"
btnRestar.style.cursor = "unset"
btnRestar.style.color = "gray";
btnRestar.addEventListener("click",()=>{
  if(cant > 1){
    cant = cant - 1;
    num.innerText = cant;
  }else{
    alert('el minimo de unidades para llevar es 1');
  }
  if(cant == 1){
    btnRestar.innerText = "block"
    btnRestar.style.cursor = "unset"
    btnRestar.style.color = "gray"
  }else{
    btnSumar.innerText = "add"
    btnSumar.style.cursor = "pointer"
    btnSumar.style.color = "white"
    btnRestar.innerText = "remove"
    btnRestar.style.cursor = "pointer"
    btnRestar.style.color = "white"
  }
  uploadTotal();
});
btnSumar.addEventListener("click",()=>{
  if(cant < 12){
    cant = cant + 1;
    num.innerText = cant;
  }else{
    alert('el maximo de unidades para llevar es 12');
  }
  if(cant == 12){
    btnSumar.innerText = "block"
    btnRestar.style.cursor = "unset"
    btnSumar.style.color = "gray"
  }else{
    btnSumar.innerText = "add"
    btnSumar.style.cursor = "pointer"
    btnSumar.style.color = "white"
    btnRestar.innerText = "remove"
    btnRestar.style.cursor = "pointer"
    btnRestar.style.color = "white"
  }
  uploadTotal();
});
function uploadTotal(){
  if(document.querySelector(".puntoResto")){
    let span = document.querySelector(".puntoResto");
    span.innerText = `total: ${priceUnit * cant}`;
  }
}
addToCart.addEventListener("click",()=>{
  if(document.querySelector(".puntoResto")){
    let span = document.querySelector(".puntoResto");
    span.remove();
  }else{
    let span = document.createElement("span");
    span.classList.add("flex");
    span.classList.add("puntoResto");
    buySection.appendChild(span);
    uploadTotal();
  }
});

fetch('js/resto.json')
.then(response => response.json())
.then(data => {
  data.forEach(e=>{
    if(e.id==localStorage.getItem("resto")){
      e.menu.forEach(plato=>{
        if(plato.id==localStorage.getItem("plato")){
          document.getElementById('food-name').innerText=plato.name;
          document.getElementById('food-price').innerText=plato.price;
          document.querySelector('.food-desc').innerText=plato.desc;
        }
      })
    }
  })
})