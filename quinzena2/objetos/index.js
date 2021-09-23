console.log("Olá Mundo!")

// Exercícios de interpretação de código 01

// console.log(filme.elenco[0]) = "Matheus Nachtergaele"
// console.log(filme.elenco[filme.elenco.length - 1]) = "Virginia Cavendish"
// console.log(filme.transmissoesHoje[2]) = canal: "Globo", horario: "14h"

// Exercícios de interpretação de código 02

// A
// console.log(cachorro) = nome: "Juca", idade: 3, raca: "SRD"
// console.log(gato) =  nome: "Juba", idade: 3, raca: "SRD",
// console.log(tartaruga) = nome: "Jubo", idade: 3, raca: "SRD",

// B
// A sintaxe ... copia os objetos de um outro objeto.

// Exercícios de interpretação de código 03

// A
// console.log(minhaFuncao(pessoa, "backender")) = false
// console.log(minhaFuncao(pessoa, "altura")) = undefined

// B 
// O primeiro console.log deu false, pq a propriedade desse objeto é um Booleano.
// No segundo console.log deu Undefined, pq não foi declarado esse objeto.



// Exercícios de escrita de código 01

// const objetoApelidos = {
//     nome: "Matheus",
//     apelidos:["Matheuzinho", "beach", "Grativol"],   
// }

// function fraseApelidos(objetoApelidos){
//     console.log(`Eu sou ${objetoApelidos.nome}, mas pode me chamar de: ${objetoApelidos.apelidos[0]}, ${objetoApelidos.apelidos[1]} ou ${objetoApelidos.apelidos[2]}`)
// }

// fraseApelidos(objetoApelidos)


// // B


// const newObjeto = {
//     ...objetoApelidos,
//     apelidos: ["Carioca", "Dunga", "Tio"]
// }

// fraseApelidos(newObjeto)




// Exercícios de escrita de código 02


// const objeto1 = {
//     nome: "Matheus",
//     idade: 30,
//     profissao: "Estudante"
// }

// const objeto2 = {
//     nome: "Daniela",
//     idade: 26,
//     profissao: "Estudante"
// }

// function array(objeto){
//     console.log([objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length])
// }

// array(objeto1)
// array(objeto2)



// const carrinho = []

// const sacolao01 = {
//     fruta: "Laranja",
//     disponibilidade: true,
// }

// const sacolao02 = {
//     fruta: "Abacaxi",
//     disponibilidade: true,
// }
// const sacolao03 = {
//     fruta: "Limão",
//     disponibilidade: true,
// }

// function passandoParaOCarrinho(fruta){
//     const passando = carrinho.push(sacolao01, sacolao02, sacolao03)

//     console.log(passando)
// }

// passandoParaOCarrinho(sacolao01)
// console.log(carrinho)

// function estoqueDisponivel(sacolao01){
//     const estoque = (!sacolao01.disponibilidade); sacolao01.disponibilidade = estoque;
//     return estoque
// }

// estoqueDisponivel(sacolao01)
// estoqueDisponivel(sacolao02)

// console.log(carrinho)

// const nomeUsuario = prompt("Qual o seu nome?")
// const idadeUsuario = Number(prompt("Qual sua idade?"))
// const profissaoUsuario = prompt("Qual a sua profissão")

// const objetoUsuario = {
//     nome: nomeUsuario,
//     idade: idadeUsuario,
//     profisao: profissaoUsuario
// }

// console.log(typeof objetoUsuario)

// const filme01 = {
//     ano: 1972,
//     nome: "O poderoso chefão"
// }

// const filme02 = {
//     ano: 2001,
//     nome: "Shrek"
// }

// function filmes(objeto1 , objeto2){
//     const frase1 =  filme01.ano < filme02.ano
//     const frase2 = filme01.ano === filme02.ano
//     console.log("O primeiro filme foi lançado antes do segundo?", frase1,)
//     console.log("O primeiro filme foi lançado no mesmo ano do segundo?", frase2)
    
// }

// filmes(filme01 , filme02)