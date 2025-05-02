import { join } from 'path';
import { writeFile } from 'fs/promises';
import { errorOperation } from '../consoleMessages.js';

export const commandAdd =  async (file) => {
    const path = join(process.cwd(), file);
    try {
        await writeFile(path, '');
    } catch (err) {
       errorOperation();
    }
}