/* 
    Quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a próxima imagem
 
        a imagem atual começa em 0 pq é a primeira imagem
        assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder  saber que agora vou mostrar a segunda imagem

        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe 'mostrar'

        mostrar a próxima imagem
            pegar todas as imegens, descobrir qual é a próxima, e colocar a classe mostrar nela

*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;


function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

/*
    Quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a próxima imagem
*/
setaAvancar.addEventListener('click', function() {
    
    /* testa se o contador da imagemAtual é igual ao total de imagens */
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens){
        return;
    };

    /* 
        a imagem atual começa em 0 pq é a primeira imagem
        assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder  saber que agora vou mostrar a segunda imagem
    */
   imagemAtual++;
   
   /*
        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe 'mostrar'
    */
    esconderImagens();

    /*
        mostrar a próxima imagem
            pegar todas as imegens, descobrir qual é a próxima, e colocar a classe mostrar nela
    */
    mostrarImagem();
});



/*
    Quando clicar na seta pra voltar temos que esconder todas as imagens e mostrar a próxima a imagem anterior
*/
setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0) {
        console.log('não tem mais como voltar');
        return;
    }

    imagemAtual--;

    /*
        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe 'mostrar'
    */
    esconderImagens();

    /*
        mostrar a imagem anterior
            pegar todas as imegens, descobrir qual é a imagem anterior, e colocar a classe nela
    */
    mostrarImagem();
})