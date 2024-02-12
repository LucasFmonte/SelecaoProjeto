const page1Btn = document.querySelector('#botao1');
const page2Btn = document.querySelector('#botao2');
const page3Btn = document.querySelector('#botao3');
const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');

page1Btn.addEventListener('click', () => {
    page1.style.display = 'flex';
    page2.style.display = 'none';
    page3.style.display = 'none';
})

page2Btn.addEventListener('click', () => {
    page2.style.display = 'flex';
    page3.style.display = 'none';
    page1.style.display = 'none';
})

page3Btn.addEventListener('click', () => {
    page3.style.display = 'flex';
    page2.style.display = 'none';
    page1.style.display = 'none';
})


