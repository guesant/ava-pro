#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const esbuild = require("esbuild");
const { execSync } = require("child_process");
const {
  default: postCssPlugin,
} = require("esbuild-plugin-postcss2/dist/index");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const SRC = "src";
const SRC_SCRIPTS = `${SRC}/scripts`;

const DIST = "dist";
const DIST_EXT = `${DIST}/ext`;

const getVersionFromGit = () => {
  try {
    return (
      "git#" +
      execSync('git --no-pager log --format="%h" -n 1').toString().trim()
    );
  } catch (error) {
    return "unknown";
  }
};

const argv = yargs(hideBin(process.argv)).argv;

const options = {
  isWatchMode: argv.watch,

  isProduction:
    argv.mode !== undefined
      ? argv.mode === "production"
      : process.env.NODE_ENV === "production",

  sourcemap: argv.sourcemap === true,

  buildVersion:
    argv.buildVersion || process.env.EXT_VERSION || getVersionFromGit(),
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
    define: {
      ["process.env.EXT_VERSION"]: `"${options.buildVersion}"`,
    },
  };

  for (const [script, options = {}] of [
    ["ContentScript"],
    ["BackgroundScript", { define: { global: "globalThis" } }],
  ]) {
    esbuild.build({
      ...sharedOptions,
      entryPoints: [`${SRC}/${script}/index.ts`],
      outfile: `${DIST_EXT}/${script}.js`,
      ...options,
    });
  }

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
