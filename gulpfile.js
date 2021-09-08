/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { parallel, src, dest, watch, series } = require("gulp");

// consts

const DIST_EXT = "dist/ext";
const SRC_ASSETS = "src/assets";
const WEBEXTENSION_POLYFILL = require.resolve(
  "webextension-polyfill/dist/browser-polyfill.min.js"
);

// tasks

const buildAssets = parallel(
  () => src([`${SRC_ASSETS}/**/*`]).pipe(dest(DIST_EXT)),
  () => src(WEBEXTENSION_POLYFILL).pipe(dest(DIST_EXT))
);

const watchBuildAssets = series(
  buildAssets,
  parallel(() => watch(`${SRC_ASSETS}`, buildAssets))
);

// expose tasks

exports.assets = buildAssets;
exports.watchAssets = watchBuildAssets;

exports.watch = parallel(watchBuildAssets);
exports.default = parallel(buildAssets);
