
type contas = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes: contas[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


// const initialValue: contas[] = clientes

// const seila = (clientes: {}[]) => {
//     var total = clientes.reduce(
//         (acumulador:number, valorAtual:any) => acumulador + valorAtual,
//         0
//     );
//     return total
// }

// const sumWithInitial = clientes.reduce(
//     (previousValue:number, currentValue:any) => previousValue + currentValue,
//     0
// );
// let total = clientes.reduce(function(acumulador:number, valorAtual:number) {
//     return acumulador + valorAtual;
//   }, 0)

// const total = clientes.reduce(function(acumulador:number, valorAtual:number, index:number, cliente) {
//     return acumulador + valorAtual;
//   });
// console.log(seila(clientes.debitos))

