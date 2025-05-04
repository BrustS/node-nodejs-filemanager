export  const commandCd = async (path) => {
    try {
        process.chdir(path);
    } catch (err) {
        console.log('Operation failed');
    }
}