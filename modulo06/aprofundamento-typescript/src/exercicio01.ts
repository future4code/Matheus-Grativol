const minhaString: string | number = 14
const meuNumero :number | string = "matheus"

type Pessoa = {
    nome: string
    idade: number
    corFavorita: CorArcoIris
}

enum CorArcoIris {
    vermelho = "vermelho",
    laranja = "laranja",
    amarelo = "amarelo",
    verde = "verde",
    azul = "azul",
    violeta = "violeta"
}

const pessoa01: Pessoa = {
    nome: "Matheus",
    idade: 31,
    corFavorita: CorArcoIris.vermelho
}

const pessoa02: Pessoa = {
    nome: "Daniela",
    idade: 27,
    corFavorita: CorArcoIris.azul
}

const pessoa03: Pessoa = {
    nome: "Salomão",
    idade: 1,
    corFavorita: CorArcoIris.verde
}

const familia = []
familia.push(pessoa01,pessoa02,pessoa03)

console.table(familia)