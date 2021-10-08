// EXERCÍCIO 01
function inverteArray(array) {
  let arrayVazio = []

  for (let i = array.length - 1; i >= 0; i--) {
    arrayVazio.push(array[i])
  }
  return arrayVazio
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosCalculados = []
  for (let numeros of array){
    if ( numeros % 2 === 0) {
      let numeroElevado = numeros * numeros
      numerosCalculados.push(numeroElevado)
    }
  }
  return numerosCalculados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayNumerosPares = []
  for(let item of array){
    if (item % 2 === 0) {
      arrayNumerosPares.push(item)
    }
  }
  return arrayNumerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(let numeroDaVes of array){
    if (numeroDaVes > maiorNumero) {
      maiorNumero = numeroDaVes
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
  const arrayBoo = [
    booleano1 && booleano2 && !booleano4,
    (booleano1 && booleano2) || !booleano3,
    (booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ]
  return arrayBoo
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []
  for (let i = 0; numerosPares.length < n; i++) {
    if (i % 2 === 0) {
      
      numerosPares.push(i)
    }
  }
  return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  const equlatero = 'Equilátero'
  const isosceles = 'Isósceles'
  const ecaleno = 'Escaleno'
  if (a === b && b === c) {
    return equlatero
  }else if (a !== b && b !== c && a !== c) {
    return ecaleno
  }else{
    return isosceles
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maiorNumero
  let menorNumero
  
    if (num1 >= num2) {
      maiorNumero = num1
      menorNumero = num2
    }else if ( num1 <= num2) {
      maiorNumero = num2
      menorNumero = num1
    }
    
  let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
  let resultado = {maiorNumero: maiorNumero, maiorDivisivelPorMenor: maiorDivisivelPorMenor, diferenca: maiorNumero - menorNumero}

    return resultado
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  novaArray = []
  for (item of array) {
    let contador = 0
    for(itemComparado of array){
      if (item > itemComparado){
        contador = contador + 1
      }
    }
    novaArray[contador] = item
  }
  return [ array[array.length - 2], array[1]]
}

// EXERCÍCIO 11
function ordenaArray(array) {
  novaArray = []
  for (item of array) {
    let contador = 0
    for(itemComparado of array){
      if (item > itemComparado){
        contador = contador + 1
      }
    }
    novaArray[contador] = item
  }
  return novaArray
}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
