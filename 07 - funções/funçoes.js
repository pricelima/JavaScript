//sintaxe 1 (tradicional)
//função literal/anonima

let exemplo1 = function(){
    console.log("Função anônima / literal")
};

// chamando a função
exemplo1();

//_________________________________________

//2 (tradicional)
function exemplo2(){
    console.log("Função nomeada")
};

// chamando a função
exemplo2();

//_________________________________________


//3 moderna
//função seta/flecha (arrow function)

let exemplo3 = () =>{
    console.log("arrow function");
}
// chamando a função
exemplo3();

//_________________________________________


let exemplo3d = () => console.log("arrow function b");
exemplo3d();

//_________________________________________

function dobra(valor){
    return valor * 2;
}

console.log( dobra(10) );




let dobraB = (valor) =>{
    return valor*2
}
console.log( dobraB(100));

let dobraC = valor =>  valor*100;
console.log( dobraC(20) );

//exercicios anteriores
console.log("-----------------")


let preco = 1250;
let desconto = 77.88;
let precoFinal = preco - desconto;

function formataMoeda(valor){
    return valor.toLocaleString('en',{
        style:'currency',
        currency:'USD'
    });
}

let formataValor = valor => {
    return valor.toLocaleString('pt-br',{
        style:'currency',
        currency:'BRL'
    });
}
console.log( formataValor(precoFinal) );

console.log("____________________________")