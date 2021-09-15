
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var main = document.getElementById('main1')
var icone_menu = document.getElementById("i_menu");
var icone_arrow = document.getElementById('icone_seta');
var icone_menu = document.getElementById('i_menu');
var boxheader = document.getElementById('box-header')
var bloco = document.querySelectorAll("div.bloco");
var ul = document.getElementById('ul');
var header = document.getElementById("header");


icone_menu.addEventListener('click',Menu);

//Chama de funções
document.getElementById('btn-ver-projeto').addEventListener("click",Box1)


boxheader.addEventListener('click', ReverseBox1); 

//Função para fazer a transição do Box, após o clique no botão
function Box1(){
    box1.style.height="60px";   
    tmp = setTimeout(ADD_i,900)
 
}

//Função para fazer o icone da seta ficar visível
function ADD_i(){
boxheader.style.justifyContent="center";
icone_menu.style.display="none";
icone_arrow.style.display="inline-block";
box2.style.display="flex"

}

//Função para fazer a transição do Box, após o clique no botão
function ReverseBox1(event){
  if(event.target.id == 'icone_seta'){
    box1.style.height="657px";
    icone_arrow.style.display='none';
    icone_menu.style.display="inline-block";
    boxheader.style.justifyContent="right";
    box2.style.display="none";
  }
}

function Animacao(props){

  if(props == 'Passar'){
    for(let i = 0; i < bloco.length; i++){
     bloco[i].style.animation="BlocoPassar 0.6s 1";
    }
 
    tempo = setTimeout(tirarA,1200)

  }
  else if(props == 'Voltar'){
    for(let i = 0; i < bloco.length; i++){
    bloco[i].style.animation="BlocoVoltar 0.6s 1";
    }

    tempo = setTimeout(TirarAnimacao,1200)
  }
}

function TirarAnimacao(){
  for(let i = 0; i < bloco.length; i++){
    bloco[i].style.animation="none";
   }
}

var cont = 0
function Menu(){
  if(cont == 0){
  ul.style.display="flex";
  header.style.height="12rem";
  icone_menu.innerHTML="close";
  main.style.opacity=0.3
  cont = 1;
  }
  else{
    ul.style.display="none";
    header.style.height="3rem";
    icone_menu.innerHTML="menu";
    main.style.opacity=1;
    cont = 0;
  }
}



