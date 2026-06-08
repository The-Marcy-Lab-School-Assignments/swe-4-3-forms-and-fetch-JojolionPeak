export function renderPokemon(pokemonObj) {
  const ul = document.getElementById("discovered-list");
  const li = document.createElement("li");
  const img = document.createElement("img");
  const name = document.createElement("p");
  name.textContent = pokemonObj.name;
  const types = document.createElement("p");
  types.textContent = pokemonObj.types;
  img.src = pokemonObj.sprite;
  li.append(img, name, types);
  // li.append(name);
  // li.append(types);
  ul.prepend(li);
}

export function renderError(msg) {
  const p = document.getElementById("error");
  p.textContent = msg;
}

export function renderSuccess(msg) {
  const p = document.getElementById("success");
  p.textContent = msg;
}
