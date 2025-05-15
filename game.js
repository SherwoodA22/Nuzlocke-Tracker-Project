import { pokemon, gameRoutes } from "./pokemon.js";


const box = [];
const team = [];
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("name");

const routes = gameRoutes[gameRoutes.findIndex((el) => el.game === id)].route;



function displayRoutes() {
const encounter = document.getElementById("encounter_details");
const gameName = document.createElement("p");
gameName.innerText = `Current Game: Pokémon ${id}`;
gameName.id = "gameTitle"
encounter.appendChild(gameName);
routes.forEach((el) => {
    let div1 = document.createElement("div");
    div1.id = `${el}_div`;
    div1.classList = "wrapper";
    encounter.appendChild(div1);
    let p = document.createElement("p");
    p.innerText = `${el.replace('_', " ")}`
    p.innerText = p.innerText.replace( `${id}`, "");
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
    evolve.classList = "evolve";
    let evolveImg = document.createElement("img");
    evolveImg.src = "./sprites/evolve.png";
    evolveImg.id = `${el}_evolve_img`;
    evolve.appendChild(evolveImg);
    evolve.addEventListener("click", () => evolutionList(`${el}_input`, `${el}_evolve`));
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
            span.innerText = `${pel.name}`;
            li.appendChild(span);
            li.addEventListener("click", () => addToTeam(el, pel, `${el}_options`, `${el}_input`));
            document.getElementById(`${el}_options`).appendChild(li);
    
    }
})
})

document.addEventListener("click", (e) => {
  routes.forEach((route) => {
    const input = document.getElementById(`${route}_input`);
    const options = document.getElementById(`${route}_options`);
    const select = document.getElementById(`${route}_select`);
    const status = document.getElementById(`${route}_status`);
     const evolve = document.getElementById(`${route}_evolve`);
     const evolveList = document.getElementById(`${route}_evolve_ul`);

    if (
      input && options &&
      !e.target.closest(`#${route}_input`) &&
      !e.target.closest(`#${route}_options`)
    ) {
      options.classList.remove("show");
    }

    if (
      select && status &&
      !e.target.closest(`#${route}_select`) &&
      !e.target.closest(`#${route}_status`)
    ) {
      status.classList.remove("show");
    }

    if (
      evolve && evolveList &&
      !e.target.closest(`#${route}_evolve`) &&
      !e.target.closest(`#${route}_evolve_ul`)
    ) {
      evolveList.classList.remove("show");
    }
  });
});

}


function addStatus(id, text, hide, poke) {
    let statText = document.getElementById(text)
    statText.innerText = `${id}`
    let temp =  document.getElementById(poke).textContent; 
    let find = box.findIndex((el) => el.pokemon.name === temp);

    if (temp !== "Select Pokémon...") {
            box[find].status = id;
    } 
    search(hide);
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
    span.id = `${r}_${p.name}_span`;
    span.classList = "route_encounter_value";
    span.innerText = `${p.name}`
    let image = document.createElement("img");
    image.src = `${p.img}`;
    image.classList = "pokemonDisplay";
    pid.innerText = "";
    pid.appendChild(image);
    pid.appendChild(span)
    search(id);
}


function evolutionList(input, clicked) {
    if (document.querySelector(`#${input} span`)) {
        const en = document.querySelector(`#${input} span`)

    if (!document.getElementById(`${clicked}_ul`) && en.textContent !== "Select Pokémon...") {
        let temp = pokemon.findIndex((el) => el.name === en.textContent)
        let evo = document.getElementById(clicked);

        const ul = document.createElement("ul");
        ul.id = `${clicked}_ul`;
        pokemon[temp].evolutions.forEach((el) => {
            let temp2 = pokemon.findIndex((e) => e.name == el)
            if (temp2 !== -1) {
                const li = document.createElement("li");
                li.id = `${el}_li`;
                let img = document.createElement(`img`);
                img.src = `${pokemon[temp2].img}`;
                li.appendChild(img);
                li.addEventListener("click", () => evolvePokemon(el, input))
                ul.appendChild(li);
            }
        })
        evo.appendChild(ul);
        search(`${clicked}_ul`);

    } else if (en.textContent !== "Select Pokémon...") {
        const en = document.querySelector(`#${input} span`)
        let temp = pokemon.findIndex((el) => el.name === en.textContent)
        let evo = document.getElementById(clicked);

        const ul = document.getElementById(`${clicked}_ul`)
        ul.innerHTML = "";
        pokemon[temp].evolutions.forEach((el) => {

            let temp2 = pokemon.findIndex((e) => e.name == el)
            
            if (temp2 !== -1) {
                const li = document.createElement("li");
                li.id = `${el}_li`;
                let img = document.createElement(`img`);
                img.src = `${pokemon[temp2].img}`;
                li.appendChild(img);
                li.addEventListener("click", () => evolvePokemon(el, input))
                ul.appendChild(li);
            }
        })
        
        evo.appendChild(ul);
        search(`${clicked}_ul`);
    }
    }
}

function evolvePokemon (p,  input) {
    let el = document.querySelector(`#${input} span`);
    let temp = el.innerText;
    let temp2 = pokemon.findIndex((e) => e.name == p)
    let temp3 = box.findIndex((i) => i.pokemon.name == temp)
    box[temp3].pokemon =  pokemon[temp2];
    el.textContent = p;
    document.querySelector(`#${input} img`).src = box[temp3].pokemon.img;
    console.log(box);


}

function pokemonReset(r, input1, input2) {
    let status = document.getElementById(input2)
    const p = document.getElementById(input1);


    if (box.some(el => el.route === r)) {
        let temp = box.findIndex((el) => el.route === r)
        box.splice(temp, 1);
        status.innerText = "Status..."
        p.innerHTML = "";
        let span = document.createElement("span");
        span.innerText = `Select Pokémon...`;
        p.appendChild(span);
    }
    
}

displayRoutes();