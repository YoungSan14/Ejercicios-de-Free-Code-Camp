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