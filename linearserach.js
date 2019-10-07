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
//
let prueba = rl.question('Introduce un numero para comprobar ');
if (elementos.indexOf(prueba) !== -1)
{
    console.log('Este numero ' + prueba +  ' EXISTE')
} 
else
{
    console.log('Este numero ' + prueba +  ' NO existe ')
}
//
console.log(elementos);