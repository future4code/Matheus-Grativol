type user = {
    name : string,
    email : string,
    role : "user" | "admin"
}

const users: user[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

const filterPerson = (users:{}[]) => {
    const filter = users.filter((user:any)=>{
        return user.role === "admin"
    })

    const map = filter.map((email:any)=>{
        return email.email
    })

    return map
}

console.log(filterPerson(users))