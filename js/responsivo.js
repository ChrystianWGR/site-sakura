//javaScript para o funcionamento do botão da navbar responsiva
var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

//parte que adiciona as funções ao botão
menuIcon.addEventListener('click', () => {

    /*if para caso o botão esteja ativo ele remova o atributo ativo e volte
    a pagina normal, e o else afiona o atributo ativo e manda para a navbar
    responsiva e troca o icone padrão por um X para voltar*/
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';

    } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';
    }
})

document.querySelectorAll('.ul a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    });
    setTimeout(() => {
        window.location.href = link.getAttribute('href');
    }, 300);
});