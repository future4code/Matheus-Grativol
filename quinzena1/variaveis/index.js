// Exercícios de interpretação de código

// Exercício 1 

// console.log(b) = 10
// console.log(a, b) = 10 5

// Exercicio 2 
// console.log(a, b, c) = 20 undefined 10

// Exercicio 3 

// let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
// let ganhosPorDia = prompt("Quanto você recebe por dia?")
// alert("Voce recebe ${ganhosPorDia/horasTrabalhadasPorDia} por hora")

// Exercícios de escrita de código

// Exercicio 1

// A
let nome
// B
let idade

// C
console.log(typeof nome)
console.log(typeof idade)

// D
// foi impresso como Undefined porque nao foi atribuido um valor a variavel.

// E
const nome = prompt("Qual seu nome?")

let idade = prompt("Qual sua idade")

// F
console.log(typeof nome)
console.log(typeof idade)

// Foi impresso como String as duas variaveis, pq o prompt sempre recebera uma String.

// G
console.log("Olá", nome,", você tem", idade, "anos")

// Exercicio 2

let souCasado = prompt("Você é casado?")
let tenhoFilho = prompt("Você tem filho")
let jaCaiu = prompt("Seu time ja caiu pra segunda divisão?")

let casado = souCasado
let FilhoLindo = tenhoFilho
let nuncaCaiu = jaCaiu

console.log("Você é casado? -", casado)
console.log("Você tem Filho? -", FilhoLindo)
console.log("Seu time já caiu pra segunda divisão? -", nuncaCaiu)

// Exercicio 3

let a = 10
let b = 25

const c = a

a = b
b = c

// Depois de trocados, teremos o seguinte resultado:

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 

// Desafio

let idadeTexto = prompt("Qual sua idade?")
let diaDoMesTexto = prompt("Que dia do mês é hoje?")

const idadeNumero = Number(idadeTexto)
const diaDoMesNumero = Number(diaDoMesTexto)

let idade = idadeNumero
let dia = diaDoMesNumero

console.log(idade + dia)
console.log(idade * dia)

