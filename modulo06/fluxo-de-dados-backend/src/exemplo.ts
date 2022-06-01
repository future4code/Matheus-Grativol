const validateAge = (age: number) => {
    try {
       console.log("Verificando idade...");
       if(age < 18) {
           const newError = new Error("Menor de idade");
          throw newError
       }
       console.log("Maior de idade");
    } catch(error: any) {
        console.log("Dentro do catch:")
       console.log(error.message)
    }
    console.log('Depois de tudo')
 }
 
validateAge(18)