let txt = document.querySelector('#txt')

function trocarCor(cor) {

    document.body.style.background = cor;
    txt.style.color = cor;

    //marcar a opção selecionada

    document.querySelectorAll('span').forEach(function (item) {

        item.classList.remove('active')
    })
    event.target.classList.add('active')

}

function white(cor){

    document.body.style.background = cor;
    txt.style.color = "#fff";

     //marcar a opção selecionada

    document.querySelectorAll('span').forEach(function (item) {

        item.classList.remove('active')
    })
    event.target.classList.add('active')
}
