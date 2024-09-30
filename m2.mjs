import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Vul het eerste getal in: "));
let getal2 = parseFloat(await userInput.question("Vul het tweede getal in: "));
let berekening = await userInput.question("Welke berekening wil je doen? +,-,/,* ");

switch (berekening){
    case '+':
        console.log(getal1 + getal2);
        break;
    case '-':
        console.log(getal1 - getal2);
        break;
    case '/':
        console.log(getal1 / getal2);
        break;
    case '*':
        console.log(getal1 * getal2);
        break;
    default:
        console.log(`Je hebt geen geldig teken ingegeven!`);
        break;
}

process.exit();