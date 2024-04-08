//Imprima os números primos de 1 a 50.

function isPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Números primos de 1 a 50:");
for (let i = 1; i <= 50; i++) {
    if (isPrimo(i)) {
        console.log(i);
    }
}
