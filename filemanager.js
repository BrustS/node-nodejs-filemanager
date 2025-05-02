import * as readline from 'readline/promises';
import { showCurrentDirectory, sayHello, sayGoodbye } from "./src/consoleMessages.js";
import { homedir } from "os";
import { commandCd } from './src/commands/command_cd.js';
import { commandLs } from './src/commands/command_ls.js';
import { commandCat } from './src/commands/command_cat.js';
import { commandAdd } from './src/commands/command_add.js';
import { commandRm } from './src/commands/command_rm.js';

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
            case input === 'ls': { await commandLs(); break; }
            case input.startsWith('cat') : {await commandCat(input.slice(4).trim()); break; }
            case input.startsWith('add') : {await commandAdd(input.slice(4).trim()); break; }
            case input.startsWith('rm') : { await commandRm(input.slice(3).trim()); break; }
            case input === '.exit' : { readLine.close();
                process.exit(0);
                break;}
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