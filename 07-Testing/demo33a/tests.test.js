const {sumar, devuelvePares, promisifiedFunction} = require("./index")

//antes de todo los test
beforeAll(()=>{
    console.log("Vamos a testear la HM");
})

//en cada test
beforeEach(()=>{
    console.log("Vamos!!!");
})

//despues de todos los test
afterAll(()=>{
    console.log("Termianmos la HM");
})

describe("La funcion sumar",() =>{
    it("sumar debe ser una funcion",()=>{
        expect(typeof sumar).toBe ("function")
    })
    it("Deberia retornar false si alguno de los parametros recibidos no es un numero", ()=>{
        expect(sumar(true,false)).toBe(false)
        expect(sumar(5,"hola")).toBe(false)
        expect(sumar([],58)).toBe(false)
        expect(sumar({},2)).toBe(false)
    })

    it("Deberia retornar la suma de los numeros recibidos",()=>{
        expect(sumar(5,7)).toBe(12)
        expect(sumar(0,0)).toBe(0)
        expect(sumar(-5,5)).toBe(0)
    })
}) 

describe("La funcion devuelvePares",()=>{
    it("devuelvePares debe ser una funcion",()=>{
        expect(typeof sumar).toBe ("function")
    })
    it("Si el array esta vacio, debe retornar false", ()=>{
        expect(devuelvePares([])).toBe(false)
    })
    it("Si algun elemento no es un numero, debe retornar false",()=>{
        expect(devuelvePares(["Hola","chau", false])).toBe(false)
        expect(devuelvePares(["Hola","chau"])).toBe(false)
        expect(devuelvePares([1,2,3,4, true])).toBe(false)
        expect(devuelvePares([1,{},3,[], 5])).toBe(false)
    })
    it("Debe retornar un array con los numeros pares",()=>{
        expect(devuelvePares([1,2,3,4,5,6,7,8,9])).toEqual([2,4,6,8])
        expect(devuelvePares([10,20,30,40,50,60,70,80,90])).toEqual([10,20,30,40,50,60,70,80,90])
        expect(devuelvePares([1,3,5,7,9])).toEqual([])
    })
})

describe("La funcion promisifiedFunction",()=>{
    it("Deberia retornar el string `Se resolvio` si es llamada con true",()=>{
        return promisifiedFunction(true).then(value=>{
            expect(value).toBe("Se resolvio")
        })
    })

    it("Deberia retornar el string `Se rechazo` si es llamada con false",()=>{
        return promisifiedFunction(false).catch(value=>{
            expect(value).toBe("Se rechazo")
        })
    })
})



