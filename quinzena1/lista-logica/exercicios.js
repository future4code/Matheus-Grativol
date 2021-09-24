// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt("Qual a altura do retangulo?"))
  const largura = Number(prompt("Qual a largura do retangulo?"))

  console.log(altura * largura)
  // escreva seu código aqui
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimentoUsuario = Number(prompt("Em que ano você nasceu?"))

  console.log(anoAtual - anoNascimentoUsuario)
  // escreva seu código aqui
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt("Qual o peso da pessoa?"))  // escreva seu código aqui
  const altura = Number(prompt("Qual a altura da pessoa?"))  // escreva seu código aqui

  console.log(peso/(altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // escreva seu código aqui
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const corFavorita1 = prompt("Primeira cor favoritas?")
  const corFavorita2 = prompt("Segunda cor favoritas?")
  const corFavorita3 = prompt("terceira cor favoritas?")
  const array = []
  array.push(corFavorita1, corFavorita2, corFavorita3)

  console.log(array)
  // escreva seu código aqui
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const respostaUsuario = prompt("Diga alguma coisa?")
  console.log(respostaUsuario.toUpperCase())
  // escreva seu código aqui
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoteatro = Number(prompt("Qual o custo de um espetáculo de teatro?"))
  const custoIngresso = Number(prompt("Qual o valor so ingresso?"))

  console.log(custoteatro / custoIngresso)
  // escreva seu código aqui
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt("Diga alguma coisa?")
  const string2 = prompt("Diga alguma coisa?")

  console.log(string1.length === string2.length)
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("Diga alguma coisa?")
  const string2 = prompt("Diga alguma coisa?")
  console.log(string1.toUpperCase() === string2.toUpperCase())

  // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoDeNascimento = Number(prompt("Em que ano você nasceu?"))
  const anoEmicaoIdentidade = Number(prompt("Qual o ano de emisão da sua identidade?"))
  const idade = anoAtual - anoDeNascimento
  const idadeIndentidade = anoAtual - anoEmicaoIdentidade

  const calculoRenovacao20 = idade <= 20 === idadeIndentidade >= 5

  const calculoRenovacao50 = idade > 20 <= 50 === idadeIndentidade >= 10

  const calculoRenovacaoMais50 = idade > 50 === idadeIndentidade > 15
  
  const resultado = calculoRenovacao20 !== calculoRenovacao50 === calculoRenovacaoMais50

  console.log(resultado)
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  const anoUsuario = Number(prompt("Informe um ano?"))
  const multiplosDe400 = anoUsuario % 400 === 0
  const multiplosDe4 = anoUsuario % 4 === 0
  const multiplosDe100 = anoUsuario % 100 !== 0

  // let anoBissexto = prompt("informe o ano")
  // console.log(anoBissexto % 4 == 0 && anoBissexto % 100 != 0 || anoBissexto % 400 == 0)

  
  // const resultado = multiplosDe400 === multiplosDe4 !== multiplosDe100

  console.log(multiplosDe4 && multiplosDe100 || multiplosDe400)
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idadeUsuario = prompt("Você tem mais de 18 anos?")
  const ensinoMedioUsuario = prompt("Você possui ensino médio completo?")
  const disponibilidadeUsuario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(idadeUsuario === "sim" && ensinoMedioUsuario === "sim" && disponibilidadeUsuario === "sim")

  // escreva seu código aqui
}