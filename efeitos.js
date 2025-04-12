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
    