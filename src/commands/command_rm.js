import { unlink }  from "fs/promises";
import { errorOperation} from "../consoleMessages.js";

export const commandRm = async (path) => {
    try {
        await unlink(path);
    } catch (err) {
        errorOperation();
    }
}