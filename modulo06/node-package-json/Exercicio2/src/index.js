// switch(operacao) {
//     case "soma":
//         console.log( numero1 + numero2)
//         break
//     case "sub":
//         console.log(numero1 - numero2)
//         break
//     case "mult":
//         console.log(numero1 * numero2)
//         break
// }

const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

if (operacao === "soma"){
    console.log( numero1 + numero2)
} else if (operacao === "sub"){
    console.log(numero1 - numero2)
}else if (operacao === "mult"){
    console.log(numero1 * numero2)
}else if (operacao === "div"){
    console.log(numero1 / numero2)
}