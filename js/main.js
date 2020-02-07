//console.error("Falha ao inicializar");
let titulo = document.querySelector("#titulo");
titulo.textContent = "Etecia Nutrição e Dietética";

//pegar o peso
let paciente = document.querySelector(".paciente");
let tdpeso = paciente.querySelector(".info-peso");
let peso = tdpeso.textContent;
console.log(peso);

//pegar altura
let tdaltura = paciente.querySelector(".info-altura");
let altura = tdaltura.textContent;

let pesoValido = true;
let alturaValida = true;


//Validar dados
if (peso <= 0 || peso > 1000){

    console.error("Peso inválida")
    pesoValido = false
}

if (altura <= 0){

    console.error("Altura inválida");
    alturaValida = false
}

if (pesoValido && alturaValida){

//Calcular IMC
let imc = peso / altura **2;
console.log(imc);
}

//escrever o imc na tabela
let tdimc = paciente.querySelector(".info-imc");
tdimc.textContent = imc;