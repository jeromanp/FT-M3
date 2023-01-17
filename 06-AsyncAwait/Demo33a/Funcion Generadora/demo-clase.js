const sumar = (a,b)=>{
    return a+b
}

const saludar = () =>{
    console.log("Hola mundo");
}

console.log(sumar(4,5));  //9

console.log(saludar());  //undefined, no retorna nada

////////////////////////////////////////////////////////////////////////////////////////////////////////

//funcion generadora
function* generatorShowInstructors(){
    console.log("Inicia Funcion Generadora");
    yield "Franco"
    yield "Tony"  //yield es una pausa
    console.log("Finaliza Funcion Generadora");
    return "Fin"
}

console.log(generatorShowInstructors());    //{[Generator]}

const generatorObject = generatorShowInstructors()
console.log(generatorObject.next());    //{value:"Franco", done:false}    
console.log(generatorObject.next());    //{value:"Tony", done:false}  
console.log(generatorObject.next());    //{value:"Fin", done:true}     

////////////////////////////////////////////////////////////////////////////////////////////////////////
function* idGenerator(){
    let i=0
    while(true){
        i++
        yield i
    }    
}

const idGeneratorObject1 = idGenerator()
console.log(idGeneratorObject1.next());  //{value:1, done:false}
console.log(idGeneratorObject1.next());  //{value:2, done:false}
console.log(idGeneratorObject1.next());  //{value:3, done:false}
console.log(idGeneratorObject1.next());  //{value:4, done:false}
console.log(idGeneratorObject1.next());  //{value:5, done:false}

////////////////////////////////////////////////////////////////////////////////////////////////
const idGeneratorObject2=idGenerator()

const id = idGeneratorObject2.next().value
console.log(id);    //1

const otroId = idGeneratorObject2.next().value
console.log(otroId) //2

const otroIdMas = idGeneratorObject2.next().value
console.log(otroIdMas);   //3

////////////////////////////////////////////////////////////////////////////////////////////////
//para aplicarlo
const idGeneratorObject = idGenerator()
const generateId = ()=> idGeneratorObject.next().value

const newObj={
    id:generateId(),
}
console.log(newObj);    //{id:1}



