const rl = require('readline-sync');
let palabra = rl.question('Escribe un texto ');


function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
  }

  console.log(removeVowels(palabra));