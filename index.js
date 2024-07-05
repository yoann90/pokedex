// let pokemons = [
//   {
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     nom: "Bulbasaur",
//     numeros: "N° 1",
//     types: ["Poison", "Grass"],
//   },
//   {
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//     nom: "Ivysaur",
//     numeros: "N° 2",
//     types: ["Poison", "Grass"],
//   },
//   {
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
//     nom: "Venusaur",
//     numeros: "N° 3",
//     types: ["Poison", "Grass"],
//   },
//   {
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
//     nom: "Charmander",
//     numeros: "N° 4",
//     types: ["Fire"],
//   },
// ];

const colorTypes = {
  normal: "#A8A77A",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  stellar: "#FFD700",
  unknown: "#A8A77A",
};

const container = document.querySelector(".container");
const containerDetail = document.querySelector(".container-detail");
const cardPokemons = (pokemon) => {
  const model = `
    <div class="card" id="${pokemon.id}">
        <img
           
            src=${pokemon.sprites.front_default}
              alt="
        />
        <strong class="number-pokemon">n°${pokemon.id}</strong>
        <h2 class="name-pokemon">${pokemon.name}</h2>
         <div class="typeofPokemon">
            ${pokemon.types
              .map((e) => {
                return `
                    <h4 
                        class="type1" 
                        style="background-color:${colorTypes[e.type.name]} ">
                        ${e.type.name}
                    </h4>
                `;
              })
              .join("")}
             
        </div>
    </div>
`;
  const div = document.createElement("div");
  div.innerHTML = model;
  container.append(div);

  const card = document.getElementById(pokemon.id);

  card.onclick = () => cardOnclick(pokemon);
};

const cardOnclick = (pokemon) => {
  const detailPokemon = `
  
            <div class="detail">
              <img src=${pokemon.sprites.front_default} alt="" />
              <strong class="number-pokemon">n°${pokemon.id}</strong>
              <h2 class="name-pokemon">${pokemon.name}</h2>
              <div class="typeofPokemon">
               ${pokemon.types
                 .map((e) => {
                   return `
                      <h4 
                          class="type1" 
                          style="background-color:${colorTypes[e.type.name]}">
                          ${e.type.name}
                      </h4>
                  `;
                 })
                 .join("")}
              </div>
              <h3 class="Pokedex">Pokedex Entry</h3>
              <p>
                A strange seed was planted on its back at birth. the plant sprouts
                and grows with this pokémon.
              </p>
              <div class="sizePokemon">
                <div class="Height">
                  <h4>Height</h4>
                  <p>${pokemon.height}m</p>
                </div>
                <div class="Weight">
                  <h4>Weight</h4>
                  <p>${pokemon.weight}kg</p>
                </div>
              </div>
              <h3 class="abilities-pokemon">Abilities</h3>
              <div class="abilities">
                <p>${pokemon.abilities[0].ability.name}</p>
                <p>${pokemon.abilities[1].ability.name}</p>
              </div>
              <h3 class="stats">Stats</h3>
              <div class="stats-reference">
                <div class="reference">
                  <p>HP</p>
                  <p>${pokemon.stats[1].base_stat}</p>
                </div>
                <div class="reference">
                  <p>ATK</p>
                  <p>${pokemon.stats[0].base_stat}</p>
                </div>
                <div class="reference">
                  <p>DEF</p>
                  <p>${pokemon.stats[2].base_stat}</p>
                </div>
                <div class="reference">
                  <p>SpA</p>
                  <p>${pokemon.stats[3].base_stat}</p>
                </div>
                <div class="reference">
                  <p>SpD</p>
                  <p>${pokemon.stats[4].base_stat}</p>
                </div>
                <div class="reference">
                  <p>SPD</p>
                  <p>${pokemon.stats[5].base_stat}</p>
                </div>
                <div class="reference">
                  <p>TOT</p>
                  <p>49</p>
                </div>
              </div>
              <h3 class="evolution">Evolution</h3>
              <div class="evolution-level">
                <img
                  class="imgPoke"
                  src="${pokemon.sprites.front_default}"
                  alt=""
                />
                <p>Lv. 16</p>
                <img
                  class="imgPoke"
                  src="${pokemon.sprites.front_default}"
                  alt=""
                />
                <p>Lv. 16</p>
                <img
                  class="imgPoke"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                  alt=""
                />
              </div>
            </div>
  `;
  const detail = document.createElement("div");
  console.log(detail);
  detail.innerHTML = detailPokemon;

  containerDetail.append(detail);
};

const apiPokemons = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    const pokemons = await response.json();

    const ListPokmons = pokemons.results;

    for (let i = 0; i < ListPokmons.length; i++) {
      const element = ListPokmons[i];
      const response = await fetch(element.url);

      const pokemon = await response.json();
      cardPokemons(pokemon);
    }
  } catch (error) {
    console.log(error);
  }
};
apiPokemons();
