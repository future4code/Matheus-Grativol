enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type filme = {
	nome: string,
	ano: number,
	genero: GENERO,
	pontuacao?: number
}


function filmes (nome:string, ano:number, genero:GENERO, pontuacao?:number):filme{
	return{
		nome: nome,
		ano: ano,
		genero: genero,
		pontuacao: pontuacao
	} 
}

console.log(filmes("Duna", 2021, GENERO.ACAO))