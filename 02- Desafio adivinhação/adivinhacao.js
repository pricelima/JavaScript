

let formulario = document.querySelector('form');
let numeroSorteado = parseInt(Math.random() * 10);


formulario.addEventListener('submit', function(event){


    
    event.preventDefault();    
    let palpiteUsuario = document.getElementById('palpite').value;
    let resultado = document.getElementById('resultado');

    if(palpiteUsuario == numeroSorteado){
        resultado.innerHTML = "Você acertou";
    }else if(palpiteUsuario < 0 || palpiteUsuario > 10){
        resultado.innerHTML = "Deve digitar de 1 a 10";
    }else if(palpiteUsuario < numeroSorteado){
        resultado.innerHTML = "O numero escolhido é menor que a resposta correta"
    }else{
        resultado.innerHTML = "Numero escolhido é maior que a resposta correta"
    }    
    
});


