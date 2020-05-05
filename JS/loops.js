"use strict";

// ciklas - kazkas, kas yra kartojama
    // kas tas kazkas?
    // ka kartoja?
    // kiek kartu?

//for ( let i=0; i<10; i++ ) {
 //   console.log( 'Metai', i );
//}

//for ( let i=0; i<10; i=i+1 ) {
  //  console.log( 'Metai', i );
//}



console.log('--------------------')
console.log('SUMAVIMAS INTERVALE')
console.log('--------------------')
//0 - 0             - 0
//0 - 4             - 10
//0 - 100           - 5050
//574 - 815         - 168069
//-50 - 50          - 0
//-70 - 30          - (-2020)


const nuo = 0;
const iki = 4;
let suma = 0;

for ( let i=nuo; i<=iki; i++ ) {
    suma = suma + i;
    console.log('Suma:', suma);
}


console.log('--------------------')
console.log('ATBULAS TEKSTAS')
console.log('--------------------')

const tekstas = 'audriuS';
const tekstoIlgis = tekstas.length -1;
let atbulas = '';

for ( let i=tekstoIlgis; i>=0; i-- ) {
    atbulas = atbulas + tekstas[i];
}


//for ( let i=0; i<tekstoIlgis; i++ ) {
  //  atbulas = atbulas + tekstas [tekstoIlgis - i - 1];
//}

console.log(`Tekstas "${tekstas}" atbulai yra "${atbulas}".`);


console.log('--------------------')
console.log('DALYBA BE LIEKANOS')
console.log('--------------------')

const from = 0;
const till = 300;
const divider = 3;
let count = 0;

for( let i=from; i<=till; i++ ) {
    if ( i % divider === 0 ) {
        // count = count + 1; // naudotinas analogas sekancioje eiluteje
        count++;
    }

}

const answer =`Skaičių intervale ${from} ir ${till}, besidalinančių be liekanos is ${divider} yra ${count} vienetai`;

console.log(answer)
