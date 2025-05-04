import { join} from 'path';
import { readFile } from 'fs/promises';

export const commandCat = async (filename) => {
    try {
        const path = join(process.cwd(), filename);
        const content = await readFile(path, 'utf8');
        console.log(content);
    } catch (err) {
        console.log(`Operation failed`);
    }
}