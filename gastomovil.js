const rl = require('readline-sync');
var coste, ov;
let min = rl.question('Cuantos minutos has hablado? ');
if (min<=180) 
{
    coste = 10;
}
else if (min > 180 && min <= 240) 
{
ov = min - 180;
coste = 10 + (ov*0.1);
}
else
{
    ov = min - 240;
    coste = 16 +(ov*0.2);
}
console.log('Tu factura es de: ' + coste + ' euros');