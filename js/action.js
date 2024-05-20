console.log("practicando DOM con Chazie");

// let comida = document.getElementById("comida");
// console.log(comida);

// let titulo = document.querySelector(".icons")
// console.log(titulo);

// let lista = document.querySelector("li")
// console.log(lista);

// let listas = document.querySelectorAll("li")
// console.log(listas);

let listaElementos = document.querySelectorAll("ul > li, ul > h2");
console.log(listaElementos);
listaElementos.forEach((e)=>(console.log(e)));

// Creación de Elementos corte JavaNormie con Eclipse
let listaDesordenada = document.createElement("ul");// creamos un layout
document.body.appendChild(listaDesordenada);// commiteamos el layout

let tituloDesordenado = document.createElement("h2");// crea un nuevo elemento
tituloDesordenado.textContent = "Why i love JS?";// añade texto como contenido del elemento
listaDesordenada.appendChild(tituloDesordenado);// añade nuevo elemento al documento o elemento padre indicado

let listaElemento1 = document.createElement("li");
listaElemento1.textContent = "Es gratis";
listaDesordenada.appendChild(listaElemento1);

let listaElementoX = document.createElement("li");
listaElementoX.textContent = "No es gratis";
listaDesordenada.appendChild(listaElementoX);

listaDesordenada.removeChild(listaElementoX);// elimina el elemento indicado

let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "Es re gratis";
listaDesordenada.appendChild(listaElemento2);

let listaElemento3 = document.createElement("li");
listaElemento3.textContent = "Es mega gratis";
listaDesordenada.appendChild(listaElemento3);

// ACA CAMBIAMOS CON EL ARCHIVO tp3_app_res...ipynb
let cambioh1 = document.querySelector("ul > li");
cambioh1.style.color = "black";
cambioh1.style.backgroundColor = "green";
cambioh1.style.display = "flex";
cambioh1.style.justifyContent = "center";
cambioh1.textContent = "tapas";

cambioh1.classList.add("icons");
// cambioh1.classList.toggle("icons");
// el toggle le saca o agrega la clase dependiendo de si está aplicada o no