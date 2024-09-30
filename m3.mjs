import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log(`Wat is de hoofdstad van Fankrijk?`);
let antwoord = await userInput.question(`Jouw antwoord: `);

if (antwoord == 'Parijs' || antwoord == 'parijs'){
    console.log(`Juist!`);
}else{
    console.log(`Fout! het juiste antwoord was: Parijs`);
}

console.log(`Hoeveel planeten zijn er in ons zonnestelsel?`);
antwoord = await userInput.question("Jouw antwoord: ");

if (antwoord == '8'){
    console.log(`Juist!`);
}else{
    console.log(`Fout! Het juiste antwoord was: 8`);
}

console.log(`Wat is het grootste zoogdier ter wereld?`);
antwoord = await userInput.question("Jouw antwoord: ");

if (antwoord == 'Blauwe vinvis' || antwoord == 'blauwe vinvis'){
    console.log(`Juist!`);
}else{
    console.log(`Fout! Het juiste antwoord was: blauwe vinvis`);
}

console.log(`Wie schreef het toneelstuk 'Romeo en Julia'?`);
antwoord = await userInput.question("Jouw antwoord: ");

if (antwoord == 'Shakespeare' || antwoord == 'shakespeare'){
    console.log(`Juist!`);
}else{
    console.log(`Fout! Het juiste antwoord was: Shakespeare`);
}

console.log(`Hoeveel poten heeft een spin?`);
antwoord = await userInput.question("Jouw antwoord: ");

if (antwoord == '8'){
    console.log(`Juist!`);
}else{
    console.log(`Fout! Het juiste antwoord was: 8`);
}

process.exit();