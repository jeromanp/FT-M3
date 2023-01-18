"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB,
  problemCx: problemC,
  problemDx: problemD,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});
//////////////////////////////////////////////////////////////////////////////////

async function problemA() {
  // callback version
  exerciseUtils.readFile("poem-one/stanza-01.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });
  exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });

  // async await version
  // Tu código acá:
  const stanza01 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-01.txt")
  const stanza02 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-02.txt")

  const arrayPromise = [stanza01, stanza02]

  Promise.all(arrayPromise)
    .then((stanza)=>{
      exerciseUtils.blue(stanza[0])
      exerciseUtils.blue(stanza[1])
      console.log("done");
    })
}

//////////////////////////////////////////////////////////////////////////////////

async function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
    });
  });

  // async await version
  // Tu código acá:
  filenames.forEach((file)=>{
    exerciseUtils.promisifiedReadFile(file)
      .then((stanza)=>{
        exerciseUtils.blue(stanza)
        console.log("done");
      })
  })
}

//////////////////////////////////////////////////////////////////////////////////

async function problemC() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
    });
  });

  // async await version
  // Tu código acá:
  let array=await exerciseUtils.promisifiedReadFile(filenames)

  Promise.all( array )
    .then((stanza)=>{
      for(let i=0; i<=array.length;i++){
        exerciseUtils.blue(stanza[i])
        console.log("done");
      }
    })
}

//////////////////////////////////////////////////////////////////////////////////

async function problemD() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  let randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
      if (err) exerciseUtils.magenta(new Error(err));
    });
  });

  // async await version
  // Tu código acá:
  
  try {
    let array = await exerciseUtils.promisifiedReadFile(filenames)
    Promise.all( array )
      .then((stanza)=>{
        for(let i=0; i<=array.length;i++){
          exerciseUtils.blue(stanza[i])
          console.log("done");
        }
      })
  } catch (error) {
    exerciseUtils.magenta(new Error(error))      
  }
}
