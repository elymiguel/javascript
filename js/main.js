//
// Introdução Java Script
//

/*
var nome="Mike"
var sobrenome="OutSystems"
var nasc=1987
var n1 = 10
var n2 = 7
// alert("This is Java Script")
// alert(nome + " " + sobrenome + " nasceu em " + nasc)
console.log(nome + " " + sobrenome + " nasceu em " + nasc);
console.log(nome.toUpperCase() + " " + sobrenome.toLowerCase());
console.log(nome.replace(nome, sobrenome))
console.log(nome.replace(nome, "New Name"))
console.log(n1 + n2)
console.log(n1 * n2)

//
// ARRAY
//
var list=["Pera", "Uva", "Maça"]
list.push("Banana") //Add nova atributo na Lista
list.pop() // Retira ultimo elemento da lista

console.log(list); //Exibi a Lista
console.log(list[1]); // Exibi o elemento posição 1
console.log(list.length); // Retorna o tamanho da lista
console.log(list.reverse()); // Retorna a lista reversa
console.log(list.toString()); // Retorna em valor String
console.log(list.toString()[0]); // Retorna a String especifica
console.log(list.join(" - ")) //Retorna a lista em String com incrementação 


//
// Dicionario JSON
//
var frutas={nome: "Maça", cor: "Vermelha"}
console.log(frutas.nome);
console.log(frutas.cor);

var carros=[{nome: "VW", cor: "Black"}, {nome: "Ford", cor: "Azul"}]
console.log(carros);
console.log(carros[1].nome);

//
// IF and ELSE
//

var idade = prompt("Digite sua Idade")
if(idade >= 18){
    alert("Maior de Idade")
}else {
    alert("Menor de Idade")
}

//
// WHILE - Estrutura de Repetição
//

var count = 0
while (count <= 5){
    console.log(count);
    //count = count + 1;
    count++
}

//
// FOR - Estrutura de Repetição
//

var count;
for (count=0; count <=5; count++){
    alert(count);
}

//
// DATE
//

var d = new Date();
alert(d);
alert(d.getMonth());
alert(d.getDay());




//
// Function
//

function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));
console.log(soma(5,10));

//
//

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Mike é Web Developer", "Web Developer", "OutSystems Developer"));

//
//
// var validar; // ex: variavel GLOBAL
//
function validaIdade(idade){
    
    var validar; // variavel LOCAL
    if(idade >= 18){
        validar = true
    }else {
        validar = false
    }return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));


*/
// Function OnClick Button

function welcome(){
    alert("Welcome to JavaScript");
}

// DOM
// Function OnClick Button - InnerHTML

function thanks(){
    document.getElementById("thanks").innerHTML = "<b>Thank You for Click Here</b>"
}

//
// Function REDIRECIONAR
//
function redirecionar(){
    window.open("https://web.digitalinnovation.one/") // Abre em uma nova janela 
    window.location.href = "https://web.digitalinnovation.one/" //Abre na mesma janela
}

//
// Function OnMouseOver & OnMouseOut
//
function hover(){
    document.getElementById("mousehover").innerHTML = "Voce passou o mouse AQUI";
    //alert("Trocar Text");
}

function hoverOut(){
    document.getElementById("mousehover").innerHTML = "Passe o Mouse Aqui";
    //alert("Trocar Text");
}

//
// Function OnMouseOver & OnMouseOut - USANDO ELEMNTO
//
function elementHover(elemento){
    elemento.innerHTML = "Voce passou o mouse AQUI usando Element";
    
}

function elementHoverOut(elemento){
    elemento.innerHTML = "Passe o Mouse Aqui Usando Element";
    
}

//
// Function LOAD
//
function load(){
   alert("Pagina Loading..")
    
}


//
// Function OnChange
//
function functionChange(elemento){
    console.log(elemento.value)
    alert(elemento.value)
     
 }