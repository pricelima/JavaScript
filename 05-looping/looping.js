//while = enquanto
//do/while = faça enquanto
//for = Faça determinada vezes x 



let i=0;
while(i <= 5){
    console.log(`O valor de i é: ${i}`);
    i++;
}

console.log("-------------------------")

let j =1;

do {
    console.log(`J é: ${j}`);
    j++
} while (j < 10);


console.log("-------------------------")



for(let k = 1; k <= 5; k++){
    console.log(`k vale: ${k}`);
}

console.log("-------------------------")
// loop iterando sobre os dados de array
let alunos =[
    "Chiquinha", "Chaves", "Madruga", "kiko", "godinez"
];

let tamanho = alunos.length; //length, contabilizar a quantidade de itens do array
//console.log(tamanho)

for( let i = 0; i<tamanho; i++){
    console.log(alunos[i])
}
