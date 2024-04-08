//Conte quantos números pares e ímpares existem de 1 a 100.
let pares = 0;
let impares = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Quantidade de números pares de 1 a 100:", pares);
console.log("Quantidade de números ímpares de 1 a 100:", impares);
