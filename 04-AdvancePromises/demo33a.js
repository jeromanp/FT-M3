// 4 Casos posibles: 

  //1. se resuelve y TENGO successHandler => la promiseB se resuelve a lo que retorna el successHAndler
    //1.1 cuando la promiseA no retorna nada
    //1.2 cuando la promiseA retorna algo
  //2. se resuelve y NO TENGO successHAndler => promiseB se resuelve al mismo valor de promiseA
  //3. se rechaza y TENGO errorHandler => promiseB se rechaza a lo que retorna errorHAndler
     //3.1 si la promiseD, tienen dos .catch, el valor de rechazo es igual al valor del primer catch()
     //3.2. teniedo dos catchs, sin que el primero retorne algo
  //4. se rechaza y NO TENGO errorHAndler => promiseB se rechaza al mismo valor de promiseA

//******************************************************************************************************** */

//1. se resuelve y TENGO successHandler => la promiseB se resuelve a lo que retorna el successHAndler

    //1.1. cuando promiseA no retorna nada, se resuelve promiseA, el successHandler no retorna nada, por eso es undefined en el segundo then()
const promise_A = new Promise((resolve, reject) => {
  resolve("Valor de resolve");
});

const promise_B = promise_A.then((value) =>
  console.log("1.1. promise_A ----->", value)
);

promise_B.then((value) => console.log("1.1. promise_A ----->", value)); //undefined

//******************* */

    //1.2. cuando promiseA retorna algo

//la promiseB se resuelve a lo que retorna el successHAndler
const promiseA = new Promise((resolve, reject) => {
  resolve("Valor de resolve");
});

const promiseB = promiseA.then((value) => "Hola mundo");

promiseB.then((value) => console.log("1.2. promiseA ----->", value)); //Hola mundo

//************************************************************************************************************************* */
  
//2. se resuelve y NO TENGO successHAndler => promiseB se resuelve al mismo valor de promiseA

//si la promiseC no tiene un successHandler, cuando el then no tiene nada, retoma el de promiseC

const promiseC = new Promise((resolve, reject) => {
  resolve("Valor de resolve");
});

promiseC
  .then() //salta el then y el valor de resolucion es la promiseC
  .then((value) => console.log("2.1. promiseC ----->", value));

//*************************************************************************************************************** */

//3. se rechaza y TENGO errorHandler => promiseB se rechaza a lo que retorna errorHAndler

    //3.1 si la promiseD, tienen dos .catch, el valor de rechazo es igual al valor del primer catch()

const promiseD = new Promise((resolve, reject) => {
  reject("Valor de reject");
});

promiseD
  .then((value) => console.log(value))
  .catch((error) => console.log("3.1. promiseD ----->", error)) //toma el primer valor del ErrorHandler
  .catch((error) => console.log(error));

//******************* */

    //3.2. teniedo dos catchs, sin que el primero retorne algo

const promiseE = new Promise((resolve, reject) => {
  reject("Valor del reject");
});

const promiseF = promiseE.then(
  (value) => "Hola mundo",
  (error) => console.log("3.2. promiseF ---->", error)
);

promiseF.then(
  (value) => console.log("3.2. promiseF - value ---->", value),
  (error) => console.log(error) //undefined
);
//****************************************************************************************************************************** */

//4. se rechaza y NO TENGO errorHAndler => promiseB se rechaza al mismo valor de promiseA

    //4.1. teniedo dos catchs, sin que el primero retorne algo, si la promise tiene ErrorHandler, la promesa se rechaza a lo que retorna el ErrorHandler inicial (G)
const promiseG = new Promise((resolve, reject) => {
  reject("Valor del reject");
});

const promiseH = promiseG.then(
  (value) => "Hola mundo",
  (error) => console.log("4.1. promiseH ---->", "hay un error en el codigo")
);

promiseH.then(
  (value) => console.log("4.1. promiseH - value ---->", value),
  (error) => console.log(error) //Hay un error en el codigo
);

//******************* */

    //4.2. teniedo dos catchs, el primero retorne algo, si la promsesa I no tiene ErrorHAndler, la segunda promesa J se rechaza al valor de rechazo de la promesa inicial I, hasta que aparezca un then() que contenga un erroHandler
const promiseI = new Promise((resolve, reject) => {
  reject("Valor del reject");
});

promiseI
  .then((value) => console.log(value))
  .then((value) => console.log(value))
  .then((value) => console.log(value))
  .then((value) => console.log(value))
//el cathc recibe el ultimo errorHandler ante cualquie error
  .catch((error) => console.log("4.2. promiseI ---->",error));

  //****************************************************************************************************************************** */

