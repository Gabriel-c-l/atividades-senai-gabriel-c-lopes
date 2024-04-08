// altero o programa anterios para fornecer a tabuada do numero que o usuario pedir

function tabuada() {
   
    let numero = document.getElementById('numero').value;
    let resultado = document.getElementById(`resultado`);
    let n = Number(numero);
    resultado.innerHTML = "";
    for(let i = 1; i <= 10; i++){
        let multiplicacao = n * i;
        console.log(n + "x" + i + "=" + multiplicacao);
        resultado.innerHTML += n + "x" + i + "=" + multiplicacao + "<br>";
    }
}
