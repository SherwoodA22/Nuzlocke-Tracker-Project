const pokemon = [
    { no: 1, name: "Bulbasaur",  stage: 1, type: ["Grass", "Poison"], abilities: ["Overgrow", "Chlorophyll"], locations: ["Gen1_Starter", "FRLG_Starter", "HGSS_Pallet_Town", "Gen6_Lumiose_City", "USUM_Route_2", "LG_Viridian_Forest", "LG_Cerulean_City", "Gen8_Master_Dojo", "BDSP_Grassland_Cave", "BDSP_Sunlit_Cavern", "BDSP_Swampy_Cave", "BDSP_Riverbank_Cave", "BDSP_Still_Water_Cavern", "BDSP_Bogsunk_Cavern", "Gen9_Coastal_Biome", "Gen9_Torchlit_Labyrinth"], evolutions: ["Ivysaur", "Venusaur"], img: "./sprites/001MSPE.png"},
    { no: 2, name: "Ivysaur",  stage: 2, type: ["Grass", "Poison"], abilities: ["Overgrow", "Chlorophyll"], locations: ["Gen8_Max_Lair"], evolutions: ["Bulbasaur", "Venusaur"], img: "./sprites/002MSPE.png"},
    { no: 3, name: "Venusaur",  stage: 3, type: ["Grass", "Poison"], abilities: ["Overgrow", "Chlorophyll"], locations: [], evolutions: ["Bulbasaur", "Ivysaur"], img: "./sprites/003MSPE.png"},
    { no: 4, name: "Charmander",  stage: 1, type: ["Fire"], abilities: ["blaze", "Solar_Power"], locations: ["Gen1_Starter", "FRLG_Starter", "HGSS_Pallet_Town", "Gen1_Route_24", "Gen6_Lumiose_City", "USUM_Route_3", "LG_Route_3", "LG_Route_4", "LG_Route_24", "LG_Rock_Tunnel", "BDSP_Volcanic_Cave", "BDSP_Sandsear_Cave", "BDSP_Typhlo_Cavern", "Gen9_Savanna_Biomme"], evolutions: ["Charmeleon", "Charizard"], img: "./sprites/004MSPE.png"},
    { no: 5, name: "Charmeleon",  stage: 2, type: ["Fire"], abilities: ["blaze", "Solar_Power"], locations: ["Max_Lair"], evolutions: ["Charmander", "Charizard"], img: "./sprites/005MSPE.png"},
    { no: 6, name: "Charizard",  stage: 3, type: ["Fire", "Flying"], abilities: ["Blaze", "Solar_Power"], locations: ["LG_Route_1", "LG_Route_2", "LG_Route_3", "LG_Route_4", "LG_Route_6", "LG_Route_7", "LG_Route_8", "LG_Route_9", "LG_Route_10", "LG_Route_11", "LG_Route_12", "LG_Route_13", "LG_Route_14", "LG_Route_15", "LG_Route_16", "LG_Route_17", "LG_Route_18", "LG_Route_19","LG_Route_21", "LG_Route_22",  "LG_Route_23", "LG_Route_24", "LG_Route_25" ], evolutions: ["Charmander", "Charmeleon"], img: "./sprites/006MSPE.png"},
    { no: 7, name: "Squirtle",  stage: 1, type: ["Water"], abilities: ["Torrent", "Rain_Dish"], locations: ["Gen1_Starter", "FRLG_Starter", "Gen1_Vermilion_City", "HGSS_Pallet_Town", "Gen6_Lumiose_City", "USUM_Seaward_Cave", "LG_Route_24", "LG_Route_25", "LG_Seafoam_Islands", "LG_Vermilion_City", "Gen8_Master_Dojo", "BDSP_Fountainspring_Cave", "BDSP_Riverbank_Cave", "BDSP_Still_Water_Cavern", "Gen9_Canyon_Biome"], evolutions: ["Wartortle", "Blastoise"], img: "./sprites/007MSPE.png"},
    { no: 8, name: "Wartortle",  stage: 2, type: ["Water"], abilities: ["Torrent", "Rain_Dish"], locations: ["Gen8_Max_Lair"], evolutions: ["Squirtle", "Blastoise"], img: "./sprites/008MSPE.png"},
    { no: 9, name: "Blastoise",  stage: 3, type: ["Water"], abilities: ["Torrent", "Rain_Dish"], locations: [], evolutions: ["Squirtle", "Wartortle"], img: "./sprites/009MSPE.png"},
    { no: 10, name: "Caterpie",  stage: 1, type: ["Bug"], abilities: ["Shield_Dust", "Run_Away"], locations: ["Gen1_Route_2", "Gen1_Route_24", "Gen1_Route_25", "Gen1_Viridian_Forest" , "Gen2_Route_2", "Gen2_24", "Gen2_24", "Gen2_25", "Gen2_26", "Gen2_27", "Gen2_30", "Gen2_31", "Gen2_34", "Gen2_35", "Gen2_36", "Gen2_37", "Gen2_38", "Gen2_39", "Gen2_Ilex_Forest", "Gen2_National_Park", "Gen2_Azelea_Town", "Gen2_Lake_Of_Rage", "FRLG_Route_2", "FRLG_Route_24", "FRLG_Route_25", "FRLG_Viridian_Forest" , "FRLG_Pattern_Bush", "Gen4_204", "Gen4_Eterna_Forest", "HGSS_Route_2", "HGSS_Route_30", "HGSS_Route_31", "HGSS_Ilex_Forest", "HGSS_National_Park", "HGSS_Viridian_Forest", "Gen6_Santalune_Forest", "Gen6_Route_2", "SM_Route_1", "SM_Route_5", "SM_Lush_Jungle", "SM_Melemele_Meadow", "USUM_Route_1", "USUM_Route_5", "USUM_Lush_Jungle", "USUM_Melemele_Meadow","LG_Route_2", "LG_Viridian_Forest", "Gen8_Route_1", "BDSP_Spacious_Cave", "BDSP_Grassland_Cave", "BDSP_Swampy_Cave", "BDSP_Riverbank_Cave", "BDSP_Still_Water_Cavern", "BDSP_Sunlit_Cavern", "BDSP_Bogsunk_Cavern"], evolutions: ["Metapod", "Butterfree"], img: "./sprites/010MSPE.png"},
    { no: 11, name: "Metapod",  stage: 2, type: ["Bug"], abilities: ["Shed_Skin",], locations: ["Gen1_Route_24", "Gen1_Route_25", "Gen1_Viridian_Forest", "Gen2_Route_2", "Gen2_Route_24", "Gen2_Route_25", "Gen2_Route_26", "Gen2_Route_27", "Gen2_Route_30", "Gen2_Route_31", "Gen2_Route_34", "Gen2_Route_35", "Gen2_Route_36", "Gen2_Route_37", "Gen2_Route_38", "Gen2_Route_39", "Gen2_Ilex_Forest", "Gen2_National_Park", "Gen2_Azalea_Town", "Gen2_Lake_Of_Rage", "FRLG_Route_24", "FRLG_Route_25", "FRLG_Viridian_Forest","FRLG_Pattern_Bush", "Gen4_Eterna_Forest", "HGSS_Route_2", "HGSS_Route_30", "HGSS_Route_31", "HGSS_Route_47", "HGSS_National_Park", "HGSS_Ilex_Forest", "HGSS_Viridian_Forest", "BW1_Route_12", "Gen6_Santalune_Forest", "SM_Route_1", "SM_Route_5", "SM_Lush_Jungle", "SM_Melemele_Meadow", "USUM_Route_5", "USUM_Lush_Jungle", "USUM_Melemele_Meadow", "LG_Viridian_Forest", "Gen8_Rolling_Fields"], evolutions: ["Caterpie", "Butterfree"], img: "./sprites/011MSPE.png"},
    { no: 12, name: "Butterfree",  stage: 3, type: ["Bug", "Flying"], abilities: ["Compound_Eyes", "Tinted_Lens"], locations: ["Gen2_Route_2", "Gen2_Route_24", "Gen2_Route_25", "Gen2_Route_26", "Gen2_Route_27", "Gen2_Route_34", "Gen2_Route_35", "Gen2_Route_36", "Gen2_Route_37", "Gen2_Route_38", "Gen2_Route_39", "Gen2_National_Park", "Gen2_Ilex_Forest", "Gen2_Azalea_Town", "Gen2_Lake_Of_Rage", "HGSS_Route_2", "HGSS_Route_47", "HGSS_Viridian_Forest", "HGSS_National_Park", "HGSS_Ilex_Forest", "BW1_Route_12", "BW2_Pinwheel_Forest", "SM_Route_5", "SM_Melemele_Meadow", "SM_Lush_Jungle", "USUM_Route_5", "USUM_Melemele_Meadow", "USUM_Lush_Jungle", "LG_Viridian_Forest", "Gen8_Slumbering_Weald", "Gen8_East_Lake_Axewell", "Gen8_Giants_Mirror", "Gen8_Rolling_Fields", "Gen8_Max_Lair"], evolutions: ["Caterpie", "Metapod"], img: "./sprites/012MSPE.png"},
    { no: 13, name: "Weedle",  stage: 1, type: ["Bug", "Poison"], abilities: ["Shield_Dust", "Run_Away"], locations: ["Gen1_Route_2", "Gen1_Route_24", "Gen1_Route_25", "Gen1_Viridian_Forest"], evolutions: ["Kakuna", "Beedrill"], img: "./sprites/013MSPE.png"},
    { no: 14, name: "Kakuna",  stage: 2, type: ["Bug", "Poison"], abilities: ["Shed_Skin"], locations: ["Gen1_Route_24", "Gen1_Route_25", "Gen1_Viridian_Forest"], evolutions: ["Weedle", "Beedrill"], img: "./sprites/014MSPE.png"},
    { no: 15, name: "Beedrill",  stage: 3, type: ["Bug", "Poison"], abilities: ["Swarm", "Sniper"], locations: [], evolutions: ["Weedle", "Kakuna"], img: "./sprites/015MSPE.png"},
    { no: 16, name: "Pidgey",  stage: 1, type: ["Normal", "Flying"], abilities: ["Keen_Eye", "Tangled_Feet", "Big_Pecks"], locations: ["Gen1_Route_1", "Gen1_Route_2", "Gen1_Route_3", "Gen1_Route_5", "Gen1_Route_6", "Gen1_Route_7", "Gen1_Route_8", "Gen1_Route_11", "Gen1_Route_12", "Gen1_Route_13", "Gen1_Route_14", "Gen1_Route_15", "Gen1_Route_21", "Gen1_Route_24", "Gen1_Route_25", "Gen1_Viridian_Forest"], evolutions: ["Pidgeotto", "Pidgeot"], img: "./sprites/016MSPE.png"},
    { no: 17, name: "Pidgeotto",  stage: 2, type: ["Normal", "Flying"], abilities: ["Keen_Eye", "Tangled_Feet", "Big_Pecks"], locations: ["Gen1_Route_5", "Gen1_Route_6", "Gen1_Route_7", "Gen1_Route_8", "Gen1_Route_11", "Gen1_Route_12", "Gen1_Route_13", "Gen1_Route_14", "Gen1_Route_15", "Gen1_Route_21", "Gen1_Route_24", "Gen1_Route_25", "Gen1_Viridian_Forest"], evolutions: ["Pidgey", "Pidgeot"], img: "./sprites/017MSPE.png"},
    { no: 18, name: "Pidgeot",  stage: 3, type: ["Normal", "Flying"], abilities: ["Keen_Eye", "Tangled_Feet", "Big_Pecks"], locations: [], evolutions: ["Pidgey", "Pidgeotto"], img: "./sprites/018MSPE.png"},
    { no: 19, name: "Rattata",  stage: 1, type: ["Normal"], abilities: ["Run_Away", "Guts", "Hustle"], locations: ["Gen1_Route_1", "Gen1_Route_2", "Gen1_Route_3", "Gen1_Route_4", "Gen1_Route_5", "Gen1_Route_6", "Gen1_Route_7", "Gen1_Route_8", "Gen1_Route_9", "Gen1_Route_10", "Gen1_Route_11",  "Gen1_Route_16", "Gen1_Route_18", "Gen1_Route_21", "Gen1_Route_22", "Gen1_Pokémon_Mansion"], evolutions: ["Raticate"], img: "./sprites/019MSPE.png"},
    { no: 20, name: "Raticate",  stage: 2, type: ["Normal"], abilities: ["Run_Away", "Guts", "Hustle"], locations: ["Gen1_Route_9", "Gen1_Route_10", "Gen1_Route_11", "Gen1_Route_16", "Gen1_Route_17", "Gen1_Route_18", "Gen1_Cerulean_Cave", "Gen1_Pokémon_Mansion"], evolutions: ["Rattata"], img: "./sprites/020MSPE.png"},
    { no: 21, name: "Spearow",  stage: 1, type: ["Normal", "Flying"], abilities: ["Keen_Eye", "Sniper"], locations: ["Gen1_Route_3", "Gen1_Route_4", "Gen1_Route_9", "Gen1_Route_10", "Gen1_Route_11", "Gen1_Route_16", "Gen1_Route_17", "Gen1_Route_18", "Gen1_Route_22", "Gen1_Route_23",], evolutions: ["Fearow"], img: "./sprites/021MSPE.png"},
    { no: 22, name: "Fearow",  stage: 2, type: ["Normal", "Flying"], abilities: ["Keen_Eye", "Sniper"], locations: ["Gen1_Route_9", "Gen1_Route_16", "Gen1_Route_17", "Gen1_Route_18", "Gen1_Route_23",], evolutions: ["Spearow"], img: "./sprites/022MSPE.png"},
    { no: 23, name: "Ekans",  stage: 1, type: ["Poison"], abilities: ["Intimidate", "Shed_Skin", "Unnerve"
    ], locations: ["Gen1_Route_4", "Gen1_Route_8", "Gen1_Route_9", "Gen1_Route_10", "Gen1_Route_11", "Gen1_Route_23"], evolutions: ["Arbok"], img: "./sprites/023MSPE.png"},
    { no: 24, name: "Arbok",  stage: 2, type: ["Poison"], abilities: ["Intimidate", "Shed_Skin", "Unnerve"
    ], locations: ["Gen1_Route_23", "Gen1_Cerulean_Cave"], evolutions: ["Ekans"], img: "./sprites/024MSPE.png"},
    { no: 25, name: "Pikachu",  stage: 2, type: ["Electric"], abilities: ["Static", "Lightning_Rod"], locations: ["Gen1_Viridian_Forest", "Gen1_Power_Plant", "Gen1_Starter", "Gen1_Celadon_City"], evolutions: ["Pichu", "Raichu"], img: "./sprites/025MSPE.png"},
]; 

