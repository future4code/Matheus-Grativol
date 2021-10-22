```JS
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let contador = 0
  
  for (numero of arrayDeNumeros) {
    if (numero === numeroEscolhido) {
      contador ++
    }
  }
  if (contador > 0) {
    return `O número ${numeroEscolhido} aparece ${contador}x`
  }else{
    return "Número não encontrado"
  }
}