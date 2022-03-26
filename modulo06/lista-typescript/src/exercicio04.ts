enum SETOR {
    marketing = "marketing",
    vendas = "vendas",
    financeiro = "financeiro"
}

type nome = {
    nome : string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

const array: nome[] = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.marketing, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.vendas, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.financeiro, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.marketing, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.financeiro, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.vendas, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.marketing, presencial: true }
]

function filterPessoas (setor:string, presencial:boolean) {
    return array.filter((array)=>{
        return setor === array.setor && presencial === array.presencial
    }) 
    
}

console.table(filterPessoas("marketing", true))