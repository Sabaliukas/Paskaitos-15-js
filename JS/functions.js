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
console.log( daugyba(2, 2,) );
console.log( daugyba(3, 3,) );
console.log( daugyba(4, 5, ) );
console.log( daugyba(5,6,  ) );
console.log( daugyba(8, 9,) );


console.log('--------------')
console.log('SKAITMENU KIEKIS SKAICIUJE')
console.log('--------------')

function skaitmenuKiekisSkaiciuje( number ) {
    // validavimas
   // if ( typeof(number) !== 'number') {
     //   return console.error('ERROR: reikalingas tikras skaicius');
    //}
    //if ( isNaN(number) === true){
      //  return console.error('ERROR: reikalingas tikras skaicius');
    //}
    //if ( isFinite(number) === false){
      //  return console.error('ERROR: reikalingas tikras skaicius');
    //}
    if ( typeof(number) !== 'number' ||
        isFinite(number) === false ) { 
        return console.error('ERROR: reikalingas tikras skaicius');
    }
    
        // logika
        const skaiciusTekstu = ''+number;
        let count = skaiciusTekstu.length

     // jei tekstineje skaiciaus reprezentacijoje yra kablelis, tai count--
       //for( let i=0; i<skaiciusTekstu.length; i++ ) {
       //  if (skaiciusTekstu[i] === '.'  ) {
           // count--;
           // break;
           
            
         //}
       //}

       if( number % 1 !== 0){
           count--;

       }

       // jei turi minusa, tai count--
       if ( number < 0 )
        count--;


        // rezultato grazinimas
    return count;
} 

console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );


console.log( skaitmenuKiekisSkaiciuje( 5 ), '->', 1 );
console.log( skaitmenuKiekisSkaiciuje( 781 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ), '->', 11 );
console.log( skaitmenuKiekisSkaiciuje( 3.1415 ), '->', 5 );
console.log( skaitmenuKiekisSkaiciuje( -3.1415 ), '->', 5 );


console.log( skaitmenuKiekisSkaiciuje( -12345 ), '->', 5 );


console.log('--------------')
console.log('Didziausias skaicius sarase')
console.log('--------------')

function didziausiasSkaiciusSarase( list ) {
    if (Array.isArray(list) === false ) {
        return console.error('ERROR: turi buti array tipo');
    }
    if ( list.length === 0){
        return console.error('ERROR: array negali buti tuscias')
    }
    let biggest = list[0];
    // einame per skaiciu sarasa
    for( let i=0; i<list.length; i++ ) {
        const einamasisSkacius = list[i];    
        // tikriname ar einamasis skaicius didesnis uz "biggest"
        if (einamasisSkacius > biggest ) {
        // jei taip:
         // "biggest" = einamasis skaicius
         biggest = einamasisSkacius;
         }
    }     
    return biggest;
}
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( ( 1 ) ) );
console.log( didziausiasSkaiciusSarase( true ) );
console.log( didziausiasSkaiciusSarase( false ) );
console.log( didziausiasSkaiciusSarase( [] ) );


console.log( didziausiasSkaiciusSarase( [ 1 ] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ), '->', 78 );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ), '->', 69 );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -1 );

console.log( didziausiasSkaiciusSarase( [ 1, Infinity, 3 ] ), '->', 3 );


