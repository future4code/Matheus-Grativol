const lista = ["matheus", "daniela"]

const addItem = ()=>{
    lista.push(process.argv[2])
}

console.log(addItem(), lista)
