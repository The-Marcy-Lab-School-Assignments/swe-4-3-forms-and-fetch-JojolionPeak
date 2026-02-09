import { renderPokemon, renderError, renderSuccess } from "./dom-helpers";
import getRandomPokemon from "./fetch-helpers";

async function getAndRenderPokemon() {
  let val = await getRandomPokemon();
  if (val.error) {
    document.getElementById("success").textContent = "";
    renderError(val);
  } else {
    document.getElementById("error").textContent = "";
    renderPokemon(val.data);
    renderSuccess(val.data);
  }
}
getAndRenderPokemon();

const btn = document.getElementById("discover-btn");
btn.addEventListener("click", () => {
  getAndRenderPokemon();
});
