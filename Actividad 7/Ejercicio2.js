/* Dado el arreglo de enteros;
crea una funcion que realice 
la suma de los elementos del 
arreglo
*/


const numbers = [1,2,3,4,10,11];

function operacion(arr){
    let suma = 0;
    for(let i=0; i<arr.length; i++){
        suma += arr[i]
    }
    return suma;
}

operacion(numbers);
