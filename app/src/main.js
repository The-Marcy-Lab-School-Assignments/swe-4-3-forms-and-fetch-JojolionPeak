import { renderPokemon, renderError, renderSuccess } from "./dom-helpers";
import getRandomPokemon from "./fetch-helpers";
import postDiscoveredPokemon from "./fetch-helpers";

async function getAndRenderPokemon() {
  let val = await getRandomPokemon();
  if (val.error) {
    document.getElementById("error").textContent = "";
    renderError(val.error);
  } else {
    document.getElementById("success").textContent = "";
    renderPokemon(val.data);
    renderSuccess(`${val.data.name} was discovered!`);
  }
}
getAndRenderPokemon();

const btn = document.getElementById("discover-btn");
btn.addEventListener("click", () => {
  getAndRenderPokemon();
});

const form = document.getElementById("capture-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = form.elements.name.value;
  const types = form.elements.types.value;
  const isFavorite = form.elements.favorite.checked;
  const formValues = {
    name,
    types,
    isFavorite,
  };
  await postDiscoveredPokemon(formValues).then((val) => {
    if (val.error === null) {
      renderSuccess(`${formValues.name} has been captured!`);
    } else {
      renderError("Error: unable to capture Pokémon. Please try again later");
    }
  });
  form.reset();
});