const routes = ["Gen1_Starter", "Gen1_Route_1", "Gen1_Viridian_City", "Gen1_Route_22", "Gen1_Route_2", "Gen1_Viridian_Forest", "Gen1_Route_3", "Gen1_Route_4", "Gen1_Mt_Moon", "Gen1_Cerulean_City", "Gen1_Route_24", "Gen1_Route_25", "Gen1_Route_5", "Gen1_Route_6", "Gen1_Vermillion_City", "Gen1_Route_11", "Gen1_Digletts_Cave", "Gen1_Route_9",
    "Gen1_Route_10", "Gen1_Rock_Tunnel", "Gen1_Pokémon_Tower", "Gen1_Route_12", "Gen1_Route_8", "Gen1_Route_7", "Gen1_Celadon_City", "Gen1_Saffron_City", "Gen1_Route_16", "Gen1_Route_17", "Gen1_Route_18", "Gen1_Fuschia_City", "Gen1_Safari_Zone", "Gen1_Route_15", "Gen1_Route_14", "Gen1_Route_13", "Gen1_Power_Plant", "Gen1_Route_19", "Gen1_Route_20", 
    "Gen1_Seafoam_Islands", "Gen1_Cinnabar_Island", "Gen1_Pokémon_Mansion", "Gen1_Route_21", "Gen1_Route_23", "Gen1_Victory_Road", "Gen1_Cerulean_Cave"
];
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
        team[temp] = {route: r, pokemon: p, status: "Alive"}
    } else {
        team.push({route: r, pokemon: p});
    }
}