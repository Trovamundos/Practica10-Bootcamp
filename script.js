const myStringsArray = ['a-uno', 'a-dos', 'agosto', 'a-tres', 'a-cuatro', 'ahora'];
const myNumbersArray = [1, 2, 3, 4, 5]
const myObject = {
        id: 1,
        name: 'Juan',
        country: 'Spain',
        age: 32,

    };

/*---------- Implementa una función llamada hasId que admita como parámetro un objeto y
 compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano 
 true / false ). ----------*/

 const hasId = ({id}) => id == true;
 console.log(hasId(myObject));


/*---------- Implementa una función llamada head tal que, dado un array como entrada, 
 devuelva el primer elemento. ----------*/

const head = ([firstItem]) => firstItem;
console.log(head(myStringsArray));


/*---------- Implementa una función llamada tail tal que, dado un array como entrada, 
 devuelva un nuevo array con todos los elementos menos el primero. ----------*/

 const tail = ([, ...tail]) => tail;
 console.log(tail(myStringsArray));


 /*---------- Implementa una función llamada swapFirstToLast tal que, dado un array como 
 entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última 
 posición. ----------*/

const swapFistToLast = ([firstItem, ...rest]) => [...rest, firstItem];
console.log(swapFistToLast(myStringsArray));

/*---------- Implementa una función llamada excludeId tal que, dado un objeto como entrada, 
devuelva dicho objeto clonado excepto la propiedad id si la hubiera. ----------*/

const excludeId = ({id, ...rest}) => rest;
console.log(excludeId(myObject));


/*---------- Implementa una función llamada wordsStartingWithA tal que, dado un array de 
 palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen 
 por a. ----------*/

const wordsStartingWithA = array => array.filter(firstLetter => firstLetter[0] === 'a');
console.log(wordsStartingWithA(myStringsArray));


/*---------- Implementa una función llamada concat tal que admita múltiples argumentos de
 tipo string y devuelva otro string con la concatenación de todos, separados
 por | . ----------*/

const contact = arguments => arguments.join (' | ');
console.log(contact(myStringsArray));


/*---------- Implementa una función llamada multArray que admita un array de números ( arr )
 y otro parámetro que sea un número ( x ) y devuelva un nuevo array donde cada elemento ha
 sido multiplicado por x. ----------*/

const multArray = (array, x) => array.map(number => number * x);
console.log(multArray(myNumbersArray, 2));


/*---------- Implementa una función llamada calcMult que admita múltiples números como
 argumento y devuelva como resultado el producto de todos ellos. ----------*/

const calcMult = array => array.reduce((acc, number) => acc + number, 0)
console.log(calcMult(myNumbersArray));



//EJERCICIOS EXTRA

/*---------- Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo 
array donde el primer elemento ha sido intercambiado por el segundo. ----------*/

const swapFirstSecond = ([first, second, ...tail]) => [second, first, ...tail];
console.log(swapFirstSecond(myStringsArray));


/*---------- Implementa una función longest tal que admita multiples strings como argumento 
de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos los 
strings comienzan por dicho carácter o no. ----------*/

const longest = (array, character) => array
.every(([firstLetter, ...tail]) => firstLetter === character)
console.log(longest(myStringsArray, 'a'));


/*---------- Implementa una función llamada searchInStringV1 tal que dado un string como 
parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el 
string. ----------*/

const searchInStringV1 = (string, character) => 
Array.from(string).reduce((acc, letter) => acc + (letter === character ? 1 : 0), 0); 
console.log(searchInStringV1('abecedario', 'a'));


/*---------- Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 ,
encontrando otra alternativa sin usar reduce . ----------*/

const searchInStringV2 = (string, character) => Array.from(string)
.filter(letter => letter === character).length;
console.log(searchInStringV2('abecedario', 'a'))


/*---------- Implementa una función llamada sortCharacters tal que dado un string, lo 
devuelva con sus letras ordenadas alfabéticamente. ----------*/

const sortCharacters = string => Array.from(string).sort();
console.log(sortCharacters('abecedario'));


/*---------- Implementa una función llamada shout tal que, dadas múltiples palabras como 
entrada, devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas 
y con exclamaciones. ----------*/

const shout = array => array.map(string => (`¡${string.toUpperCase()}!`)).join();
console.log(shout(myStringsArray));



//Lista de la compra:

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

/*---------- Obtén una nueva lista donde aparezca el IVA (21%) de cada producto. ----------*/

const addIva = (iva, products) => products
.map(product => ({...product, iva: (product.price * (iva / 100))}))
console.log(addIva(21,shoppingCart));


/*---------- Ordena la lista de más a menos unidades. ----------*/

const sortByUnits = products => products
.sort((a, b) => a.units - b.units)
console.log(sortByUnits(shoppingCart));


/*---------- Obtén el subtotal gastado en droguería. ----------*/

const drugstoreSubtotal = products => products
.filter(drugstore => drugstore.category === 'Droguería')
.map(totalProduct => totalProduct.price * totalProduct.units)
.reduce((acc, total) => acc + total, 0);
console.log(drugstoreSubtotal(shoppingCart));


/*---------- Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada 
por categoría. ----------*/

const totalPriceListOrderByCategory = products => products
.sort((a, b) => a.category.localeCompare(b.category))
.map(product => `${product.product} -> ${product.price * product.units}€`)
.join(' | ');
console.log(totalPriceListOrderByCategory(shoppingCart));