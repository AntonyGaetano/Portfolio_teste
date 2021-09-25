
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var main = document.getElementById('main1')
var icone_menu = document.getElementById("i_menu");
var icone_arrow = document.getElementById('icone_seta');
var icone_menu = document.getElementById('i_menu');
var boxheader = document.getElementById('box-header')
var ul = document.getElementById('ul');
var header = document.getElementById("header");
var icone_sobe_header = document.getElementById('seta-box-header');



var BLOCOS = document.querySelectorAll('div.blocos-div');
for(let k = 0; k < BLOCOS.length; k++){
  BLOCOS[k].addEventListener('click',MostraProjeto)
}

icone_menu.addEventListener('click',Menu);
icone_sobe_header.addEventListener('click',Menu);

//Chama de funções
document.getElementById('btn-ver-projeto').addEventListener("click",Box1);
document.getElementById("i_fechar").addEventListener("click",FecharProjeto);

boxheader.addEventListener('click', ReverseBox1); 


//Função para fazer a transição do Box, após o clique no botão
function Box1(){

  document.body.style.padding="none"
  document.body.style.margin="none"
  document.body.style.width=""
  document.body.style.height=""

    box1.style.height="50px";  
    ul.style.display="none"; 
    icone_sobe_header.style.display="none"
    tmp = setTimeout(ADD_i,900);

}

//Função para fazer o icone da seta ficar visível
function ADD_i(){
boxheader.style.justifyContent="center";
icone_menu.style.display="none";
icone_arrow.style.display="inline-block";
box2.style.display="flex";
}

//Função para fazer a transição do Box, após o clique no botão
function ReverseBox1(event){
  if(event.target.id == 'icone_seta'){
    box1.style.height="657px";
    icone_arrow.style.display='none';
    icone_menu.style.display="inline-block";
    boxheader.style.justifyContent="right";
    box2.style.display="none";

    document.body.style.padding="0"
    document.body.style.margin="0"
    document.body.style.width="100%"
    document.body.style.height="100%"
  }
}

//Criação do objeto com as informações do projeto1
var bloco1 = {
  num_projeto:"Projeto 1",
  nome_projeto:"Calculadora De IMC",
  descricao:"Esse projeto foi desenvolvido para calcular o indice de massa corporar!",
  tecnologia_usada1:"html",
  tecnologia_usada2:"Css",
  tecnologia_usada3:"Javascript",
}

var bloco2 = {
  num_projeto:"Projeto 2",
  nome_projeto:"Validando Formulário",
  descricao:"Esse projeto foi feito para validar formulário com javascript",
  tecnologia_usada1:"html",
  tecnologia_usada2:"Css",
  tecnologia_usada3:"Javascript",
}

var bloco3 = {
  num_projeto:"Projeto 3",
  nome_projeto:"Conversor de Temperatura",
  descricao:"Esse projeto foi desenvolvido para transforma um valor em celsius em fahrenheit e kelvin",
  tecnologia_usada1:"html",
  tecnologia_usada2:"Css",
  tecnologia_usada3:"Javascript",
}

var bloco4 = {
  num_projeto:"Projeto 4",
  nome_projeto:"Jogo Pedra, Papel e Tesoura",
  descricao:"Esse projeto foi a criação de um jogo com lógica de programção",
  tecnologia_usada1:"html",
  tecnologia_usada2:"Css",
  tecnologia_usada3:"Javascript",
}

var bloco5 = {
  num_projeto:"Projeto 5",
  nome_projeto:"Cronômetro",
  descricao:"Esse projeto foi desenvolvido para auxiliar em alguma tarefa com tempo marcado",
  tecnologia_usada1:"html",
  tecnologia_usada2:"Css",
  tecnologia_usada3:"Javascript",
}

var bloco6 = {
  num_projeto:"Projeto 6",
  nome_projeto:"Lista De Tarefas",
  descricao:"Esse projeto foi desenvolvido para auxiliar nas tarefas do dia a dia, para melhor organização",
  tecnologia_usada1:"html",
  tecnologia_usada2:"Css",
  tecnologia_usada3:"Javascript",
}

