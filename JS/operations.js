"use strict";

// MATEMATIKA

const sk1 = 20;
const sk2 = 10;

const suma = sk1 + sk2;
console.log( suma );
 
const skirtumas = sk1 - sk2;
console.log( skirtumas )

const daugyba = sk1 * sk2;
console.log( daugyba );

const dalyba = daugyba / sk1;
console.log( dalyba );

const visaSuma = daugyba + sk2 - sk1 / sk2 * sk1;
console.log( visaSuma );


console.log(`--------------------------------`);

// TEKSITINES OPERACIJOS

const vardas = `Audrius `;
const pavarde = `Sabaliauskas `;
const rezultatas = vardas + pavarde;

console.log( vardas );
console.log( pavarde );
console.log( rezultatas );


// Saule yra didele ir "geltona".  

const spalva = 'geltona';
const spalvosSakinys = 'Saule yra didele ir "' + spalva + '".';
console.log( spalvosSakinys );

// Skaicius '66' yra lyginis.
const skaicius = 66;
const skaiciausSakinys = "Skaicius '" + skaicius + "' yra lyginis.";
console.log(skaiciausSakinys);

// Skaicius '5' ir skaicius "sesi " yra geri skaiciai.
const du = 5;
const trys = 'sesi';
const sakinys = `Skaicius '${du}' ir skaicius "${trys}" yra geri skaiciai.`;
console.log( sakinys );

// Skaicius '5' ir skaicius "sesi " yra geri skaiciai.
const vienas = 15;
const keturi = 'keturi';
const vkSakinys = 'Skaicius \''+vienas+'\' ir skaicius "'+keturi+'" yra geri skaiciai.';
console.log(vkSakinys);

console.log('-----------------------');

// SARASU OPERACIJOS (array)
const pazymiai = [10, 8, 7, 6, 4, 8];
const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log( pazymiai );
console.log( abc );

console.log( 'Pirmas pazymys:', pazymiai[0] );
// console.log( 'Antras pazymys:', pazymiai[1] );
// console.log( 'Antras pazymys:', pazymiai[4] );
// console.log( 'Antras pazymys:', pazymiai[5] );
// console.log( 'Antras pazymys:', pazymiai[2] );
// console.log( 'Antras pazymys:', pazymiai[3] );

console.log( 'Trecia raide:', abc[2] );
// console.log( 'Ketvirta raide:', abc[3] );
// console.log( 'Pirma raide:', abc[0] );
// console.log( 'Antras raide:', abc[1] );
// console.log( 'Antras raide:', abc[1] );

const pazymiuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4] + pazymiai[5];
console.log( 'Pazymiu suma:', pazymiuSuma );

let abcSakinys = '';
abcSakinys = abcSakinys + abc[0];
abcSakinys = abcSakinys + abc[1];
abcSakinys = abcSakinys + abc[2];
abcSakinys = abcSakinys + abc[3];
abcSakinys = abcSakinys + abc[4];
abcSakinys = abcSakinys + abc[5];
console.log('Visa ABC:', abcSakinys);

console.log( pazymiai[3] );
console.log( pazymiai[0] );
console.log( pazymiai[1] );
console.log( pazymiai[1] );


