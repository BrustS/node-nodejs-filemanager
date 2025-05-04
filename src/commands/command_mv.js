import { basename, join } from 'path';
import { unlink } from 'fs/promises';
import { createReadStream, createWriteStream} from 'fs';
import { pipeline } from 'stream/promises';
import { errorOperation } from '../consoleMessages.js';


export const commandMv = async (params) => {
    try {
        const paramsArr = params.split(' ');
        if (paramsArr.length !== 2) {
            throw new Error();
        }
        const srcPath = join(paramsArr[0]);
        const destPath = join(paramsArr[1], basename(srcPath));

        const readStream = createReadStream(srcPath);
        const writeStream = createWriteStream(destPath);
        await pipeline(readStream, writeStream);
        await unlink(srcPath);
    } catch (err) {
        errorOperation();
    }
}