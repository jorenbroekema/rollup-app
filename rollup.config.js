import copy from "rollup-plugin-copy";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "./index.js",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    copy({
      targets: [{ src: "./index.html", dest: "./dist" }],
    }),
    nodeResolve(),
    commonjs(),
    dataJsonLoader(),
  ],
};
