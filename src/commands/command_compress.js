import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { errorOperation } from '../consoleMessages.js';

export const commandCompress = async (params) => {
    try {
        const paramsArr = params.split(' ');
        if (paramsArr.length !== 2) {
            throw new Error();
        }

        await pipeline(createReadStream(paramsArr[0]), createBrotliCompress(), createWriteStream(paramsArr[1]));
    } catch (err) {
        errorOperation();
    }
}