let resto = document.querySelector(".resultado")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 2; i++){
        let puntu = ""
        let rango = ""
       
          for(let i=0; i < 10; i++){
          let pantu = " "
          let rango = data[i].rango
          if(data[i].puntuacion === 4){
            pantu = "star star star star"
          }
          else if (data[i].puntuacion === 4){
            pantu = "star star star star"
          }
          else if (data[i].puntuacion === 3){
            pantu = "star star star"
          }
          else if (data[i].puntuacion === 2){
            pantu = "star star"
          }
          else if (data[i].puntuacion === 1){
            pantu = "star"
          }
           
         
        
        
        
        
         resto.innerHTML += /*html*/` 

        
        <a href="./menu.html" class="restaurantes1 flex">
                    <div class="img">
                    <img src="${data[i].avatar.src}">
                    <div class="distancia">3km</div>
                </div>
                <div class="descripcion">
                <h3>${data[i].name}</h3>
                    <span>
                    ${data[i].category} - ${data.horario}
                    </span>
                    <div class="nombre">LA PARRILA DE TEO</div>
                    <div class="datos">
                        <div>EL SEVICIO MAS RAPAIDO DE CARNE ASADA</div>
                        <div>9:00-11:00</div>
                        <div>
                            <h2>
                                &#9733; 
                                &#9733;
                                &#9733;
                                &#9733;
                                &#9733;
                            </h2>
                        </div>
                    </div>
                    <div class="puntaje">${data[i].puntuacion}</div>
                    <div class="valoracion-gris-txt">
                    
                    </div>
                </div>
            </a>` 
       
    }
}
})
