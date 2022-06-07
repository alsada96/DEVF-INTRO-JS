/*funcion que recibe dos parametros
    *Una Oracion
    *Palabra a buscar
la funcion debe retornar "true" o "false" en que caso de que la oracion
tenga la palabra a buscar*/


function buscador(frase , elemento){
   var frase = ('escribe una oracion');
   var elemento = ('no');
   let encontre = frase.indexOf(elemento);

    if (encontre !== -1) {
        return true;
    } else {
        return false;
    }
}
buscador();