var cont = 0
function Menu(){
  if(cont == 0){

    var altura = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  

  ul.style.display="flex";
  header.style.height=altura+"px";
  header.style.backgroundColor="cornflowerblue";
  header.style.border="1px solid";
  icone_menu.innerHTML="";
  icone_sobe_header.style.display="flex"
  main.style.opacity=0.3;
  cont = 1;
  }
  else{
    ul.style.display="none";
    header.style.height="3rem";
    icone_menu.innerHTML="menu";
    header.style.backgroundColor="";
    header.style.border="";
    icone_sobe_header.style.display=""
    main.style.opacity=1;
    cont = 0;
  }
}

 
var ChamaProjeto = 0;

function MostraProjeto(event){
  
  if(ChamaProjeto == 0){

  let id = event.target.id;
  var num_obj = id.replace(/\D/g,'');
  let Obj_bloco = [bloco1,bloco2,bloco3,bloco4,bloco5, bloco6];
  

  document.getElementById("box-suspenso").style.display="flex";
  var box = document.getElementById("box_interior");
  var h2 = document.getElementById("nome-projeto");

  var div_img_desc = document.createElement("div");
  var div_img = document.createElement("div");
  var div_tec_det = document.createElement('div');
  var div_tec = document.createElement('div');
  var div_det = document.createElement('div');
  var div_desc = document.createElement('div');

  var h5 = document.createElement('h5');
  var h4 = document.createElement('h4');
  var detalhe = document.createElement('h5'); 
  var btn = document.createElement('button');

  div_desc.appendChild(h5)
  div_img_desc.appendChild(div_img);
  div_img_desc.appendChild(div_desc);

  div_tec.appendChild(h4)

  div_det.appendChild(detalhe);
  div_det.appendChild(btn);

  div_tec_det.appendChild(div_tec)
  div_tec_det.appendChild(div_det)

  box.appendChild(div_img_desc);
  box.appendChild(div_tec_det);
 
  div_img.classList.add("img-info");
  div_img_desc.classList.add("img-descricao");
  div_desc.classList.add('descricao')
  div_tec.classList.add("tecnologia");
  div_det.classList.add('detalhe')
  div_tec_det.classList.add('tecnologia-detalhe')
  
 
  document.getElementById("i_fechar").addEventListener("click",()=>{
    div_img_desc.remove()
    div_img.remove()
    div_tec_det.remove()
    ChamaProjeto = 0;
  });
 

  h2.innerHTML=Obj_bloco[num_obj-1].nome_projeto;
  div_img.style.backgroundImage="url(fotos_projetos/projeto"+num_obj+".png)";
  h5.innerHTML=Obj_bloco[num_obj-1].descricao;
  detalhe.innerHTML="Para mais detalhes, clique abaixo!"
  btn.innerHTML="Ver projeto"; 

  ChamaProjeto = 1;


 }

}

function FecharProjeto(e){
  document.getElementById("box-suspenso").style.display="none";  
}

function Inicial(){
  document.body.style.padding="0"
  document.body.style.margin="0"
  document.body.style.width="100%"
  document.body.style.height="100%"
}



function Sobre(){
   Menu();

   tempo = setTimeout(Box1,800)

   tmp = setTimeout(()=>{
   // selecionar elemento
    let el = document.getElementById('sobre');
    // utiliza método
     let elCoordenadas = el.getBoundingClientRect();

  window.scrollTo(0,elCoordenadas.y);
   },2200)

}

function Habilidade(){
  Menu();

  tempo = setTimeout(Box1,800)

  tmp = setTimeout(()=>{
  // selecionar elemento
   let el = document.getElementById('Habilidade');
   // utiliza método
    let elCoordenadas = el.getBoundingClientRect();

 window.scrollTo(0,elCoordenadas.y);
  },2200)

}

window.addEventListener("load",Inicial);