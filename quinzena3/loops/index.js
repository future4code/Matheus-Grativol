console.log("Olá mundo!")

// Exercícios de interpretação de código 01

// Enquanto i for menor que 5 ele vai almentar 1 e somar com a variavel valor ate o i chegar a 4.

// Exercícios de interpretação de código 02

// A
// O console.log vai imprimir os numeros maiores que 18

// B
// Pode usar o for
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let i = 0; i < lista.length; i++) {  
//     const element = lista[i]
//     console.log(element)
// }

// Exercícios de interpretação de código 02

// cada vez que o código rodar ele almenta a contidade de *. vez 0 *; vez 1 **; vez 2 *** vez 3 ****. 

// Exercícios de escrita de código 01

// let quantidadeDeBichinhos = Number(prompt("Quantos bichinhos de stimação você tem?"))

// if (quantidadeDeBichinhos === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// }else{
//     let arrayBichinhos = []
//     for (let i = 0; i < quantidadeDeBichinhos; i++) {
//         let bichinhos = prompt("Digite o nome do seu bichinho de stimação, um por vez!")
//         arrayBichinhos.push(bichinhos)
//     }
//     console.log(arrayBichinhos)
// }

// Exercícios de escrita de código 02

let arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// A
// function exercicio2A (numeros){
//     let resultado = []
//     for (let i = 0; i < arrayOriginal.length; i++) {
//         let array = arrayOriginal [i];
//         resultado.push(array)
//     }
//     return resultado
// }
// console.log(exercicio2A(arrayOriginal))

// B

// function exercicio2B (numeros) {
//     let resultado = []
//     for (let i = 0; i < arrayOriginal.length; i++) {
//         let array = arrayOriginal [i] / 10;
//         resultado.push(array)
//     }
//     return resultado
// }

// console.log(exercicio2B(arrayOriginal))

// C

// function exercicio2C (numeros) {
//     let novoArray = []

//     for (let i = 0; i < arrayOriginal.length; i++) {
//         if ( arrayOriginal[i] % 2 === 0) {
//         novoArray.push(arrayOriginal[i])
//         }
//     }
//     return novoArray
// }
// console.log(exercicio2C(arrayOriginal))


// for (let numero of arrayOriginal) {
//     if (numero % 2 === 0) {
//         novoArray.push(numero)
//     }
// }
// console.log(novoArray)

// D

// function exercicio2D (array) {
//     let arraystring = []

//     for (let i = 0; i < arrayOriginal.length; i++) {
//     let string = "O elemeto do índex " + i + " é: " + arrayOriginal[i]
//     arraystring.push(string)
//     }
//     return arraystring
// }

// console.log(exercicio2D(arrayOriginal))

// function numeroMaior (numero) {
//     let maiorNumero = 0
//     for (let i = 0; i < arrayOriginal.length; i++) {
//         numeroDaVez = arrayOriginal[i]
//         if (numeroDaVez > maiorNumero) {
//             maiorNumero = numeroDaVez
//         }
//     }
//     return maiorNumero
// }

// console.log(numeroMaior(arrayOriginal))

// function numeroMenor (numero) {
//     let menorNumero = arrayOriginal[0]
//     for (let i = 0; i < arrayOriginal.length; i++) {
//         numeroDaVez = arrayOriginal[i]
//         if (numeroDaVez < menorNumero) {
//             menorNumero = numeroDaVez
//         }
//     }
//     return menorNumero
// }

// console.log(numeroMenor(arrayOriginal))


// function menorNumero (numero) {
//     let numeroMenor = arrayOriginal[0]
//     for (let numeroDaVez of arrayOriginal) {
//         if(numeroDaVez < numeroMenor){
//             numeroMenor = numeroDaVez
//         }
//     }
//     return numeroMenor
// }
// console.log(menorNumero(arrayOriginal))