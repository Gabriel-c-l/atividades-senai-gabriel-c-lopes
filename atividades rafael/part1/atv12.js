//Dada uma lista de números, encontre o maior e o menor valor.

function encontrarMaiorMenor(lista) {
    if (lista.length === 0) {
        return null;
    }

    let maior = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        } else if (lista[i] < menor) {
            menor = lista[i];
        }
    }

    return { maior: maior, menor: menor };
}

let listaNumeros = [12, 5, 27, 8, 35, 10];
let resultado = encontrarMaiorMenor(listaNumeros);
console.log("O maior valor é:", resultado.maior);
console.log("O menor valor é:", resultado.menor);
