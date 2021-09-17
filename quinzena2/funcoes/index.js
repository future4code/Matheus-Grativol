
// Exercícios de interpretação de código 01

// A
// console.log(minhaFuncao(2)) = 10
// console.log(minhaFuncao(10)) = 50

// B
// não vai aparecer nada no console.


// Exercícios de interpretação de código 02


// Essa função retorna um texto em caixa alta e verifica se a palavra "cenoura" se encontra na string do prompt
// A utilidade é receber do usuario uma frase e transformar ela pra caixa alta e verificar se a palavra "cenoura" se encontra na frase passando o valor de true ou false


// B

// Eu gosto de cenoura / Saida = "EU GOSTO DE CENOURA" true
// CENOURA é bom pra vista / Saida = CENOURA É BOM PRA VISTA true
// Cenouras crescem na terra / Saida = CENOURAS CRESCEM NA TERRA false

// Escreva as funções explicadas abaixo 01
// A
// function mensagem(){
//     const minhaMensagem = "Eu sou Matheus, tenho 30 anos, moro no Rio de Janeiro e sou estudande"
//     console.log(minhaMensagem)
// }
// mensagem()

// B

// function TextoDeApresentacao(nome, idade, cidade, profisao){
//     console.log("Eu sou", nome, "tenho", idade, "anos, moro em ", cidade, " e sou", profisao)
// }

// TextoDeApresentacao("Matheus", 30, "Rio de Janeiro", "estudante")

// Escreva as funções explicadas abaixo 02

// A
// function somaDoisNumeros(numero1, numero2){
//     const soma =  numero1 + numero2
//     return soma
// }

// console.log(somaDoisNumeros(10, 20))

// B

// function ComparacaoDoisNumeros(numero1, numero2){
//     const comparacao = numero1 >= numero2
//     return comparacao
// }

// console.log(ComparacaoDoisNumeros(10, 20))
// console.log(ComparacaoDoisNumeros(30, 20))

// C

// function verificacaoDeNumero(numero){
//     const verificacao = numero % 2 === 0
//     return verificacao
// }

// console.log(verificacaoDeNumero(10))

// D

// function recebendoMensagemDeParametro(mensagem){
//     const frase = mensagem

//     console.log(frase.toUpperCase() , frase.length)
// }

// recebendoMensagemDeParametro("Matheus Grativol")

// Escreva as funções explicadas abaixo 3

// function fazendoASoma(numero1, numero2){
//     const soma = numero1 + numero2
//     return soma
// }
// function fazendoASubtrcao(numero1, numero2){
//     const subtrcao = numero1 - numero2
//     return subtrcao
// }
// function fazendoAMultiplicacao(numero1, numero2){
//     const multiplicacao = numero1 * numero2
//     return multiplicacao
// }
// function fazendoADivisao(numero1, numero2){
//     const divisao = numero1 / numero2
//     return divisao
// }

// const numeroUsuario1 = Number(prompt("Diga o primeiro número:"))
// const numeroUsuario2 = Number(prompt("Diga o segundo número:"))
// console.log(fazendoASoma(numeroUsuario1, numeroUsuario2), 
// fazendoASubtrcao(numeroUsuario1, numeroUsuario2), 
// fazendoAMultiplicacao(numeroUsuario1, numeroUsuario2), 
// fazendoADivisao(numeroUsuario1, numeroUsuario2))

// console.log("Números Inseridos:", numeroUsuario1, " e ", numeroUsuario2)
// console.log("Soma: ", fazendoASoma(numeroUsuario1, numeroUsuario2))
// console.log("Diferança: ", fazendoASubtrcao(numeroUsuario1, numeroUsuario2))
// console.log("Multiplicação: ", fazendoAMultiplicacao(numeroUsuario1, numeroUsuario2))
// console.log("Divisão: ", fazendoADivisao(numeroUsuario1, numeroUsuario2))

// DESAFIO

// const parametroImprimir = (mensagem) => {
//     const r = (mensagem)
//     console.log(r)
// }

// const somaDeParametros = (valor1, valor2) => {
//     const soma = valor1 + valor2
//     parametroImprimir(soma)
// }

// somaDeParametros(10, 10)

// DESAFIO 2

// function calcularOTeorema(cateto1, cateto2){
//     const calcularHipotenusa = (cateto1 * cateto1 + cateto2 * cateto2)
//     const calculoFinal = calcularHipotenusa / (calcularHipotenusa ** 0.5)
//     return calculoFinal
// }

// console.log(calcularOTeorema(10, 20))
















