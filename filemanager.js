import * as readline from 'readline/promises';
import { showCurrentDirectory, sayHello, sayGoodbye } from "./src/consoleMessages.js";
import { homedir } from "os";
import { commandCd } from './src/commands/command_cd.js';

const readLine  = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,

});

sayHello();
process.chdir(homedir());
showCurrentDirectory();

readLine.on('line', async (input) => {
    try {
        switch (true) {
            case input === 'up': { await commandCd(".."); break; }
            case input.startsWith('cd') : { await commandCd(input.slice(3).trim()); break; }
            default: {
              console.log("Invalid input");
                break;
            }
        }
        showCurrentDirectory();
    }
    catch (err) {
        console.log(err);
    }
});

readLine.on("close", () => {
    sayGoodbye();
    readLine.close();
});