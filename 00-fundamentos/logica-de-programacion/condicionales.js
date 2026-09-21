// Parte 1: Condicionales
const edad = 46;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else if (edad >= 13) {
    console.log("Eres un adolescente.");
}else {
    console.log("Eres un niño.");
}   

// Parte 2: bucle for - imprime los numeros pares del 0 al 10
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i, "es un número par.");
    }
}

// Parte 3: bucle while - cuenta regresiva desde 5 hasta 1
let contador = 5;
while (contador > 0) {
    console.log("Faltan: ", contador);
    contador--;
}

console.log("¡Despegue!");