const sumar = (a,b) => {
    if(typeof a !== "number" || typeof b !== "number")  return false
    //vas a hacer la funcion sumar
    //debe recibir dos numeros como parametro
    //si alguno de esos valores no es un numero, debe retornar false
    //debe retornar la suma de los dos numeros

    //aca va tu codigo
    return a+b;
}

const devuelvePares = (arr)=>{
    //debe recibir un arr de numeros
    //si el arr esta vacio, debe retornar false
    //si un elemento del array no es un numero, retornar false
    //debe retornar un nuevo array, con los numeros pares
    if(!arr.length) return false

    const pares = []

    for(const num of arr){
        if(typeof num !== "number") return false
        if(num % 2 === 0) pares.push(num)
    }
    return pares
}

const promisifiedFunction = (flag)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(flag) resolve ("Se resolvio")
            else reject ("Se rechazo")
        },1000)
    })
}

module.exports={
    sumar,
    devuelvePares,
    promisifiedFunction
}