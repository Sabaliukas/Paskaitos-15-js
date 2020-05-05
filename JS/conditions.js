"use strict";



const a = 10;
const b = 7;

// palyginimo operatoriai:
// rekomenduotina >, <, <=, >=, ===, !==
// NErekomenduotina ==,!=

// if ( salyga) {
// logika, kuria reikia ivygdyti, jei tenkinama salyga    
//}

//if (a > b){
//    console.log('taip,a yra daugiau uz b');
//}else {
//    console.log('ne, a yra ne daugiau uz b')
//}

if (a > b){
    console.log('taip,a yra daugiau uz b');
}else if (a === b) {
    console.log('a yra lygu b')
}else {
    console.log('ne, a yra maziau uz b')
}    
//
//let diena = 1;
//if( diena === 0 ){
    //console.log('pirmadienis');
//} else
//if( diena === 1 ){
    //console.log('antradienis');
//} else
//if( diena === 2 ){
  //  console.log('treciadienis');
//} else
//if( diena === 3 ){
    //console.log('ketvirtadienis');
//} else
//if( diena === 4 ){
//    console.log('penktadienis');
//} else
//if( diena === 5 ){
//    console.log('sestadienis');
//} else
//if( diena === 6 ){
//    console.log('sekmadienis');
//} else
 //   console.log('tokia diena neegzistuoja');
//

    let vardas = 'audrius';
   

    if (vardas === 'audrius'){
        console.log('All good');
    } else {
        console.log('netinka');
    }

   console.log('---------------------');

   if ( '155' === '155'){
    console.log('All good');
} else {
    console.log('netinka');
}

console.log('---------------------');

const akys = 'geltonos';
switch ( akys ) {
    case 'raudona':
        console.log('vampyras');
        break;

    case 'melyna':
        console.log('mldc');
        break;

    case 'zalia':
        console.log('dar nevirti');
        break;

    case 'ruda': 
        console.log('melagis');
        break;
    
    default:
        console.log('a tikrai');
        break;       
}



if ( akys === 'rudos' ) {
    console.log('melagis');
} else {
    if ( akys === 'melyna') {
        console.log('mldc');
    } else {
        if( akys === 'raudonos' ) {
            console.log( 'raudonos');
        }else {
            if( akys === 'zalia') {
                console.log('dar nevirti')
            } else {
            console.log('akiu nera ;)');
            }
        }
    } 
}