// si scriva una funzione che accetti tre argomenti un array e due numeri (a < b)
// la funzione ritornerà un nuovo array con i valori che hanno posizione compresa fra i 2 numeri

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = [];

console.log(myFunction(array, 3, 7));

function myFunction(array, a, b) {
    newArray = array.slice(a, b + 1);
    return newArray;
};