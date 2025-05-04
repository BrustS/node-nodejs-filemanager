import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { errorOperation} from '../consoleMessages.js';

export const commandCp = async (params) => {
        const paramsArr = params.split(" ");
        if (paramsArr.length !== 2) {
            errorOperation();
        } else {
            const srcPath = join(paramsArr[0]);
            const destPath = join(paramsArr[1]);

            const readStream = createReadStream(srcPath);
            const writeStream = createWriteStream(destPath);

            readStream.pipe(writeStream);

            readStream.on('error', () => {
                errorOperation();
            });

            writeStream.on('error', () => {
                errorOperation();
            });
        }
    }