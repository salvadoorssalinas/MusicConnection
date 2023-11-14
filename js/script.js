var elemento = document.getElementById('animado');

function desvanecer() {
    var rect = elemento.getBoundingClientRect();
    var esVisible = (rect.top >= 0);

    if (esVisible && elemento.style.opacity === '') {
        elemento.style.opacity = '1';
        window.removeEventListener('scroll', desvanecer);
    }
}

function aparecerDesdeAbajo() {
    var rect = elemento.getBoundingClientRect();
    var esVisible = (rect.top >= 0);

    if(esVisible) {
        elemento.style.transform = 'translateY(0)';
        window.removeEventListener('scroll', aparecerDesdeAbajo)
    }
}

window.addEventListener('scroll', desvanecer);
window.addEventListener('scroll', aparecerDesdeAbajo)

desvanecer();
aparecerDesdeAbajo();