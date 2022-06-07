/*Programa convertidor de temperaturas:
de Celcius a Farenheit y viceversa
*/

function temp(c, f){
    let fahrenheit=(c*1.8)+32;
    let celcius=(f-32)*0.5556;
    console.log(`Conversion de Celcius a Farenheit: ${fahrenheit} y de Fahrenheit a Celcius: ${celcius}`);
}
temp(27, 60);