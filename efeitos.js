AOS.init();

document.addEventListener('DOMContentLoaded', function () {
    const albumComprimido = document.querySelector('#comprimido')
    const esposiçãoAlbum = document.querySelector('#vsMobile')

    if (window.innerWidth <= 1225 && albumComprimido && esposiçãoAlbum) {
        if (window.innerWidth <= 1225 && albumComprimido && esposiçãoAlbum) {
            albumComprimido.addEventListener('click', function () {
                if (esposiçãoAlbum.style.display === 'block') {
                    esposiçãoAlbum.style.display = 'none'
                } else {
                    esposiçãoAlbum.style.display = 'block'
                }
            })
        }
    }
})



const frases = [
    "Estilo e Elegância para Todos os Momentos",
    "Mais do que vestir, é se encontrar",
    "Elegância que abraça o seu jeito de ser",
]

let index = 0;
  const fraseEl = document.getElementById("slogan");

  function mostrarFrase() {
    fraseEl.style.opacity = 0;
    setTimeout(() => {
      fraseEl.textContent = frases[index];
      fraseEl.style.opacity = 1;
      index = (index + 1) % frases.length;
    }, 500); 
  }

  mostrarFrase();
  setInterval(mostrarFrase, 3000);




// let intdex = 0
// const imagens = document.getElementById('comprimido')
// const total = imagens.children.length

// function carrossel() {
//     imagens.style.transform = `translateX(${-index * 300}px)`
// }
    
// function avancar() {
//     index = (index + 1) % total
//     carrossel()
// }

// function voltar() {
//     index = (index - 1 + total) % total
//     carrossel()
// }