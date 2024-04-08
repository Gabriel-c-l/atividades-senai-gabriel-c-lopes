//cacule o fatorial de um numero dado

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1; 
    }

    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

let numero = 5;
let fatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é:`, fatorial);
