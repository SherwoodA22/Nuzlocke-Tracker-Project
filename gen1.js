import { pokemon } from "./pokemon.js";

const routes = ["Gen1_Starter", "Gen1_Route_1", "Gen1_Viridian_City", "Gen1_Route_22", "Gen1_Route_2", "Gen1_Viridian_Forest", "Gen1_Route_3", "Gen1_Route_4", "Gen1_Mt_Moon", "Gen1_Cerulean_City", "Gen1_Route_24", "Gen1_Route_25", "Gen1_Route_5", "Gen1_Underground_Path", "Gen1_Route_6", "Gen1_Vermilion_City", "Gen1_Route_11", "Gen1_Digletts_Cave", "Gen1_Route_9",
    "Gen1_Route_10", "Gen1_Rock_Tunnel", "Gen1_Pokémon_Tower", "Gen1_Route_12", "Gen1_Route_8", "Gen1_Route_7", "Gen1_Celadon_City", "Gen1_Saffron_City", "Gen1_Route_16", "Gen1_Route_17", "Gen1_Route_18", "Gen1_Fuchsia_City", "Gen1_Safari_Zone", "Gen1_Route_15", "Gen1_Route_14", "Gen1_Route_13", "Gen1_Power_Plant", "Gen1_Route_19", "Gen1_Route_20", 
    "Gen1_Seafoam_Islands", "Gen1_Cinnabar_Island", "Gen1_Pokémon_Mansion", "Gen1_Route_21", "Gen1_Route_23", "Gen1_Victory_Road", "Gen1_Cerulean_Cave"
];


const box = [];
const team = [];
const fainted = [];


const encounter = document.getElementById("encounter_details");
routes.forEach((el) => {
    let div1 = document.createElement("div");
    div1.id = `${el}_div`;
    div1.classList = "wrapper";
    encounter.appendChild(div1);
    let p = document.createElement("p");
    p.innerText = `${el.replace('_', " ")}`
    p.innerText = p.innerText.replace("Gen1", "");
    p.innerText = p.innerText.replace("_", " ");
    div1.appendChild(p);
    let div = document.createElement("div");
    div.id=`${el}_pokemon_div`;
    div1.appendChild(div);

    let input = document.createElement("div");
    input.contentEditable = "false";
    input.innerText = "Select Pokémon...";
    input.id = `${el}_input`;
    input.addEventListener("click", (event) => search(`${el}_options`));
    input.addEventListener("focusout", () => search(`${el}_options`));
    div.appendChild(input);
    let div2 = document.createElement("div");
    div2.id = `${el}_status_div`
    div1.appendChild(div2);
    let faint = document.createElement("div");
    faint.contentEditable = "false";
    faint.innerText = `Status...`
    let status = document.createElement("ul");
    status.id = `${el}_status`;
    faint.id = `${el}_select`;
    let o1 = document.createElement("li");
    o1.value = "status";
    o1.innerText = "Status..."
    let o2 = document.createElement("li");
    o2.value = "captured";
    o2.innerText = "Captured"
    let o3 = document.createElement("li");
    o3.value = "recieved";
    o3.innerText = "Recieved"
    let o4 = document.createElement("li");
    o4.value = "fainted";
    o4.innerText = "Fainted"
    o1.addEventListener("click", () => addStatus(o1.innerText, `${el}_select`, `${el}_status`, `${el}_input`));
    o2.addEventListener("click", () => addStatus(o2.innerText, `${el}_select`, `${el}_status`, `${el}_input`));
    o3.addEventListener("click", () => addStatus(o3.innerText, `${el}_select`, `${el}_status`, `${el}_input`));
    o4.addEventListener("click", () => addStatus(o4.innerText, `${el}_select`, `${el}_status`, `${el}_input`));
    status.appendChild(o1);
    status.appendChild(o2);
    status.appendChild(o3);
    status.appendChild(o4);
    faint.addEventListener("click", () => search(`${el}_status`))
    div2.appendChild(faint);
    div2.appendChild(status);

    let evolve = document.createElement("div");
    evolve.id = `${el}_evolve`;
    evolve.classList = "reset";
    let evolveImg = document.createElement("img");
    evolveImg.src = "./sprites/evolve.png";
    evolveImg.id = `${el}_evolve_img`;
    evolve.appendChild(evolveImg);
    evolve.addEventListener("click", () => evolve(`${el}_input`));
    div1.appendChild(evolve);

    let reset = document.createElement("div");
    reset.id = `${el}_reset`;
    reset.classList = "reset";
    let resetImg = document.createElement("img");
    resetImg.src = "./sprites/reset.png";
    resetImg.id = `${el}_reset_img`;
    reset.appendChild(resetImg);
    reset.addEventListener("click", () => pokemonReset(el, `${el}_input`, `${el}_select`));
    div1.appendChild(reset);
    
    let ul = document.createElement("ul");
    ul.id = `${el}_options`;
    div.appendChild(ul);

    pokemon.forEach((pel) => {
        if (pel.locations.includes(el)) {
            let li = document.createElement(`li`);
            li.id = `${el}_${pel.name}`;
            let img = document.createElement(`img`);
            img.src = `${pel.img}`;
            li.appendChild(img);
            let span = document.createElement("span");
            span.id = `${pel.name}_span`;
            span.innerText = `${pel.name}`
            li.appendChild(span)
            li.addEventListener("click", () => addToTeam(el, pel, `${el}_options`, `${el}_input`));
            document.getElementById(`${el}_options`).appendChild(li);
    
    }
})
})


function addStatus(id, text, hide, poke) {
    document.getElementById(text).innerText = `${id}`
    let temp =  document.getElementById(poke).textContent; 
    if (temp !== "Select Pokémon...") {
        let find = box.findIndex((el) => el.pokemon.name === temp);
        box[find].status = id;
    }
    search(hide);
    console.log(box)
}


function search(id) {
    document.getElementById(id).classList.toggle("show");
}

function addToTeam(r, p, id, selectid){

    if (box.some(el => el.route === r)) {
        let temp = box.findIndex((el) => el.route === r)
        box[temp] = {route: r, pokemon: p, status: ""}
    } else {
        box.push({route: r, pokemon: p, status: ""});
    }

    let pid = document.getElementById(selectid)
    let span = document.createElement("span");
    span.id = `${p.name}_span`;
    span.innerText = `${p.name}`
    let image = document.createElement("img");
    image.src = `${p.img}`;
    image.classList = "pokemonDisplay";
    pid.innerText = "";
    pid.appendChild(image);
    pid.appendChild(span)
    search(id);
}


function evolve(input) {

}

function pokemonReset(r, input1, input2) {
    let status = document.getElementById(input2)
    const p = document.getElementById(input1);
    console.log(status, p)


    if (box.some(el => el.route === r)) {
        let temp = box.findIndex((el) => el.route === r)
        box[temp].status = "Fainted";
        fainted.push(box[temp]);
        console.log("Fainted: ", fainted);
        box.splice(temp, 1);
        console.log("Box: ", box);
        status.innerText = "Status..."
        p.innerHTML = "";
        let span = document.createElement("span");
        span.innerText = `Select Pokémon...`;
        p.appendChild(span);
    }
    
}