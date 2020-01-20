var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura); 

    if(!pesoEhValido){
        pesoEhValido = false;
        tdPeso.textContent = "Peso inválido";
        paciente.classList.add(paciente-invalido); 
    }
    if(!alturaEhValida){
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida";
        paciente.classList.add(paciente-invalido);
    }
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImC(peso,altura);
        tdImc.textContent = imc;

    }
}
function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImC(peso, altura){
    var imc = o;
    imc = peso / (altura * altura); 
    return imc.toFixed(2);
}





 