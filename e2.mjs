import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let min = 5;
let max = 25;

let getal = parseFloat(await userInput.question("Vul een getal in: "))

if (getal >= min && getal <= max){
    console.log(`Je getal ligt tussen ${min} en ${max}.`);
}else{
    console.log(`Je getal ligt niet tussen ${min} en ${max}.`);
}

process.exit();