import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log(`Kies een artiest: `);
console.log(`1: The Beatles`);
console.log(`2: AC/DC`);
console.log(`3: Linkin Park`);
console.log(`4: The Backstreet Boys`);

let artiest = await userInput.question("Geef je keuze in: ")

switch (artiest){
    case '1':
        console.log(`Je koos voor "The Beatles"`);
        console.log(`Ze zijn de artiest achter de hit: Let it be`);
        break;
    case '2':
        console.log(`Je koos voor AC/DC`);
        console.log(`Zij zijn de artiest achter: Thunderstruck`);
        break;
    case '3':
        console.log(`Je koos voor Linkin Park`);
        console.log(`Zij zijn de artiest achter: In the end`);
        break;
    case '4':
        console.log('Je koos voor The Backstreet Boys');
        console.log(`Zij zijn de artiest achter: I want it that way`);
        break;
    default:
        console.log(`Je hebt geen geldige invoer gegeven!`);
        break;
}

if (artiest == 1){
    console.log(`Je koos voor "The Beatles"`);
    console.log(`Ze zijn de artiest achter de hit: Let it be`);
}else if (artiest == 2){
    console.log(`Je koos voor AC/DC`);
    console.log(`Zij zijn de artiest achter: Thunderstruck`);
}else if (artiest == 3){
    console.log(`Je koos voor Linkin Park`);
    console.log(`Zij zijn de artiest achter: In the end`);
}else if (artiest == 4){
    console.log('Je koos voor The Backstreet Boys');
    console.log(`Zij zijn de artiest achter: I want it that way`);
}else {
    console.log(`Je hebt geen geldige invoer gegeven!`);
}

process.exit();