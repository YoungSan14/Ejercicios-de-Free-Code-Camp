/*
Suma todos los números en un rango
Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.

Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10.
*/
const sumAll = (array) => {
    let newArray = [...array];
    newArray.sort((a, b) => a - b);
    let sum = 0;
    for(let i = newArray[0]; i <= newArray[1]; i++){
        sum += i;
        console.log(i);
    }
    return sum;
}
let arr = [4,1];
console.log(sumAll(arr));
console.log(sumAll([5, 10]));

/*
Diferencia entre dos arreglos
Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, pero no en ambos. En otras palabras, devuelve la diferencia simétrica de los dos arreglos.

**Nota:**Puedes devolver el arreglo con sus elementos en cualquier orden.
*/
function diferenciasArray(arr1, arr2){
    let newArray = [];

    function diferencias(array1, array2){
        for (let i = 0; i < array1.length; i++){
            if (array2.indexOf(array1[i]) === -1){
                newArray.push(array1[i]);
            }
        }
    }

    diferencias(arr1, arr2);
    diferencias(arr2, arr1);
    return newArray;
}

console.log(diferenciasArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diferenciasArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diferenciasArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diferenciasArray([1, "calf", 3, "piglet"], [7, "filly"]));

/*
Busca y destruye
Se proporcionará un arreglo inicial (el primer argumento en la función destroyer), seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

Nota: Tienes que utilizar el objeto arguments.
*/
function destroyer(array){
    let arr = [...arguments];
// se copian todos los argumentos en un array, para poder usar el metodo .filter(), ya que arguments es un "Objeto"
    let destruir = arr.filter((valor) => typeof valor !== 'object')
// 'destruir' es un array, que tendra los valores que NO son un objeto/array 
    return arr[0].filter(function(valor){
// se utiliza .filter() en el primer elemento de arr, ya que el primer argumento es un array
        if(destruir.includes(valor) !== true){
// si el array 'destruir' no contiene el valor de 'arr[0]', se retornara ese valor
            return valor;
        }
    })
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));

/*
Donde estás
Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto fuente tiene que estar presente en el objeto de la colección si se va a incluir en el arreglo devuelto.

Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], y el segundo argumento es { last: "Capulet" }, entonces debes devolver el tercer objeto del arreglo (el primer argumento), porque contiene el nombre y su valor, el cual fue pasado como segundo argumento.
*/
function whatIsInAName(collection, obj){
    let newArray = collection.filter(function(objeto, i){
        for (let key in obj){
            if(obj[key] !== objeto[key]){
                return false;
            }
        }
        return true;
    })
    return newArray;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}))

/*
Spinal case
Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.
*/
const spinalCase = (string) => {
    let arrStr = string.split(/\s|_|(?=[A-Z])/)
// convierte en array el string, con una exprecion regular, a partir de un espacio(\s), si hay un _ o si despues del string hay una mayuscula (?=[A-Z]) 
    return arrStr.join('-').toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("thisIsSpinalTap"));

/*
Pig Latin (Latin de los cerdos)
Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. Las normas son las siguientes:

- Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.

- Si una palabra comienza con una vocal, solo añade way al final.
*/
function translatePigLatin(string){
    if (/[aeiou]/.test(string[0])){
        let strVocal = string.split('');
        strVocal.push('way');
        return strVocal.join('');
    }else{
        let strCons = string.split(/(?=[aeiou])/)
        let primerosCaracter = strCons[0];
        strCons.push(primerosCaracter, 'ay')
        strCons.shift();
        return strCons.join('');
    }
}

console.log(translatePigLatin("schwartz"))
console.log(translatePigLatin("california"))
console.log(translatePigLatin('alo'))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("rhythm"))

/*
Busca y reemplaza
Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.

El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

El segundo argumento es la palabra que se reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento (después).

Note: Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. Por ejemplo, si quieres reemplazar la palabra Book por la palabra dog, debe ser reemplazada como Dog
*/
const myReplace = (string, str1, str2) => {
    if(/^[A-Z]/.test(str1)){
        str2 = str2.charAt(0).toUpperCase() + str2.slice(1, str2.length);
    }else{
        str2 = str2.charAt(0).toLowerCase() + str2.slice(1, str2.length);
    }
    string = string.replace(str1, str2);
    return string;
}

console.log(myReplace('anda paya Tonto', 'Tonto', 'bobo'));
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));

/*
Emparejamiento de ADN
El par de hebras del ADN esta formado por pares de nucleobases. Los pares de base son representados por los caracteres AT y CG, que forman bloques de doble hélix ADN.

A la cadena de ADN le falta el elemento de emparejamiento. Escribe una función que coincida con los pares de base faltantes para la hebra de ADN proporcionada. Para cada carácter de la cadena proporcionada, encuentra el carácter de par base. Devuelve los resultados como un arreglo 2d.

Por ejemplo, la entrada GCG, devuelve [["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado.
*/
function pairElement(string){
    let newArray = [];
    for (let i = 0; i < string.length; i++){
        let array = [];
        array.push(string[i]);
        if (string[i] === 'G'){
            array.push('C');
        }else if (string[i] === 'C'){
            array.push('G');
        }else if (string[i] === 'A'){
            array.push('T');
        }else if (string[i] === 'T'){
            array.push('A');
        }
        newArray.push(array)
    }
    return newArray;
}

console.log(pairElement('GCG'))
console.log(pairElement("CTCTA"))
console.log(pairElement("TTGAG"))

/*
Letras faltantes
Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve undefined.
*/
const fearNotLetter = (string => {
    let arr = [];
    for (let i = 0; i < string.length; i++){
        let num = string.charCodeAt(i);
        arr.push(num);
    }
    let letras = [];
    for (let j = arr[0]; j <= arr[arr.length -1]; j++){
        let str = String.fromCharCode(j)
        letras.push(str);
    }  
    let strArray = string.split('');
    let letraFaltante;
    for (let z = 0; z < letras.length; z++){
        if(strArray.indexOf(letras[z]) === -1){
            letraFaltante = letras[z];
        }
    }
    return letraFaltante;
})

console.log(fearNotLetter('abce'));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

/*
Unión ordenada
Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.

En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, pero sin duplicados en el arreglo final.

Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe ordenarse según el orden numérico.

Revisa las pruebas de afirmación para ver ejemplos.
*/
function uniteUnique(array){
    let newArray = [];
    for (let valor in arguments){
        for (let i = 0; i < arguments[valor].length; i++){
            newArray.push(arguments[valor][i]);
        }
    }
    let newSet = new Set(newArray);
    newArray = [...newSet]
    return newArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
// console.log()