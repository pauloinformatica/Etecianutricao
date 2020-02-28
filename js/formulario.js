let botao = document.querySelector("#botao_cadastrar");

botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    let formulario = document.querySelector("#form-paciente");
    let nome    = formulario.nome.value;
    let peso    = formulario.peso.value;
    let altura  = formulario.altura.value;
    let gordura = formulario.gordura.value;
    
    // criar linha
    
    let table = document.querySelector("#tabela-pacientes");
    let tr = document.createElement("tr");
    tr.classList.add("paciente");

    
    // criar TD


    let tdNome = document.createElement("td");
    tdNome.textContent = nome;
    tr.appendChild(tdNome);

    let tdPeso = document.createElement("td");
    tdPeso.textContent = peso;
    tr.appendChild(tdPeso);

    let tdAltura = document.createElement("td");
    tdAltura.textContent = altura;
    tr.appendChild(tdAltura);

    let tdGordura = document.createElement("td");
    tdGordura.textContent = gordura;
    tr.appendChild(tdGordura);


    table.appendChild(tr);


   // console.log(tr); 
});

    



