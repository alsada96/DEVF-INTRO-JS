/*Desarrolla un metodo para verificar
si una palabra es palindromo
*/
const ejemplo="oso";

function palindromo(palabra){
    let nueva=palabra.split("");
    let reversa= nueva.reverse();
    let resultado=reversa.join("");
    if(palabra==resultado){
        return true;
    }
    else{
        return false;
    }
}
palindromo(ejemplo);