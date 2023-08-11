import { getCharacters } from "./utils/API.js";
import { createCharContainers } from "./utils/functions.js";

window.addEventListener("load", init);

async function init(): Promise<void> {
    const characters = await getCharacters();

    createCharContainers(characters);
}
