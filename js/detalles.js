fetch('js/resto.json')
.then(response => response.json())
.then(data => {
  data.forEach(e=>{
    if(e.id==localStorage.getItem("resto")){
      document.querySelector('.resto-title').querySelector('h1').innerText=e.name;
      document.querySelector('.resto-title').querySelector('h3').innerText=e.ubic;
      document.querySelector('.resto-puntaje').innerText=e.value.stars;
      document.getElementById('resto-dist').innerText=e.dist;
      document.getElementById('resto-time').innerText=e.time;
      
      document.querySelector('.resto-price').innerHTML=`
      ${'<span class="icons selected">euro_symbol</span>'.repeat(e.value.cost)}
      ${'<span class="icons">euro_symbol</span>'.repeat(3-e.value.cost)}`;
    }
  })
})