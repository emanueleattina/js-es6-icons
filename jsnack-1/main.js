// creare un array di oggetti
// ogni oggetto descriverà una bici con nome e peso
// stampare a schermo la bici con peso minore

const biciclette = [
    {
        nome: 'bmx',
        peso: 8
    },
    {
        nome: 'city bike',
        peso: 7
    },
    {
        nome: 'mountain bike',
        peso: 12
    },
    {
        nome: 'graziella',
        peso: 4
    },
];

let pesoMin = biciclette[0].peso;

biciclette.forEach(bici => {

    if(bici.peso < pesoMin) {
        pesoMin = bici.peso;
    }
});

let biciMin = biciclette.filter((bici) => bici.peso == pesoMin);

$('#appendino').append(`La ${biciMin[0].nome} pesa ${biciMin[0].peso}kg ed è la più leggera`);