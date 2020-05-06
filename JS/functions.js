"use strict";

function tusciaFunkcija(){
       return false;
}

// tusciaFunkcija();

console.log( tusciaFunkcija() );

function daugyba( pirmas, antras){
    return pirmas * antras ;
    // validuojame ieinancius duomenis
    if ( typeof(pirmas) !== 'number') {
        return console.error('ERROR: pirma reiksme turi buti skaicius');
    }
    if ( typeof (antras) !== 'number') {
        return console.error('ERROR: antra reiksme turi buti skaicius');
    }
    
    if ( isNaN(pirmas) !== true ) {
        return console.error('ERROR: pirma reiksme turi buti  tikras skaicius');
    }
    if ( ''+antras === 'Nan') {
        return console.error('ERROR: antra reiksme turi buti tikras skaicius');
    }
    if ( isFinite(pirmas) === false) {
        return console.error('ERROR: pirma reiksme turi buti ne begalybe');
    }
    if ( ''+antras === 'Infinity') {
        return console.error('ERROR: antra reiksme turi buti ne begalybe');
    }
    // relizuojame funkcijos logika
    const result = pirma * antras;

    // graziname rezultata
    return result;
}

console.log( daugyba() );
console.log( daugyba(2, 2,) );
console.log( daugyba(3,2,) );
console.log( daugyba(4, 5, ) );
console.log( daugyba(5,6,  ) );
console.log( daugyba(8, 9,) );
console.log( daugyba() );
console.log( daugyba(a, 2,) );
console.log( daugyba(3, d,) );
console.log( daugyba(4, 5, ) );
console.log( daugyba(5,6,  ) );
console.log( daugyba(8, 9,) );


console.log('--------------')
console.log('SKAITMENU KIEKIS SKAICIUJE')
console.log('--------------')


