const nome: string = "Matheus"
const data: string = "24/10/1990"

const dataDiv = data.split("/")

function text (nome:string , data:string[]):string {
    return `Olá me chamo ${nome}, nasci no dia ${data[0]} do mês ${data[1]} do ano de ${data[2]}`
}

console.log(text(nome, dataDiv))