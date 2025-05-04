import { EOL, homedir, arch, cpus, userInfo } from 'os'

export const commandOs = async (params) => {
    switch(params) {
        case '--EOL': {
            console.log(`EOL: ${JSON.stringify(EOL)}`)
            break;}
        case '--cpus': {
            const cpuOnMachine = cpus();
            console.log(`Count cpus: ${cpuOnMachine.length}`);
            for (const cpuInfos of cpuOnMachine) {
                console.log(`${cpuInfos.model} ${(cpuInfos.speed / 1000).toFixed(2)} GHz`);
            }
            break;}
        case '--homedir': {
            console.log(`Home dir: ${homedir()}`);
            break;}
        case '--username': {
            console.log(`System username: ${userInfo().username}`);
            break;
        }
        case '--architecture': {
            console.log( `CPU architecture: ${arch()}`)
            break;
        }
            default: {
                console.log("Invalid input");
                break;
            }
    }
}