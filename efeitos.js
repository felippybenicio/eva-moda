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
if (innerWidth <= 799) {
    let slideIndex = 0;
    const slides = document.querySelector(".carrossel .slides");
    const totalSlides = document.querySelectorAll(".carrossel .album").length;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(() => {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }, 3000);
}else if(innerWidth <= 1225) {
  document.addEventListener("DOMContentLoaded", () => {
    const imagens = document.querySelectorAll(".album");
    let indexAtual = 0;

    function animarProximaImagem() {
      // Remove a classe de todas as imagens
      imagens.forEach(img => img.classList.remove("animado"));

      // Adiciona a classe só na próxima imagem
      imagens[indexAtual].classList.add("animado");

      // Atualiza o índice pra próxima imagem
      indexAtual = (indexAtual + 1) % imagens.length;
    }

    // Roda a primeira animação
    animarProximaImagem();

    // Troca a imagem a cada 3 segundos (3000 ms)
    setInterval(animarProximaImagem, 3000);
  })
} 

  


