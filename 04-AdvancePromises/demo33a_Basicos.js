//1. Al estar en resolve la promesa, el valor de resolve es tomado por el .then()
const promesaRes = new Promise((resolve, reject) => {
  resolve("Valor de fulfill");
});

promesaRes.then((value) => console.log("1.promesaRes ----->", value)); //valor de fulfill

//**************** */

//2.Al haber una reject en la promesa y al solo tener el .then(), faltaria el ErrorHandler por lo que arrojaria un error
//se comenta para no generar el error en consola

// const promesaRej = new Promise((resolve, reject) => {
//   reject("Valor de reject");
// });

// promesaRej.then((value) => console.log(value)); //nada

//**************** */

//3. Al incorporar el ErrorHandler se imprime el valor del reject
const promesa = new Promise((resolve, reject) => {
  reject("Valor de reject");
});

promesa
  .then((value) => console.log(value))
  .catch((error) => console.log("3.promesa ----->", error)); //valor de reject

//**************** */

//4. La promesa esta en reject, por lo que pasa al ErrorHandler
const promesaA = new Promise((resolve, reject) => {
  reject("Valor de reject");
});

promesaA
  .then((value) => console.log(value)) //nada
  .then((value) => console.log(value)) //nada
  .catch((error) => console.log("4.promesaA ----->", error)); //Valor de reject

//**************** */

//5. La promesa esta en resolve, por lo que el primer then() tendria el valor resolve, pero al NO tener una funcion que retorne el segundo then() que esperaria esa respuesta obtiene undefined.
//el then() es una promesa
const promesaB = new Promise((resolve, reject) => {
  resolve("Valor de resolve");
});

promesaB
  .then((value) => console.log("5.promesaB ----->", value)) //Valor de resolve
  .then((value) => console.log("5.promesaB ----->", value)) //undefined
  .catch((error) => console.log(error)); //nada

//**************** */

//6. En este caso el primer then() retorna el value, que manejaria el segundo then() y este lo consologuea
const promesaC = new Promise((resolve, reject) => {
  resolve("Valor de resolve");
});

promesaC
  .then((value) => {
    console.log("6.promesaC ----->", value); //Valor de resolve
    return value;
  })
  .then((value) => console.log("6.promesaC ----->", value)) //Valor de resolve
  .catch((error) => console.log(error)); //nada
