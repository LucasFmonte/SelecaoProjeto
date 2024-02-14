const comecarBtn = document.querySelector('#botaoComecar');
const pageMotivosBtn = document.querySelector('#botao1');
const pageSobreBtn = document.querySelector('#botao2');
const pageExpectativasBtn = document.querySelector('#botao3');

const pageInicial = document.querySelector('#pageInicial');
const pageMotivos = document.querySelector('#pageMotivos');
const pageSobre = document.querySelector('#pageSobre');
const pageExpectativas = document.querySelector('#pageExpectativas');

const navMenu = document.querySelector('header');

const fotoTransicao = document.querySelector('#ferramentaTransicao');
const elementosInvisiveis = document.querySelectorAll('.hidden')

const imagemAlternante = document.querySelector('#imagemAlternada');
const setaDireita = document.querySelector('#setaDireita');
const setaEsquerda = document.querySelector('#setaEsquerda');

comecarBtn.addEventListener('click', () => {
    fotoTransicao.classList.toggle('transicionando');
    intervaloTransicao = setInterval(() => {
        pageInicial.style.display = 'none';
        document.documentElement.scrollTop = 0;
        navMenu.style.display = 'flex';
        pageMotivos.style.display = 'none';
        pageSobre.style.display = 'flex';
        pageExpectativas.style.display = 'none';
        clearInterval(intervaloTransicao);
    }, 225);

    suporteTransicao = setInterval((() => {
        fotoTransicao.classList.toggle('transicionando');
        clearInterval(suporteTransicao);
    }), 450)
});

pageMotivosBtn.addEventListener('click', () => {
    fotoTransicao.classList.toggle('transicionando');
    intervaloTransicao = setInterval(() => {
        pageMotivos.style.display = 'flex';
        pageSobre.style.display = 'none';
        pageExpectativas.style.display = 'none';
        clearInterval(intervaloTransicao);
    }, 250);

    suporteTransicao = setInterval((() => {
        fotoTransicao.classList.toggle('transicionando');
        clearInterval(suporteTransicao);
    }), 500)
});

pageSobreBtn.addEventListener('click', () => {
    fotoTransicao.classList.toggle('transicionando');
    intervaloTransicao = setInterval(() => {
        pageSobre.style.display = 'flex';
        pageMotivos.style.display = 'none';
        pageExpectativas.style.display = 'none';
        clearInterval(intervaloTransicao);
    }, 225);
    
    suporteTransicao = setInterval((() => {
        fotoTransicao.classList.toggle('transicionando');
        clearInterval(suporteTransicao);
    }), 450)
});

pageExpectativasBtn.addEventListener('click', () => {
    fotoTransicao.classList.toggle('transicionando');
    intervaloTransicao = setInterval(() => {
        pageExpectativas.style.display = 'flex';
        pageSobre.style.display = 'none';
        pageMotivos.style.display = 'none';
        clearInterval(intervaloTransicao);
    }, 225);
    
    suporteTransicao = setInterval((() => {
        fotoTransicao.classList.toggle('transicionando');
        clearInterval(suporteTransicao);
    }), 450)
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

elementosInvisiveis.forEach((el) => observer.observe(el));

let indexFoto = 1;

function mudarImagem(direcao) {
    if(direcao == 1) {
        if(indexFoto == 4) {
            indexFoto = 1;
        } else {
            indexFoto++;
        }
        imagemAlternante.src = 'fotodojogo' + indexFoto + '.png';
    }
    else {
        if(indexFoto == 1) {
            indexFoto = 4;
        } else {
            indexFoto--;
        }
        imagemAlternante.innerHTML.src = 'fotodojogo' + indexFoto + '.png';
    }
}

setaDireita.addEventListener('click', () => {
    mudarImagem(1);
});

setaEsquerda.addEventListener('click', () => {
    mudarImagem(-1);
});