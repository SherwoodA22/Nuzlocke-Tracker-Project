const pokemon = [
    { no: 1, name: "Bulbasaur",  stage: 1, type: ["Grass", "Poison"], abilities: ["Overgrow", "Chlorophyll"], locations: ["Starter"], evolutions: ["Ivysaur", "Venusaur"], img: "./sprites/001MSPE.png"},
    { no: 2, name: "Ivysaur",  stage: 2, type: ["Grass", "Poison"], abilities: ["Overgrow", "Chlorophyll"], locations: [], evolutions: ["Bulbasaur", "Venusaur"], img: "./sprites/002MSPE.png"},
    { no: 3, name: "Venusaur",  stage: 3, type: ["Grass", "Poison"], abilities: ["Overgrow", "Chlorophyll"], locations: [], evolutions: ["Bulbasaur", "Ivysaur"], img: "./sprites/003MSPE.png"},
    { no: 4, name: "Charmander",  stage: 1, type: ["Fire"], abilities: ["blaze", "Solar_Power"], locations: ["Starter"], evolutions: ["Charmeleon", "Charizard"], img: "./sprites/004MSPE.png"},
    { no: 5, name: "Charmeleon",  stage: 2, type: ["Fire"], abilities: ["blaze", "Solar_Power"], locations: [], evolutions: ["Charmander", "Charizard"], img: "./sprites/005MSPE.png"},
    { no: 6, name: "Charizard",  stage: 3, type: ["Fire", "Flying"], abilities: ["Blaze", "Solar_Power"], locations: [], evolutions: ["Charmander", "Charmeleon"], img: "./sprites/006MSPE.png"},
    { no: 7, name: "Squirtle",  stage: 1, type: ["Water"], abilities: ["Torrent", "Rain_Dish"], locations: ["Starter"], evolutions: ["Wartortle", "Blastoise"], img: "./sprites/007MSPE.png"},
    { no: 8, name: "Wartortle",  stage: 2, type: ["Water"], abilities: ["Torrent", "Rain_Dish"], locations: [], evolutions: ["Squirtle", "Blastoise"], img: "./sprites/008MSPE.png"},
    { no: 9, name: "Blastoise",  stage: 3, type: ["Water"], abilities: ["Torrent", "Rain_Dish"], locations: [], evolutions: ["Squirtle", "Wartortle"], img: "./sprites/009MSPE.png"},
    { no: 10, name: "Caterpie",  stage: 1, type: ["Bug"], abilities: ["Shield_Dust", "Run_Away"], locations: ["Route_2", "Route_24", "Route_25", "Viridian_Forest"], evolutions: ["Metapod", "Butterfree"], img: "./sprites/010MSPE.png"},
    { no: 11, name: "Metapod",  stage: 2, type: ["Bug"], abilities: ["Shed_Skin",], locations: ["Route_24", "Route_25", "Viridian_Forest"], evolutions: ["Caterpie", "Butterfree"], img: "./sprites/011MSPE.png"},
    
];

const routes = ["Starter", "Route_1", "Viridian_City", "Route_22", "Route_2", "Viridian_Forest", "Route_3", "Route_4", "Mt_Moon", "Cerulean_City", "Route_24", "Route_25", "Route_5", "Route_6", "Vermillion_City", "Route_11", "Digletts_Cave", "Route_9",
    "Route_10", "Rock_Tunnel", "Pokémon_Tower", "Route_12", "Route_8", "Route_7", "Celadon_City", "Saffron_City", "Route_16", "Route_17", "Route_18", "Fuschia_City", "Safari_Zone", "Route_15", "Route_14", "Route_13", "Power_Plant", "Route_19", "Route_20", 
    "Seafoam_Islands", "Cinnabar_Island", "Pokémon_Mansion", "Route_21", "Route_23", "Victory_Road", "Cerulean_Cave"
];
const team = [];

const encounter = document.getElementById("encounter_details");
let ul = document.createElement("ul");
ul.id = "routes_list"
encounter.appendChild(ul);
routes.forEach((el) => {
    let p = document.createElement("p");
    p.innerText = `${el.replace('_', " ")}`
    encounter.appendChild(p);
    let input = document.createElement("input");
    input.type = "text";
    input.id = `${el}_input`;
    input.addEventListener("click", () => search(`${el}_options`))
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

    if (team.some(el => el.route === r)) {
        let temp = team.findIndex((el) => el.route === r)
        team[temp] = {route: r, pokemon: p}
    } else {
        team.push({route: r, pokemon: p});
    }
    
}