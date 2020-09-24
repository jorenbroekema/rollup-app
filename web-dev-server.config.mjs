import { fromRollup } from "@web/dev-server-rollup";
import commonjsRollup from "rollup-plugin-commonjs";
import dataJsonLoaderRollup from "./dataJsonRollup.js";

const commonjs = fromRollup(commonjsRollup);
const dataJsonLoader = fromRollup(dataJsonLoaderRollup);

export default {
  open: true,
  watch: true,
  nodeResolve: true,
  plugins: [commonjs(), dataJsonLoader()],
  mimeTypes: {
    "data.json": "js",
  },
};
