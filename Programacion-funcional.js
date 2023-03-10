/*
Examine el código en el editor. Está utilizando un método que tiene efectos secundarios en el programa, causando un comportamiento incorrecto. La lista final de pestañas abiertas, almacenadas en finalTabs.tabs deberia ser ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] pero la lista producida por el código es un poco diferente.
Cambia Window.prototype.tabClose para que elimine la pestaña correcta.
*/

// tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function(tabs) {
    this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
};

// Cuando unes dos ventanas en una
Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// Cuando abres una nueva pestaña al final
Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
    return this;
};

// Cuando cierras una pestaña
Window.prototype.tabClose = function(index) {

// Cambia solo el código debajo de esta línea
    const tabsBeforeIndex = this.tabs.splice(0, index); // Obtiene las pestañas antes de la pestaña
    const tabsAfterIndex = this.tabs.splice(1); // Obtiene las pestañas después de la pestaña

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

// Cambia solo el código encima de esta línea
    return this;
};

// Vamos a crear tres ventanas del navegador
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

// Ahora completa la apertura de la pestaña, cierre, y otras operaciones
const finalTabs = socialWindow
    .tabOpen() // Abre una nueva pestaña para memes de gatos
    .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);


/*

El arreglo watchList contiene objetos con información sobre varias películas. Usa map en watchList para asignar un nuevo arreglo de objetos a la variable ratings. Cada película en el nuevo arreglo debe tener solo una tecla title con el nombre de la película, y una tecla rating con la calificación IMDB. El código en el editor utiliza actualmente un bucle for para hacer esto, por lo que debes reemplazar la funcionalidad del bucle con tu expresión map.

*/
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

const ratings = watchList.map(function(obj){
    return {"title": obj.Title, "rating": obj.imdbRating}
});
// const ratings = [];
// for (let i = 0; i < watchList.length; i++) {
//     ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
// }

console.log(ratings)

/*

Escribe tu propio Array.prototype.myMap(), el cual debe comportarse exactamente como Array.prototype.map(). No debes utilizar el método incorporado map. Se puede acceder a la instancia de Array en el método myMap usando this.

*/

Array.prototype.myMap = function(callback){
    let newArray = [];

    this.forEach(function(valor, i, array){
        newArray.push(callback(valor, i, array));
    })
    return newArray;
}

let pruebaEjerAnterior = watchList.myMap(function(valor){
    return {"title": valor.Title, "rating": valor.imdbRating}
})

console.log(pruebaEjerAnterior)
console.log([23, 65, 98, 5, 13].myMap(item => item * 2))
console.log(["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()))
console.log([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]))

/*

La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza una combinación de filter y map en watchList para asignar un nuevo arreglo de objetos con solo title y rating claves. El nuevo arreglo solo debe incluir objetos donde imdbRating es mayor o igual a 8.0. Ten en cuenta que los valores rating se guardan como cadenas en el objeto y puedes necesitar convertirlos en números para realizar operaciones matemáticas en ellos.

*/
console.log(ratings)

let filterRatings = ratings.filter(function(obj){
    if(parseInt(obj.rating) >= 8.0){
        return obj;
    }
}) 

console.log(filterRatings)

/*

Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.filter(). No debes utilizar el método incorporado filter. Se puede acceder a la instancia Array en el método myFilter usando this.

*/
Array.prototype.myFilter = function(callback){
    let newArray = [];
    this.forEach((valor, i, array) => {
        if(callback(valor, i, array) != false){
            newArray.push(valor);
        }
    })
    return newArray;
}

console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"))
console.log([23, 65, 98, 5, 13].myFilter(item => item % 2))
console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index))

/*

La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza reduce para encontrar la calificación media en IMDB de las películas dirigidas por Christopher Nolan. Recuerda de desafíos anteriores filtrar (filter) los datos y mapear (map) sobre ellos para extraer lo que necesitas. Puede que necesites crear otras variables y devolver la calificación media con la función getRating. Ten en cuenta que los valores de calificación se guardan como cadenas en el objeto y necesitan ser convertidos en números antes de ser utilizados en cualquier operación matemática.

*/
function getRating(watchList){
    let movies = watchList.map((obj) => {
        return {'title': obj.Title, 'director': obj.Director, 'imdbRating': parseFloat(obj.imdbRating)}
    })
    // return movies;
    let christopherNolanMovies = movies.filter( (obj) => obj.director === 'Christopher Nolan')
    let promedioIMDBRating = christopherNolanMovies.reduce((sum, obj) => sum + obj.imdbRating, 0)
    // return typeof christopherNolanMovies[0].imdbRating;
    return promedioIMDBRating / christopherNolanMovies.length;
}

console.log(getRating(watchList))

