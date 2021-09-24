console.log("Olá Mundo!")

// Exercícios de interpretação de código 01

// A
// O código testa se o numero é par.

// B
// Se o numero for par ele imprime "Passou no teste".

// C
// Se o número for impar ele imprime "Não passou no teste".

// Exercícios de interpretação de código 02

// A
// O código serve para imprimir a fruta escolhida pelo usuario e o valor.

// B
// O preço da fruta maça é R$ 2.25

// C
// O preço da fruta Pêra é R$ 5

// Exercícios de interpretação de código 03

// A
// A primeira linha faz uma pergunta para o usuario e armazena a resposta em uma variavel.

// B
// se o usuário digitar 10 a mensagem é "Esse número passou no teste" e um erro
// se o usuário digitar -10 a mensagem é um erro

// C
// O erro é que o console.log(mensagem) nao encontra a variavel mensagem que esta dentro do if,
// ela teria que estar fora ou ter um retur ou um console.log mandando ela para fora do bloco.

// Exercícios de escrita de código 01

// A

// const idadeUsuario = Number(prompt("Qual a sua idade?"))

// if (idadeUsuario >= 18){
//     console.log("Você pode dirigir!")
// }else{
//     console.log("Você não pode dirigir.")
// }

// Exercícios de escrita de código 02


// const turnoDoDiaAluno = prompt("Em que turno você estuda, digite 'M' para Matutino, 'V' para Vespertino e 'N' para Noturno")

// if(turnoDoDiaAluno === "M"){
//     console.log("Bom Dia!")
// }else if (turnoDoDiaAluno === "V") {
//     console.log("Boa Tarde!")
// }else if (turnoDoDiaAlunon === "N") {
//     console.log("Boa Noite!")
// }else{
//     console.log("digite 'M' para Matutino, 'V' para Vespertino e 'N' para Noturno")
// }

// Exercícios de escrita de código 03

// switch(turnoDoDiaAluno.toLocaleUpperCase()){
//     case "M":
//         console.log("Bom Dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("digite 'M' para Matutino, 'V' para Vespertino e 'N' para Noturno")
// }

// Exercícios de escrita de código 04

// const generoFilme = prompt("Qual o gênero do filme qua vão assistir?")
// const precoDoIngresso = Number (prompt("Qaul o preço do ingresso?"))

// if (generoFilme.toLocaleLowerCase() === "fantasia" && precoDoIngresso < 15) {

//     const lanchinhoUsuario = prompt("Qual lanchinho você vai comprar?")
//     console.log("Bom Filme!") 
//     console.log("Aproveite o seu", lanchinhoUsuario)
// }else{
//     console.log("Escolha outro filme :(" )
// }


const nomeCompletoUsuario = prompt("Qaul o Seu nome Completo?")
const tipoDejog = prompt("Qual tipo de jogo? 'IN' para internacional; e 'DO' para doméstico")
const etapaDoJogo = prompt("Qual etapa do jogo? 'SF' para semi-final; 'DT' para decisão de terceiro lugar; e 'FI' indica final")
const categoria = Number (prompt("Qual categoria? 1, 2, 3 ou 4"))
const quantidadeDeIngressos = Number (prompt("Quantos ingressos?"))

if (tipoDejog.toLocaleUpperCase() === "IN") {
    console.log("Tipo de jogo: Internacional")
}else{
    console.log("Tipo de jogo: Doméstico")
}

if (etapaDoJogo.toLocaleUpperCase() === "SF") {
    console.log("Etapa do jogo: Semi-Final")
}else if (etapaDoJogo.toLocaleUpperCase() === "DT") {
    console.log("Etapa do jogo: Decisão de terceiro lugar")
}else{
    console.log("Etapa do jogo: Final")
}

if (categoria === 1 ) {
    console.log("Categoria: 1")
}else if (categoria === 2) {
    console.log("Categoria: 2")
}else if (categoria === 3) {
    console.log("Categoria: 3")
}else{
    console.log("Categoria: 4")
}

console.log("Quantidade de Ingressos: ", quantidadeDeIngressos)

if (tipoDejog.toLocaleUpperCase() === "IN" && etapaDoJogo === "SF" && categoria === 1) {
    console.log("valor do Ingresso: U$ ", 1.320,00 * 4,10)
}
























