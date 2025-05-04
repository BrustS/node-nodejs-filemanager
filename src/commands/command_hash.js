import { createHash } from "crypto";
import { createReadStream } from "fs";
import { errorOperation } from "../consoleMessages.js";

export const commandHash = async (path) => {

        const hash = createHash("sha256");
        const readStream = createReadStream(path);

        readStream.on("data", (chunk) => {
            hash.update(chunk);
        })

        readStream.on("end", () => {
            console.log(hash.digest('hex'));
        })

        readStream.on("error", errorOperation);
}