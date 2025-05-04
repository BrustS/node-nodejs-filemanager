import { readdir, stat } from 'fs/promises';

export const commandLs = async () => {
    const files = await readdir(process.cwd());
    const filesInDirectory = [];
    const directoryInDirectory = [];
    for (const file of files) {
        const fileStat = await stat(file);
        if ( fileStat.isDirectory() ) {
            directoryInDirectory.push({file: file, type:'directory'});
        } else filesInDirectory.push({file:file, type:'file'});
    }
    console.table([...directoryInDirectory, ...filesInDirectory]);
}