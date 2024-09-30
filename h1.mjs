import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Vul het eerste getal in: "));
let getal2 = parseFloat(await userInput.question("Vul het tweede getal in: "));
let getal3 = parseFloat(await userInput.question("Vul het derde getal in: "));
let getal4 = parseFloat(await userInput.question("Vul het vierde getal in: "));
let getal5 = parseFloat(await userInput.question("Vul het vijfde getal in: "));

console.log(Math.max(getal1, getal2, getal3, getal4, getal5));
console.log(Math.min(getal1, getal2, getal3, getal4, getal5));
console.log(getal1 + getal2 + getal3 + getal4 + getal5 / 5);

process.exit();