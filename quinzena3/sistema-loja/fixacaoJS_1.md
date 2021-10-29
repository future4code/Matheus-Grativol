``` Javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 let salarioFixo = 2000
 let comisao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
 return salarioFixo + comisao
}

function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  if (quantidade < 12) {
    return quantidade * 1.30
  }else if (quantidade >= 12) {
    return quantidade * 1.00
  }
}
```