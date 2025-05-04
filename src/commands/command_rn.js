import { join, dirname } from "path";
import { rename } from "fs/promises";
import { errorOperation} from "../consoleMessages.js";

export const commandRn = async (params) => {
    try {
    const paramsArr  = params.split(" ");
    if (paramsArr.length !== 2) {
        throw new Error();
    }
    const srcPath = join(paramsArr[0]);
    const destPath = join(dirname(srcPath),paramsArr[1]);
        await rename(srcPath, destPath);
    } catch (err) {
        errorOperation();
    }
}