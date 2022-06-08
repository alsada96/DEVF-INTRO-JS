// Ejercicios de Objetos y sus métodos básicos:



  //Del siguiente objeto:

    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

//1
    console.log(student.name)
//2
    console.log(student["age"])
//3
    student.name = "Steve Jobs"
    console.log(student.name)
 /*
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */



/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra: var obj = { 0: "a", 1: "b", 2: "c"};
                    print(Object.getOwnPropertyNames(obj).sort());*/

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    console.log(Object.getOwnPropertyNames(student).sort());
 




/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:*/
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    console.log(student.hasOwnProperty('name'));




/** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:*/
   var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
console.log(student.rollno)

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
delete student.rollno
console.log(student)

/**
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 */ 
     var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
//La nueva edad debe ser 35.
student.age = 35
console.log(student.age)

 



/**
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto:*/
 var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 /*   La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.*/
student.pet = 'cat'
console.log(student.pet)


/**
 * Crea un código para llenar un objecto vacio:*/ 
/*Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad*/
const objeto = {}

Object.defineProperties(objeto,{
    color: {
        enumerable: true,
        value : "rojo",
        writeable: true
    },
    tamaño: {
        enumerable: true,
        value : "grande",
        writeable: true
    },
    peso: {
        enumerable: true,
        value : "50 kg",
        writeable: true
    },
    cantidad: {
        enumerable: true,
        value : "20",
        writeable: true
    }

})
console.log(objeto)

/*una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false*/

var Car = {
    wheels: 4,
    company: 'honda',
    name: 'civic',
    year: 2016
}

   
/*Create an object that will be filled only by a function inside of it,
    and not from someone outside of it's function.. example:
let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
}
myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
It supposed to be filled using it's own function
Add any type of element on the object.. arrays, objects, int, strings, etc*/

/*/*Crear un objeto que será llenado solo por una función dentro de él,
     y no de alguien fuera de su función .. ejemplo:
dejar miObjeto = {
     myFunction: function ()... // Se supone que esta función llena este objeto
}
myObject.myNewProp = "Hola mundo" // Esto debería arrojar una excepción o un error porque no queremos que este objeto se llene desde afuera...
Se supone que debe llenarse usando su propia función.
Agregue cualquier tipo de elemento en el objeto... arreglos, objetos, int, cadenas, etc.*/


