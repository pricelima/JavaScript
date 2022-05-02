let formulario = document.querySelector('form');
let numeroEscolhido = parseInt( Math.random() * 11 );

formulario.addEventListener('submit', function(event) {

    event.preventDefault();

    
    let palpiteUsuario = parseInt( document.getElementById('palpite').value );
    let resultado = document.getElementById('resultado');

    
    for(let i = 1; i < 4; i++){
        if (palpiteUsuario == numeroEscolhido) {
            resultado.innerHTML = "Você acertou!";
        } else if (palpiteUsuario < 0 || palpiteUsuario > 10) {
            resultado.innerHTML = "Digite um número entre 0 e 10";
        }else if (palpiteUsuario < numeroEscolhido){
            resultado.innerHTML = "Numero escolhido menor"
        }else{
            resultado.innerHTML = "Numero escolhido maior"
        }        
    }
    

});