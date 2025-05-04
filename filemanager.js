import * as readline from 'readline/promises';
import { showCurrentDirectory, sayHello, sayGoodbye } from "./src/consoleMessages.js";
import { homedir } from "os";
import { commandCd } from './src/commands/command_cd.js';
import { commandLs } from './src/commands/command_ls.js';
import { commandCat } from './src/commands/command_cat.js';
import { commandAdd } from './src/commands/command_add.js';
import { commandRm } from './src/commands/command_rm.js';
import { commandMkdir } from './src/commands/command_mkdir.js';
import { commandRn } from './src/commands/command_rn.js';
import { commandCp } from './src/commands/command_cp.js';
import { commandMv } from './src/commands/command_mv.js';
import { commandOs } from './src/commands/command_os.js';
import { commandHash } from './src/commands/command_hash.js';
import { commandCompress } from './src/commands/command_compress.js';
import { commandDecompress } from './src/commands/command_decompress.js';

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
            case input.startsWith('mkdir') : { await commandMkdir(input.slice(6).trim()); break; }
            case input.startsWith('rn') : { await commandRn(input.slice(3).trim()); break; }
            case input.startsWith('cp') : { await commandCp(input.slice(3).trim()); break; }
            case input.startsWith('mv') : { await commandMv(input.slice(3).trim()); break; }
            case input.startsWith('os') : { await commandOs(input.slice(3).trim()); break; }
            case input.startsWith('hash') : { await commandHash(input.slice(5).trim()); break; }
            case input.startsWith('compress') : { await commandCompress(input.slice(9).trim()); break; }
            case input.startsWith('decompress') : { await commandDecompress(input.slice(11).trim()); break; }
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