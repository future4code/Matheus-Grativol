console.log("Olá mundo!")

// Exercícios de interpretação de código 01

// A
// Vai mostar o array, o indece e cada objeto.

// Exercícios de interpretação de código 02
// A
// vai ser impresso um array do mesmo tamnaho com os nomes que estao dentro de cada objeto. 

// Exercícios de interpretação de código 03
// A
// vai ser impresso um array com os objetos q nao tem a palavra "chijo"


// Exercícios de escrita de código 01

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

// // A

// function imprimirNomeDog (item ){
//     return item.nome
// }

// const nomeDogs = pets.map(imprimirNomeDog)
// console.log(nomeDogs)

// // B

// function cachorrosSalsicha (item) {
//     return item.raca === "Salsicha"
// }

// const salsichasDog = pets.filter(cachorrosSalsicha)
// console.log(salsichasDog)

// C

// function pegarPoodles (item) {
//     return item.raca === "Poodle"
// }

// const arrayPoodles = pets.filter(pegarPoodles)
// console.log(arrayPoodles)

// function pegarNome (item) {
//     return item.nome
// }

// const nomePets = arrayPoodles.map(pegarNome)
// console.log(nomePets)

// const nomeTexto = nomePets.map((item) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item} !`
// })
// console.log(nomeTexto)

// Exercícios de escrita de código 02

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// A

// function pegarNomes (item) {
//     return item.nome
// }

// const nomeProduto = produtos.map(pegarNomes)
// console.log(nomeProduto)

// B

// const nomepreco = (item) =>{
//     const novoValor = item.preco * 0.95
//     const resultado = { nome: item.nome , preco: novoValor}
//     return resultado
// }

// const resultadoComDesconto = produtos.map(nomepreco)
// console.log(resultadoComDesconto)

// C

// const bebidasObjeto = produtos.filter((item) =>{
//     return item.categoria === "Bebidas"
// })

// console.log(bebidasObjeto)

// D

// const nomeYpe = produtos.filter((item) =>{
//     return item.nome.includes("Ypê")
// })

// console.log(nomeYpe)

// E

// const nomeYpe2 = nomeYpe.map((item) =>{
//     return ` Compre ${item.nome} por ${item.preco} `
// })

// console.log(nomeYpe2)


