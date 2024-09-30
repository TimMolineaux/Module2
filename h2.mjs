import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jaar = parseFloat(await userInput.question("Vul een jaar in: "));

if (jaar % 4 == 0 && jaar % 100 != 0 || jaar % 400 == 0){
    console.log(`In ${jaar} heeft february 29 dagen.`);
}else{
    console.log(`In ${jaar} heeft february 28 dagen.`);
}

process.exit();