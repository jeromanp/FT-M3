const axios = require("axios");
//2 formas de poner el axios:

//1
// axios.get("https:rickandmortyapi.com/api").then(
//   (res) => {
//     console.log(res.data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

//2
// axios.get("https:rickandmortyapi.com/api")
// .then((res)=>{
//     console.log(res.data);
// })
// .catch((error) => console.log(error))

////////////////////////////////////////////////////////////////////////////////////////////////////
//las 2 formas de escribir funcion asincrona
// async function asyncFunction (){}
// const asyncFunction = () => {}

// async function asyncFunction() {
//   //con await ==> ESPERA a que se resuleva la promesa del axios.get
//   //simula sincronia dentro de la sincronia de las promesas
//   //termina de esperar y sigue ejecutando
//   //
//   const data = await axios.get("https:rickandmortyapi.com/api");
//   console.log(data.data);
//   console.log("Termine");
//   return data.data;

//   //la promesa tardaba en resolver, mientras tanto seguia ejecutando codigo
//   //para despues imprimir la data con la funcion creada
//   //corre el get en paralelo con el codigo siguiente
//   axios.get("https:rickandmortyapi.com/api").then(
//     (res) => console.log(res.data),
//     (err) => console.log(err)
//   );
//   console.log("Termine");
// }

// asyncFunction().then(res=>console.log("asyncFunction ==>",res))

////////////////////////////////////////////////////////////////////////////////////////////////////

//si son varios axios.get, y se resuelvan en paralelo
async function moreAxios(){
    const urls = [
        "https:rickandmortyapi.com/api/character",
        "https:rickandmortyapi.com/api/character",
        "https:rickandmortyapi.com/api/character",
        "https:rickandmortyapi.com/api/character",
        "https:rickandmortyapi.com/api/character",
    ]

    const promises = urls.map((url)=> axios.get(url))

    Promise.all(promises).then((res)=>
        res.forEach((obj)=>console.log(obj.data)))
}

// moreAxios().then(res => console.log("asyFunction ==>",res))

////////////////////////////////////////////////////////////////////////////////////////////////////

//si solo es un proceso corto, rapido
async function oneAxios(){
    const data = await axios.get("https:rickandmortyapi.com/api/character")
    const char = data.data
    console.log(char);
}
oneAxios().then(res => console.log("asyFunction ==>",res))

////////////////////////////////////////////////////////////////////////////////////////////////////

