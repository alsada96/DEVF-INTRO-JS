// Simular el acceso a un club segun tu edad y acceso al VIP segun tu nombre

let edad = prompt("¿Cual es tu edad?");
let nombre = prompt("¿Cual es tu nombre?");

if (Number(edad) >= 18){
    if(nombre == ('Carlos'||'Mario')){
        alert("Felicidades puedes ingresar a la zona VIP");
    }
    else{alert("Puedes ingresar a la zona general de la discoteca")}
    
}else{
    console.log("Lo siento eres menor de edad y no puedes pasar a la discoteca")
}