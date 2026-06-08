async function getRandomPokemon() {
  //random number generator between 1-150
  try {
    const id = Math.floor(Math.random() * 150) + 1;
    //fetching pokemon data from API and returns it in json
    const rs = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!rs.ok) {
      throw new Error(`Operation failed`);
    }
    const info = await rs.json();
    const sprite = info.sprites["front_shiny"];
    const pkName = info.species["name"];
    const type1 = info.types["0"]["type"]["name"];
    let types = [];
    types.push(type1);
    let type2;
    if (info.types["1"]) {
      type2 = info.types["1"]["type"]["name"];
      types.push(type2);
    }
    let pokemonObj = {
      name: pkName,
      types: types.join(", "),
      sprite: sprite,
    };
    return { data: pokemonObj, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
}
// getRandomPokemon().then((result) => console.log(result));

const postDiscoveredPokemon = async (formData) => {
  try {
    let formInfo = await fetch("https://formspree.io/f/mgolvaby", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!formInfo.ok) {
      throw new Error(
        `Encountered an error. ${error.status} ${error.statusText}`
      );
    }
    const jsonData = await formInfo.json();
    return { data: jsonData, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
postDiscoveredPokemon();

export default getRandomPokemon;
