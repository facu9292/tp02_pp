let platos = document.querySelector(".options")

fetch('js/platosARG.json')
.then(response => {
     return response.json()
    })
.then((plato) => {
              for(let i=0; i < 2; i++){
       
         platos.innerHTML += /*html*/` 

                      <a href="./saucer.html" class="card flex">
                <div class="plato1 "><img src=${plato[i].image}
                    <div class="card-price">&#8364;8500</div>
                </div>
                <div class="card-info">
                    <h3 class="card-name">ASADO</h3>
                    <h3 class="card-desc"> CARNE A PARRILLA</h3>
                </div>
            </a>`

       
       
    }
}
)
