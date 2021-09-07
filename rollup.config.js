/* eslint-disable no-undef */

import copy from "@guanghechen/rollup-plugin-copy";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import iife from "rollup-plugin-iife";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const env = {
  NODE_ENV: process.env.NODE_ENV,
};

const DIST = "dist/ext";
const SRC_ASSETS = "src/assets";
const SRC_SCRIPTS = "src/scripts";
const isProduction = env.NODE_ENV === "production";

const intro = `
/** @license ${pkg.name} ${pkg.version}
 * ${pkg.description}
 *
 * Copyright (c) ${pkg.author.slice(0, pkg.author.indexOf(" <"))}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(() => {
  const env = ${JSON.stringify(env)};
  (!globalThis.process) && (globalThis.process = {});
  (!globalThis.process.env) && (globalThis.process.env = {})
  globalThis.process.env = {...globalThis.process.env, ...env};
})();
`;

export default {
  input: {
    content_script: `${SRC_SCRIPTS}/content_script/index.ts`,
    "browserAction/script": `${SRC_SCRIPTS}/browserAction/index.tsx`,
  },
  plugins: [
    del({ targets: [`${DIST}/ext/*`], runOnce: true }),
    copy({
      targets: [
        { src: `${SRC_ASSETS}/*`, dest: `${DIST}` },
        {
          src: "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js",
          dest: `${DIST}`,
        },
      ],
      copyOnce: true,
    }),

    nodeResolve(),
    commonjs(),

    typescript({}),

    postcss({
      autoModules: true,
    }),

    isProduction && terser(),
    iife(),
  ],
  output: {
    intro,
    dir: DIST,
  },
};
