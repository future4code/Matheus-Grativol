/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


const inicioJogo = confirm("Boas vindas ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?") 

if (inicioJogo === false) {
   console.log("O jogo acabou")
}

const carta01Usuario = comprarCarta()
const carta02Usuario = comprarCarta()
const carta03Usuario = comprarCarta()
const carta01Computador = comprarCarta()
const carta02Computador = comprarCarta()
const somaUsuario = carta01Usuario.valor + carta02Usuario.valor
const somaComputador = carta01Computador.valor + carta02Computador.valor

function iniciarRodada(){
   let iniciarJogo = confirm(`Suas cartas são ${carta01Usuario.texto} ${carta02Usuario.texto}. A carta revelada do computador é ${carta01Computador.texto}. 
   \n Deseja comprar mais uma carta?`)
   return iniciarJogo
}

if (carta01Usuario.texto && carta02Usuario.texto !== "A" || carta01Computador.texto && carta02Computador.texto !== "A") {
   iniciarRodada()

}else if(iniciarJogo() === true ){
   const terceiraCarta = confirm(`Suas cartas são ${carta01Usuario.texto} ${carta02Usuario.texto} ${carta03Usuario.texto}. A carta revelada do computador é ${carta01Computador.texto}. 
   \n Deseja comprar mais uma carta?`)
}

