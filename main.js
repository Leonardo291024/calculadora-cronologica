const numero1 = document.getElementById('number-1');
const numero2 = document.getElementById('number-2');
const numero3 = document.getElementById('number-3');
const btn = document.getElementById('calcular');
const resultadoS = document.getElementById('resultadoSuma');
const resultadoR = document.getElementById('resultadoResta');
const resultadoM = document.getElementById('resultadoMulti');
const years = document.getElementById('years');
const months = document.getElementById('months')
const days = document.getElementById('days')


btn.addEventListener('click', calcular);

function calcular(){
    var fechaActual = new Date();
    var anioActual = fechaActual.getFullYear();
    var mesActual = fechaActual.getMonth() + 1;
    var diaActual = fechaActual.getDate() - 1;
    let resultado;

    if(diaActual < numero1.value){
        diaActual += 30;
    }
    
    resultado = diaActual - parseInt(numero1.value) + 1;
    resultadoS.innerHTML = resultado;
    

    if(mesActual < numero2.value){
        mesActual = 12;
    }
    
    resultado = mesActual - parseInt(numero2.value);
    resultadoR.innerHTML = resultado;

    if(mesActual === 12){
        anioActual -= 1;
    }

    resultado = anioActual - parseInt(numero3.value);
    resultadoM.innerHTML = resultado;
    

}

/*let suma; 
let resta;
let multiplicacion;

suma = parseInt(numero1.value) + parseInt(numero2.value) + parseInt(numero3.value);
resta = parseInt(numero1.value) - parseInt(numero2.value) - parseInt(numero3.value);
multiplicacion = parseInt(numero1.value) * parseInt(numero2.value) * parseInt(numero3.value);

resultadoS.innerText =  suma + " AÑOS" ;
resultadoR.innerText =  resta  + " MESES";
resultadoM.innerText =  multiplicacion + " DIAS";*/

