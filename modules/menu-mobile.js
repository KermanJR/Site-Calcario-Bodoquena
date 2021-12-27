export default function MenuMobile(){


    var menuDesk = document.querySelector('.menu');
    var MenuMobile = document.querySelector('.menu-mobile');

    window.addEventListener('resize', ()=>{
        var janela = window.outerWidth;
        if(janela < 1102){
            MenuMobile.classList.remove('inativo')
            MenuMobile.classList.add('ativo')
            menuDesk.classList.remove('ativo');
            menuDesk.classList.add('inativo')
        }
        if(janela > 1102){
            MenuMobile.classList.add('inativo')
            MenuMobile.classList.remove('ativo')
            menuDesk.classList.remove('inativo');
            menuDesk.classList.add('ativo')
        }
    })
}