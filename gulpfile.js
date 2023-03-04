const { src, dest } = require("gulp");
const { parallel } = require("gulp");
const { watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");
const browserSync = require("browser-sync").create();

const browserSyncJob = () => {
  browserSync.init({
    server: "build/",
  });
  watch("src/scss/**/*.scss", buildSass);
  watch("src/pages/**/*.pug", buildPug);
  watch("src/images/**/*", destImages);
  watch("src/js/**/*.js", destJs);
};

const buildSass = () =>
  src("src/scss/*.scss")
    .pipe(sass())
    .pipe(dest("build/styles/"))
    .pipe(browserSync.stream());

const buildPug = () =>
  src("src/pages/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("build/"))
    .pipe(browserSync.stream());

const destImages = () => {
  return src("src/images/**/*").pipe(dest("build/images"));
};

const destBootstrapJs = () => {
  return src("node_modules/bootstrap/dist/js/bootstrap.min.js").pipe(
    dest("build/js/")
  );
};

const destJs = () => {
  return src("src/js/**/*.js")
    .pipe(dest("build/js/"))
    .pipe(browserSync.stream());
};

exports.server = browserSyncJob;
exports.build = parallel(
  buildSass,
  buildPug,
  destImages,
  destBootstrapJs,
  destJs
);
