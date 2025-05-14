import { game } from "./pokemon.js";

function createTable() {
const gamesList = document.getElementById("game_table");

const games = game;
games.forEach(element => {
    const a = document.createElement("a");
    a.href = `./game.html?name=${element.name}`;
    const button = document.createElement("input") 
    a.appendChild(button)
    button.id = `${button.name}_button`;
    button.type = "image";
    button.src = element.img;
    button.alt = button.name;
    gamesList.appendChild(a);
    
});
}



createTable();