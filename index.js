import color from "color";
import "@material/mwc-button";
import "@material/mwc-icon";
import { foo } from "./foo.js";
import data from "./data.json";

console.log(foo);

const app = document.getElementById("app");

app.innerHTML = `
  <h1>Hello, I'm an app with some crazy things in it!</h1>
  <mwc-button raised label="Click here!" icon="code"></mwc-button>

  <h2>Here's a button colored by a CJS module!</h2>
  <button style="background-color: ${color
    .hsl(70, 70, 50)
    .hex()}">Prettyyyy</button>


  <h2>Here's some data loaded from a JSON file directly, imported as ES Module</h2>
  <p>${JSON.stringify(data)}</p>
`;
