export function createCharContainers(characters) {
    const characterList = document.querySelector("#characterList");
    characters.forEach((char) => {
        const characterCard = document.createElement("div");
        const characterCardTitle = document.createElement("h3");
        const characterCardTitleTxt = document.createTextNode(char.name);
        characterCardTitle.appendChild(characterCardTitleTxt);
        const characterImg = document.createElement("img");
        characterImg.src = char.image;
        characterImg.alt = `${char.name} Image`;
        characterImg.dataset.id = char.id.toString();
        characterImg.addEventListener("click", sayId);
        characterCard.appendChild(characterCardTitle);
        characterCard.appendChild(characterImg);
        characterList.appendChild(characterCard);
    });
}
function sayId() {
    console.log(`This character id is: ${this.dataset.id}`);
}
