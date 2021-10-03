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

  isProduction:
    argv.mode !== undefined
      ? argv.mode === "production"
      : process.env.NODE_ENV === "production",

  sourcemap: argv.sourcemap === true,
};

function main() {
  options.isProduction && console.log(`[info] production mode enabled.`);
  options.isWatchMode && console.log(`[info] watch mode enabled.`);
  options.sourcemap && console.log(`[info] sourcemaps enabled.`);

  const sharedOptions = {
    bundle: true,
    watch: options.isWatchMode,
    minify: options.isProduction,
    sourcemap: options.sourcemap,
    incremental: options.isWatchMode,
  };

  esbuild.build({
    ...sharedOptions,
    entryPoints: [`${SRC_SCRIPTS}/content_script/index.ts`],
    outfile: `${DIST_EXT}/content_script.js`,
  });

  const htmlScripts = ["browserAction"];

  for (const script of htmlScripts) {
    esbuild.build({
      ...sharedOptions,

      ...(sharedOptions.watch
        ? {
            outfile: `${DIST_EXT}/${script}/script.js`,
          }
        : {
            format: "esm",
            splitting: true,
            entryNames: `[dir]/script`,
            outdir: `${DIST_EXT}/${script}`,
          }),

      inject: [`${SRC}/react-shim.ts`],
      plugins: [postCssPlugin({ modules: true })],
      entryPoints: [`${SRC_SCRIPTS}/${script}/index.tsx`],
    });
  }
}

main();
