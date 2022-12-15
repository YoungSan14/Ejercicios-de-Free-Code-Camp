/*

La siguiente función debe crear un arreglo bidimensional (matriz) con m filas (rows)
y n columnas (columns) de ceros. Desafortunadamente, no está produciendo la salida 
esperada porque la variable row no está siendo reiniciada (devuelta a un arreglo vacío) 
en el bucle exterior. Corrige el código para que devuelva una matriz 3x2 de ceros correcta,
que se parezca a [[0, 0], [0, 0], [0, 0]].

*/

function zeroArray(m, n){
    let newArray = [];
    let row = [];

    for(let i = 0; i < m; i++){
        newArray.push(row)
        for(let j = 0; j < n; j++){
            if(newArray[i].length < n){
                row.push(0)
            }
        }
    }
    return newArray;
}

console.log( zeroArray(3,2));

/*

Convierte Celsius a Fahrenheit
La fórmula para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicado por 9/5, más 32.

Se te da una variable celsius que representa una temperatura en Celsius. Utiliza la variable fahrenheit ya definida
y asígnale la temperatura Fahrenheit equivalente a la temperatura Celsius dada. Utiliza la fórmula mencionada 
anteriormente para ayudarte a convertir la temperatura Celsius a Fahrenheit.

*/

function celsiusAfahrenheit(celsius){
    let fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}

console.log(celsiusAfahrenheit(-30))

/*

Invierte una cadena
Invertir la cadena proporcionada y devolver la cadena invertida.

Por ejemplo, "hello" debe convertirse "olleh".

*/

function invertirString(str){
    let arrayStr = str.split('');
    let strInvertido = arrayStr.reverse().join('')
    return strInvertido;
}

console.log(invertirString('hello'))

/*

Factoriza un número
Devuelve el factorial del entero proporcionado.

Si el número entero es representado con la letra n, un factorial es el producto de todos los enteros
positivos menores o iguales a n.

Los factoriales suelen representarse con la abreviatura n!

Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Sólo se proporcionarán a la función los enteros mayores o iguales a cero.

*/

function factorizar(num){
    if(num === 0){
        return 0;
    }else{
        let factorial = 1;
        for(let i = 1; i <= num; i++){
            factorial *= i;
        }
        return factorial;
    }
}

console.log(factorizar(5))

/*

Encuentra la palabra más larga en una cadena
Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número.

*/

function palabraMasLarga(str){
    let arrayStr = str.split(' ');
    let masLarga = arrayStr[0];
    for(let i = 1; i < arrayStr.length; i++){
        if(arrayStr[i].length > masLarga.length){
            masLarga = arrayStr[i];
        }
    }
    return masLarga.length;
}

console.log(palabraMasLarga('que mira bobo? anda pashaa bobo'))

/*

Devuelve los números mayores en los arreglos
Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, 
el arreglo dado contendrá exactamente 4 sub-arreglos.

Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada miembro 
del arreglo con la sintaxis arr[i].

*/

function mayoresDeCadaArray(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        let numMasGrande = array[i][0]
        for(let j = 1; j < array[i].length; j++){
            if(array[i][j] > numMasGrande){
                numMasGrande = array[i][j];
            }
        }
        newArray.push(numMasGrande);
    }
    return newArray;
}
let array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
let array2 = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];

console.log(mayoresDeCadaArray(array));
console.log(mayoresDeCadaArray(array2))

/*

Confirma el final
Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. Pero para el propósito 
de este desafío, nos gustaría que usaras uno de los métodos de subcadena de JavaScript en su lugar.

*/

function terminaIgual(str, target){
    let arrayStr = str.split('');
    let ultimos = arrayStr.splice((str.length - target.length));
// ultimos almasena en un array los ultimos string de 'str', restando la longitud de 'target' con la longitud de 'str'
    if(ultimos.join('') === target){
// ultimos se transforma en una cadena usando el metodo .join('') para poder compararla con el string 'target' 
        return true;
    }else{
        return false;
    }
}

let facts = 'RIVER PLATE el MAS GRANDE';
console.log(terminaIgual(facts, 'NDE'))

/*

Repite una cadena repite una cadena
Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento).
Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices 
el método incorporado .repeat().

*/

function repiteCadena(str, num){
    let arrayStr = str.split(' ');
    let newArray = [];
    for (let i = 0; i < num; i++){
        newArray.push(arrayStr[0])
    }
    return newArray.join('');
}

console.log(repiteCadena('Chester', 1))
console.log(repiteCadena('*', 100))
console.log(repiteCadena('hola', 0))

/*

Recorta una cadena
Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento).
Devuelve la cadena recortada con un ... al final.

*/

function recortarCadena(str, num){
    if(num === str.length || num > str.length){
        return str;
    }else{
        let arrayStr = str.split('');
        let newArrayStr = arrayStr.splice(0, num);

        return `${newArrayStr.join('')}...`;
    }
}
let theGOATsay = "Que mira bobo Anda payá bobo";

console.log(recortarCadena(theGOATsay, 13))
console.log(recortarCadena("A-tisket a-tasket A green and yellow basket", 8));
console.log(recortarCadena(theGOATsay, theGOATsay.length))
console.log(recortarCadena(theGOATsay, theGOATsay.length + 2))

/*

Buscadores guardianes
Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa la prueba. la función debería devolver undefined.

*/

function buscadorDeElementos(arr, func){
    let num = 0;
    for (let i = 0; i < arr.length; i++){
        if( func(arr[i]) === true){
            num = arr[i];
            break;
        }else{
            num = undefined;
        }
    }
    return num;
}

