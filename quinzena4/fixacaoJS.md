```js
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let prova1 = p1 * 2
  let prova2 = p2 * 3
  let exercicio = ex
  let notaFinal = (prova1 + prova2 + exercicio) / 6
  
  if (notaFinal >= 9) {
    return "A"
  } else if ( notaFinal >= 7.5) {
    return "B"
  }else if (notaFinal >= 6) {
    return "C"
  }else{
    return "D"
  }
  return calculaNota
}
```JS