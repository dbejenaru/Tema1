const rl = require('readline-sync');
var elemento = "lista";
var elementos = [];
while (typeof elemento == 'string')
{
let elemento = rl.question('Introduce un producto o "1" para salir ');
if (elemento ==='1') // si se introoduce 1 se sale del bucle
{
    break;
}
if (elementos.indexOf(elemento) === -1) // se comprueba si este elemento no esta ya en la lista
{
    elementos.push(elemento); //el producto no esta y se introduce
}
else
{
    continue; // el elemento existe y continua sin introducirlo 
}
} 
console.log(elementos);