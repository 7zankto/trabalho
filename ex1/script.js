let botao = document.querySelector("#botao");
botao.style.background="blue";
botao.style.color = "white";
let ganhou=false;
let contaCliques=0;
botao.addEventListener("mouseover",e =>{
    if(!ganhou)
        botao.style.background="green";
        botao.style.color="white";
});

botao.addEventListener("mouseout",e =>{
    if(!ganhou)
        botao.style.background="blue";
});

botao.addEventListener("click",e =>{

    contaCliques=contaCliques+1

if(contaCliques>=10){
    botao.style.background="red";
    botao.innerHTML="Ganhou!";
    ganhou=true;
}
})
//acaba
let botao2 = document.querySelector("#botao2");
botao2.style.background="blue";
botao2.style.color = "white";
let estaQuebrado2=false;
let contaCliques2=0;
botao2.addEventListener("mouseover",e =>{
    if(!estaQuebrado2)
        botao2.style.background="green";
        botao2.style.color="white";
});

botao2.addEventListener("mouseout",e =>{
    if(!estaQuebrado2)
        botao2.style.background="blue";
});

botao2.addEventListener("click",e =>{

    contaCliques2=contaCliques2+1

if(contaCliques2>=20){
    botao2.style.background="red";
    botao2.innerHTML="Ganhou!";
    estaQuebrado2=true;
}
})