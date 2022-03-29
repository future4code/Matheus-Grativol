// const dataDeNasci: string = "24/10/1990"
// const dataCarteira: string = "15/07/2001"

// const renovacao = (dataN:string, dataC:string):boolean =>{
//     if(dataN.getIme()){

//     }
// }


const instrutores = [
    {
        id: 1,
        name: "Mateus Gesualdo",
        age:26
    },
    {
        id: 2,
        name: "Leticia chijo",
        age:25
    },
    {
        id: 3,
        name: "Fernanda Alfonsi",
        age:37
    }
]

const buscaId = (id:number) =>{
    const resultado = instrutores.filter((res: any):any=> {
        return res.id === id
    })
    return `${resultado[0].name} tenho ${resultado[0].age} anos`
}
console.log(buscaId(2))