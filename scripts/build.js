#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const esbuild = require("esbuild");
const {
  default: postCssPlugin,
} = require("esbuild-plugin-postcss2/dist/index");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const SRC = "src";
const DIST = "dist";
const DIST_EXT = `${DIST}/ext`;
const SRC_SCRIPTS = `${SRC}/scripts`;

const argv = yargs(hideBin(process.argv)).argv;

const options = {
  isWatchMode: argv.watch,

  isProduction: argv.mode
    ? argv.mode === "production"
    : process.env.NODE_ENV === "production",

  sourcemap: argv.sourcemap === true,
};

function main() {
  options.isProduction && console.log(`[info] production mode enabled.`);
  options.isWatchMode && console.log(`[info] watch mode enabled.`);

  const sharedOptions = {
    bundle: true,
    watch: options.isWatchMode,
    minify: options.isProduction,
    sourcemap: options.sourcemap,
  };

  esbuild.build({
    ...sharedOptions,
    banner: {},
    entryPoints: [`${SRC_SCRIPTS}/content_script/index.ts`],
    outfile: `${DIST_EXT}/content_script.js`,
  });

  const htmlScripts = ["browserAction"];

  for (const script of htmlScripts) {
    esbuild.build({
      ...sharedOptions,
      plugins: [postCssPlugin({ modules: true })],
      inject: [`${SRC}/react-shim.ts`],
      entryPoints: [`${SRC_SCRIPTS}/${script}/index.tsx`],
      outfile: `${DIST_EXT}/${script}/script.js`,
    });
  }
}

main();
