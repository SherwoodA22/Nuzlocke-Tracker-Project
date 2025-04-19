import { pokemon } from "./pokemon.js";

const routes = ["Gen1_Starter", "Gen1_Route_1", "Gen1_Viridian_City", "Gen1_Route_22", "Gen1_Route_2", "Gen1_Viridian_Forest", "Gen1_Route_3", "Gen1_Route_4", "Gen1_Mt_Moon", "Gen1_Cerulean_City", "Gen1_Route_24", "Gen1_Route_25", "Gen1_Route_5", "Gen1_Underground_Path", "Gen1_Route_6", "Gen1_Vermillion_City", "Gen1_Route_11", "Gen1_Digletts_Cave", "Gen1_Route_9",
    "Gen1_Route_10", "Gen1_Rock_Tunnel", "Gen1_Pokémon_Tower", "Gen1_Route_12", "Gen1_Route_8", "Gen1_Route_7", "Gen1_Celadon_City", "Gen1_Saffron_City", "Gen1_Route_16", "Gen1_Route_17", "Gen1_Route_18", "Gen1_Fuschia_City", "Gen1_Safari_Zone", "Gen1_Route_15", "Gen1_Route_14", "Gen1_Route_13", "Gen1_Power_Plant", "Gen1_Route_19", "Gen1_Route_20", 
    "Gen1_Seafoam_Islands", "Gen1_Cinnabar_Island", "Gen1_Pokémon_Mansion", "Gen1_Route_21", "Gen1_Route_23", "Gen1_Victory_Road", "Gen1_Cerulean_Cave"
];


const box = [];
const team = [];

const encounter = document.getElementById("encounter_details");
let ul = document.createElement("ul");
ul.id = "routes_list"
encounter.appendChild(ul);
routes.forEach((el) => {
    let p = document.createElement("p");
    p.innerText = `${el.replace('_', " ")}`
    p.innerText = p.innerText.replace("Gen1", "");
    p.innerText = p.innerText.replace("_", " ");
    encounter.appendChild(p);
    let input = document.createElement("input");
    input.type = "text";
    input.id = `${el}_input`;
    input.addEventListener("click", () => search(`${el}_options`))
    input.addEventListener("focusout", () => search(`${el}_options`))
    encounter.appendChild(input);
    let ul = document.createElement("ul");
    ul.id = `${el}_options`;
    encounter.appendChild(ul);

    pokemon.forEach((pel) => {
        if (pel.locations.includes(el)) {
            let li = document.createElement(`li`);
            li.id = `${el}_${pel.name}`;
            li.textContent = `${pel.name}`
            let img = document.createElement(`img`);
            img.src = `${pel.img}`;
            li.appendChild(img);
            li.addEventListener("click", () => addToTeam(el, pel));
            document.getElementById(`${el}_options`).appendChild(li);
    
    }
})
})


function search(id) {
    document.getElementById(id).classList.toggle("show");
}

function addToTeam(r, p){

    if (box.some(el => el.route === r)) {
        let temp = box.findIndex((el) => el.route === r)
        box[temp] = {route: r, pokemon: p, status: "Alive"}
    } else {
        box.push({route: r, pokemon: p, status: "Alive"});
    }
}