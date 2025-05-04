import { mkdir }  from "fs/promises";
import { errorOperation} from "../consoleMessages.js";

export const commandMkdir = async (path) => {
    try {
        await mkdir(path, {recursive: true});
    } catch (err) {
        errorOperation();
    }
}