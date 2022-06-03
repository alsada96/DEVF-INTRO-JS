
let numero = Number(prompt("Ingresa un numero"));
let i = 1;

do{
    if(numero % 5 == 0){
        console.log(i);
    }
    i++
}while(i <= numero);