/*

Completa el código para la función squareList usando cualquier combinación de map(), filter(), y reduce(). La función debe devolver un nuevo arreglo que contenga los cuadrados de solamente los enteros positivos (números decimales no son enteros) cuando se le pasa un arreglo de números reales. Un ejemplo de un arreglo que contiene números reales es [-3, 4.8, 5, 3, -3.2].

Nota: Tu función no debe usar ningún tipo de bucle for o while o la función forEach().

*/
const squareList = (array) => {
    let numEnteroFilter = array.filter((valor) => Number.isInteger(valor) && valor > 0);
    // return numEnteroFilter;
    let valoresAlCuadrado = numEnteroFilter.map((valor) => valor ** 2);
    return valoresAlCuadrado;
}

console.log(squareList([-3, 4.8, 5, 3, -3.2]))
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]))
console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]))

/*

Utiliza el método sort en la función alphabeticalOrder para ordenar los elementos de arr en orden alfabético. La función debe devolver el arreglo ordenado.

*/
function ordenAlfabetico(array){
    return array.sort(function(a, b){
        if(a === b){
            return 0;
        }else if( a > b){
            return 1;
        }else{
            return -1;
        }
    })
}

console.log(ordenAlfabetico(["x", "h", "a", "m", "n", "m"]))
console.log(ordenAlfabetico(["a", "d", "c", "a", "z", "g"]))
console.log(ordenAlfabetico(["a", "a", "a", "a", "x", "t"]))

/*
Utiliza el método sort en la función nonMutatingSort para ordenar los elementos de un arreglo en orden ascendente. La función debe devolver un nuevo arreglo y no mutar la variable globalArray.
*/
const globalArray = [5, 6, 3, 2, 9];

const nonMutatingSort = (array) => {
    let newArray = [...array];
    return newArray.sort((a, b) => a - b)
}

console.log(nonMutatingSort(globalArray))
console.log(globalArray)
console.log(nonMutatingSort([1, 30, 4, 21, 100000]))

/*
Utiliza el método split dentro de la función splitify para dividir str en un arreglo de palabras. La función debe devolver un arreglo. Ten en cuenta que las palabras no siempre están separadas por espacios y que el arreglo no debe contener signos de puntuación.
*/
const splitify = (string) => {
    let strArray = string.split(/\W/);
    return strArray;
}

console.log(splitify("Earth-is-our home"));
console.log(splitify("This.is.a-sentence"));
console.log(splitify("This.is.a-sentence"));

/*
Utiliza el método join (entre otros) dentro de la función sentensify para hacer una oración a partir de las palabras en la cadena str. La función debe devolver una cadena. Por ejemplo, I-like-Star-Wars se convertiría en I like Star Wars. Para este desafío, no utilices el método replace.
*/
const sentensify = (string) => {
    let strArray = string.split(/\W/);
    let str = strArray.join(' ');
    return str;
}

console.log(sentensify('I-like-Star-Wars'))
console.log(sentensify("May-the-force-be-with-you"))
console.log(sentensify("Que.mira-bobo"))

/*
Rellena la función urlSlug para convertir una cadena title y devolver la versión con guiones para la URL. Puedes utilizar cualquiera de los métodos vistos en esta sección y no utilices replace. Aquí están los requisitos:

La entrada es una cadena con espacios y palabras, en mayúsculas y minúsculas
El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (-)
El resultado debe contener todas las letras minúsculas
El resultado no debe tener espacios
*/
const urlSlug = (string) => {
    let strArray = string.trim().toLowerCase().split(/\s+/);
    let strURL = strArray.join('-');
    return strURL;
}

console.log(urlSlug("Winter Is Coming"));
console.log(urlSlug(" Winter  Is  Coming"));
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
console.log(urlSlug("Hold The Door"))

/*
Utiliza el método every dentro de la función checkPositive para comprobar si cada elemento en arr es positivo. La función debe devolver un valor booleano.
*/
const checkPositive = (array) => {
    return array.every(function(valor){
        return valor >= 0;
    })
}

console.log(checkPositive([1, 2, 3, -4, 5]))
console.log(checkPositive([1, 2, 3, 4, 5]))
console.log(checkPositive([1, -2, 3, -4, 5]))

/*
Utiliza el método some dentro de la función checkPositive para comprobar si algún elemento en arr es positivo. La función debe devolver un valor booleano.
*/
const hayPositivos = (array) => {
    return array.some((valor) => valor >= 0)
}

console.log(hayPositivos([-1, -2, -3, -4, -5]))
console.log(hayPositivos([1, 2, 3, -4, 5]))
console.log(hayPositivos([1, 2, 3, 4, 5]))

/*
Completa el cuerpo de la función add para que use currificación para añadir 
parámetros x, y, y z.
*/
const add = (x) => (y) => (z) => {
    return x + y + z;
}
function add2(x){
    return function(y){
        return function (z){
            return x + y + z;
        }
    }
}

console.log(add(10)(20)(30))
console.log(add(11)(22)(33))
console.log(add2(10)(20)(30))
console.log(add2(1)(2)(3))