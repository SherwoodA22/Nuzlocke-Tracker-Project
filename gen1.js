const pokemon = [
    { no: 1, name: "Bulbasaur",  stage: 1, type: ["grass", "poison"], abilities: ["overgrow", "chlorophyll"], locations: ["starter"], evolutions: ["Ivysaur", "Venusaur"], img: "https://archives.bulbagarden.net/wiki/Category:Bulbasaur#/media/File:001MSPE.png"},
    { no: 2, name: "Ivysaur",  stage: 2, type: ["grass", "poison"], abilities: ["overgrow", "chlorophyll"], locations: [], evolutions: ["Bulbasaur", "Venusaur"], img: "https://archives.bulbagarden.net/wiki/Category:Ivysaur#/media/File:002MSPE.png"},
    { no: 3, name: "Venusaur",  stage: 3, type: ["grass", "poison"], abilities: ["overgrow", "chlorophyll"], locations: [], evolutions: ["Bulbasaur", "Ivysaur"], img: "https://archives.bulbagarden.net/wiki/Category:Venusaur#/media/File:003MSPE.png"},
    { no: 4, name: "Charmander",  stage: 1, type: ["fire"], abilities: ["blaze", "solar power"], locations: ["starter"], evolutions: ["Charmeleon", "Charizard"], img: "https://archives.bulbagarden.net/wiki/Category:Charmander#/media/File:004MSPE.png"},
    { no: 5, name: "Charmeleon",  stage: 2, type: ["fire"], abilities: ["blaze", "solar power"], locations: [], evolutions: ["Charmander", "Charizard"], img: "https://archives.bulbagarden.net/wiki/Category:Charmeleon#/media/File:00MSPE.png"},
    { no: 6, name: "Charizard",  stage: 3, type: ["fire", "flying"], abilities: ["blaze", "solar power"], locations: [], evolutions: ["Charmander", "Charmeleon"], img: "https://archives.bulbagarden.net/wiki/Category:Charizard#/media/File:006MSPE.png"},
    { no: 7, name: "Squirtle",  stage: 1, type: ["water"], abilities: ["torrent", "rain dish"], locations: ["starter"], evolutions: ["Wartortle", "Blastoise"], img: "https://archives.bulbagarden.net/wiki/Category:Squirtle#/media/File:007MSPE.png"},
    { no: 8, name: "Wartortle",  stage: 2, type: ["water"], abilities: ["torrent", "rain dish"], locations: [], evolutions: ["Squirtle", "Blastoise"], img: "https://archives.bulbagarden.net/wiki/Category:Wartortle#/media/File:008MSPE.png"},
    { no: 9, name: "Blastoise",  stage: 3, type: ["water"], abilities: ["torrent", "rain dish"], locations: [], evolutions: ["Squirtle", "Wartortle"], img: "https://archives.bulbagarden.net/wiki/Category:Blastoise#/media/File:009MSPE.png"},
];

const routes = ["starter", "route 1", "viridian city", "route 22", "route 2", "viridian forest", "route 3", "route 4", "mt. moon", "cerulean city", "route 24", "route 25", "route 5", "route 6", "vermillion city", "route 11", "diglett's cave", "route 9",
    "route 10", "rock tunnel", "pokemon tower", "route 12", "route 8", "route 7", "celadon city", "saffron city", "route 16", "route 17", "route 18", "fuschia city", "safari zone", "route 15", "route 14", "route 13", "power plant", "ropute 19", "route 20", 
    "seafoam islands", "cinnabar island", "pokemon mansion", "route 21", "route 23", "victory road", "cerulean cave"
];


const encounter = document.getElementById("encounter-details");
encounter.innerHTML += `<img src="https://archives.bulbagarden.net/wiki/Category:Blastoise#/media/File:009MSPE.png">`;

routes.forEach((el) => {
    encounter.innerHTML += `<p>${el}</p><select id="${el}">`;
    pokemon.forEach((pel) => {
        if (pel.locations.includes(el)) {
            console.log(pel.name)
            document.getElementById(`${el}`).innerHTML += `<option value="${pel.name}"><img src="${pel.img}" alt="${pel.name} sprite"/>${pel.name}</option>`;

        }
    })
})