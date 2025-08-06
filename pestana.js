// Aplicación Promedio Trimestre
let notas = [7,9,10,4,8,3,7,6,7,2,6,4,9];

let suma = 0;
for (let i = 0; i < notas.length; i++){
    suma += notas[i];
}

let promedio = suma/notas.length;
console.log("El promedio del trimestre es: " + promedio);

//Muestra de solo numeros pares
let numeros = [1,2,3,4,5,6,7,8,9,10]

let numero = 2; 

while (numero <= 10) {
  console.log(numero); 
  numero += 2;         
}

//Autos
let autos = ['gol','clio','polo','fiesta','HB20','palio'];

for (let i = 0; i < autos.length; i++) {
  if (autos[i] === "fiesta") {
    alert("El auto se encuentra en el listado en la posición " + i + ".");
  }
}

//Elevar el numero
let Numeros = [10, 6, 77, 2, 5];

for (let i = 0; i < Numero.length; i++) {
    let cuadrado = Numero[i] * Numero[i];
    console.log(cuadrado);
  }