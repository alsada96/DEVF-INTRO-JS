let numero = Number(prompt("Ingresa un numero"));
let i = 1;
while(i <= numero){
    if((i % 5) === 0){
        console.log(i);
    }
    i++;
}