console.log(buscadorDeElementos([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))

/*

Boo who (Booleano Quién)
Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false.

Booleanos primitivos son true y false.

*/

function esBooleano(valor){
    if(typeof valor !== 'boolean'){
        return false;
    }else{
        return true;
    }
}

console.log(esBooleano(true))
console.log(esBooleano(false))
console.log(esBooleano(2022))

/*

Haz que la primera letra de una palabra este en mayúscula
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. 
Asegúrate de que el resto de la palabra esté en minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.

*/

function primeraEnMayus(str){
    let arrayStr = str.split(' ')
// se tranforma el 'str' en array con el metodo .split() con un espacio(' ') como parametro, para tomar cada string con su longitud completa
    let newArray = []
// se declara un array vacio
    for(let i = 0; i < arrayStr.length; i++){
// el bucle for recorrera cada string del 'arrayStr'
        let primerStr = arrayStr[i][0].toUpperCase();
// se declara una variable con la primera letra de cada uno de los string en MAYUSCULA
        let array = arrayStr[i].toLowerCase().split('');
// se declara un nuevo array dentro del bucle, que primero convierte todos los caracteres de los strings (del arrayStr) en minusculas con el metodo .toLowerCase() exclusivos de los strings, luego transforma en array cada string del 'arrayStr[i]' con .split() esta vez caracter por caracter         
        array.shift();
// se elimina el primer caracter de 'array'
        array.unshift(primerStr);
// y se agrega a 'array' las primeras letras de cada string en MAYUSCULA
        let strings = array.join('')
// se declara otra variable pasando a string nuevamente cada caracter de 'array' ya con sus primeras letras en MAYUSCULAS
        newArray.push(strings)
// se pasan esos strings al array vacio antes declarado
    }
    return newArray.join(' ');
// se retorna el 'newArray', transformado a string, con cada string con su primera letra en MAUSCULA
}

console.log(primeraEnMayus('hola'))
console.log(primeraEnMayus('santiago martin suarez'))
console.log(primeraEnMayus("sHoRt AnD sToUt"))

/*

Cortar y rebanar
Tienes dos arreglos y un índice.
Copia cada elemento del primer arreglo en el segundo arreglo, en orden.
Comienza insertando elementos en el índice n del segundo arreglo.
Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.

*/
function cortarYrebanar(arr1, arr2, n){
    let copiaArr2 = arr2.slice(0, arr2.length);
    for (let i = arr1.length - 1; i >= 0; i--){
        copiaArr2.splice(n, 0, arr1[i]);
    }
    console.log(copiaArr2)
    return copiaArr2;
}

let arr1 = mayoresDeCadaArray(array);
let arr2 = mayoresDeCadaArray(array2);

console.log(cortarYrebanar(arr1, arr2, 2));
console.log(cortarYrebanar(['Mie', 'Jue', 'Vie'], ['Dom', 'Lun', 'Mar', 'Sab'], 3))

/*

Rebote falsy
Elimina todos los valores falsos de un arreglo. Devuelve un nuevo arreglo; no alteres el arreglo original.
Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.
Sugerencia: Intenta convertir cada valor a booleano.

*/
function reboteFalsy(arr){
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== '' && arr[i] !== undefined && arr[i]){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(reboteFalsy(([null, NaN, 1, 2, undefined])))
console.log(reboteFalsy(([false, null, 0, NaN, undefined, ""])))

/*

Dónde pertenezco
Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) una vez que éste haya sido ordenado. El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5) debe devolver 1 por que este valor es más grande que 1 (índice 0), pero menor que 2 (índice 1).

De esta forma, getIndexToIns([20,3,5], 19) debe devolver 2 porque una vez ordenado el arreglo, éste se verá así [3,5,20] y 19 es menor que 20 (índice 2) y mayor que 5 (índice 1).

*/
function getIndexToIns(arr, num){
    arr.sort(function(a, b){
        return a - b;
    })
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= num){
            return i;
        }
    }
    return arr.length;
}

console.log(getIndexToIns([20,3,5], 19));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([40, 60], 50));

/*

Mutaciones
Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.

*/
function mismosCaracteres(arr){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        let arrStr = arr[i].toLowerCase().split('');
        console.log(arrStr);
        newArray.push(arrStr);
    }
    let primerArr = newArray[0];
    let caracter = '';
    for(let i = 0; i < newArray[1].length; i++){
        if(primerArr.indexOf(newArray[1][i]) === -1){
            caracter = newArray[1][i];
        }
    }
    if (caracter === ''){
        return true;
    }else{
        return false;
    }
}

console.log(mismosCaracteres(["Alien", "line"]))
console.log(mismosCaracteres(["hello", "hey"]))
console.log(mismosCaracteres(["Jagger", "JAGGO"]))
console.log(mismosCaracteres(["hello", "Hello"]))

/*

Monito Trocitos
Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

*/
function dividirArray(arr, size){
    let newArray = [arr.slice(0, size)];
    for (let i = size; i < arr.length; i+=size){
        let otroArr = arr.splice(i, size);
        newArray.push(otroArr);
    }
    return newArray;
}

console.log(dividirArray(["a", "b", "c", "d"], 2));
console.log(dividirArray([0, 1, 2, 3, 4, 5], 3))
console.log(dividirArray([0, 1, 2, 3, 4, 5], 2))
console.log(dividirArray([0, 1, 2, 3, 4, 5], 4))
console.log(dividirArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))

// const newArr = [];
// while (arr.length > 0) {
//   newArr.push(arr.splice(0, size));
// }
// return newArr;
// }


