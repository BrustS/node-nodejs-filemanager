let username = 'Unknown'
const args = process.argv.slice(2);

 if (process.env.npm_config_username) {
     username = process.env.npm_config_username;
 } else {
     const usernameArg = args.find(arg => arg.startsWith('--username='));
     if (usernameArg) {
         username = usernameArg.split('=')[1];
     }
 }

export const showCurrentDirectory = () => {
    console.log(`You are currently in ${process.cwd()}`);
};


export const sayHello = () => {
    console.log(`Welcome to the File Manager, ${username}!`);
};

export const sayGoodbye = () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
}

export const errorOperation = () => {
    console.log('Operation failed');
}