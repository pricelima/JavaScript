const titulo = document.getElementById('titulo-principal');
console.log(titulo)

const pagina = document.querySelector('body');
console.log(pagina);

const subtitulo = document.querySelectorAll('h2');
console.log(subtitulo);

console.log("________________");
console.log(document.querySelector('h3'));

  // Modificando elementos
titulo.textContent = "Olá Mundo"
subtitulo[1].textContent = "Full Stack"

const legenda = document.querySelector('figcaption');
legenda.innerHTML = "<b>Ilustração do DOM</b>"

// css via js 
titulo.style.textAlign ='center'; 
titulo.style.backgroundColor = 'linear-gradient(black, write)';


const listaEditores = document.querySelector('#lista-editores'); //pegar o doc todo
const ultimo = listaEditores.querySelector('li:last-child'); //pegar só um item da lista 
const outro = listaEditores.querySelector('li:nth-child(2)');
const primeiro = listaEditores.querySelector('li:first-child');

ultimo.classList.add('destaque-item');


//adicionando o produto target em todos os links da lista de referencias
let links = document.querySelectorAll('ul li a');
console.log(links);
//links[0].style.color = "red";


for(let i = 0; i < links.length; i++){
  links[i].setAttribute('target', '_blank');
}