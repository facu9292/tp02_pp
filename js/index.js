
let guardar=(id)=>{
    localStorage.setItem("resto",id);
  }
 
  fetch('js/resto.json')

  .then(response => {
    
    return response.json()
  })
 
  .then(data => {
    data.forEach(e=>{
      document.getElementById('restoList').innerHTML +=/*html*/`
      <a id="${e.id}" href="./menu.html" class="restaurantes flex" onClick="guardar(id)">
        <div class="img center">
          <img src="${e.img.src}" alt="${e.img.alt}" />
          <div class="distancia">${e.dist}</div>
        </div>
        <div class="descripcion">
        <div class="nombre">${e.name}</div>
        <div class="datos">
          <div>${e.ubic}</div>
          <div>${e.time}</div>
        </div>
        <div class="valoracion flex">
          <div class="estrellas flex">
            ${'<span class="icons selected">star</span>'.repeat(e.value.stars)}
            ${'<span class="icons">star</span>'.repeat(5-e.value.stars)}
            <div class="n-resenias">(${e.value.coments})</div>
          </div>
          <div class="costo">
            ${'<span class="icons selected">euro_symbol</span>'.repeat(e.value.cost)}
            ${'<span class="icons">euro_symbol</span>'.repeat(3-e.value.cost)}
          </div>
        </div>
        <div class="puntaje">${e.value.stars}</div>
        </div>
      </a>`
    })
  })
  