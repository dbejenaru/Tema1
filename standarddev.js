const math = require('mathjs'); // primero npm install -g matjs
                                // npm install request-promise --cli
const {std} = require ('mathjs')
//import { std } from 'mathjs'

const rl = require('readline-sync');
var elemento;
var elementos = [];
while (typeof elemento != 'NaN')
{
let elemento = rl.question('Introduce un numero o "e" para salir ');
if (elemento ==='e') // si se introoduce e se sale del bucle
{
    break;
}
if (isNaN(elemento)) 
{
    continue;
}
else
{
    elementos.push(elemento); // Solo accepta numeros
}
} 
console.log(elementos);

/////// Start ejemplo de calculo 
// https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-225.php
const standardDeviation = (arr, usePopulation = false) => {
    const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    return Math.sqrt(
      arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
        (arr.length - (usePopulation ? 0 : 1))
    );
  };
  /// End ejemplo de calculo
  // console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21])); // comprobar 13.284434142....
  // console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21], true)); // 12.298996142.....
  console.log(standardDeviation(elementos)); // no va
  console.log(standardDeviation(elementos, true)); // no va
  console.log(math.std(elementos) + ' Libreria Mathjs'); // gastando las librerias Mathjs
