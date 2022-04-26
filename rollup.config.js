import css from "rollup-plugin-css-only";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import VuePlugin from "rollup-plugin-vue";
import { babel } from "@rollup/plugin-babel";
import pkg from "./package.json";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "umd",
      name: "ElementUiExtension",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      name: "ElementUiExtension",
      exports: "named",
      sourcemap: true,
    },
  ],
  external: ["vue", "element-ui"],
  plugins: [
    nodeResolve({}),
    commonjs({}),
    css({
      output: "element-ui-extension.css",
    }),
    babel({ babelHelpers: "bundled" }),
    VuePlugin({
      css: false,
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
      __buildVersion__: JSON.stringify(pkg.vserion),
    }),
    terser(),
  ],
};
