const ladoA: number = 11
const ladoB: number = 13
const ladoC: number = 12

function checaTriangulo (ladoA:number, ladoB:number, ladoC:number): string{
    if(ladoA !== ladoB && ladoB !== ladoC){
        return "Escaleno"
    }else if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }else{
        return "Isósceles"
    }
}

console.log(checaTriangulo(ladoA,ladoB,ladoC))