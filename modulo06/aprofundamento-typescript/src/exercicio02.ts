// type amostraDeIdades = {
//     numeros: number[],
    
// }

type Estatisticas = {
    maior: number
    menor:number
    media: number
}

const numeros :number[]=[12,21,45,44,13,54]

function obterEstatisticas(numeros:number[]):Estatisticas{

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:Estatisticas= {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.table(obterEstatisticas(numeros))