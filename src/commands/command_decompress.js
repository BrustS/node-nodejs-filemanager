import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { errorOperation } from '../consoleMessages.js';

export const commandDecompress = async (params) => {
    try {
        const paramsArr = params.split(' ');
        if (paramsArr.length !== 2) {
            throw new Error();
        }

        await pipeline(createReadStream(paramsArr[0]), createBrotliDecompress(), createWriteStream(paramsArr[1]));
    } catch (err) {
        errorOperation();
    }
}