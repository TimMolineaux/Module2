import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question("Vul een maand in: ");

switch (maand){
    case 'january':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'augustus':
    case 'oktober':
    case 'december':
        console.log(`Deze maand heef 31 dagen.`);
        break;
    case 'april':
    case 'juni':
    case 'september':
    case 'november':
        console.log(`Deze maand heeft 30 dagen.`);
        break;
    case 'february':
        console.log(`Deze maand heeft 28 dagen.`)
        break;
}

process.exit();