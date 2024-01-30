const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");

const buildStyles = () => {
  return src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(concat("index.css"))
    .pipe(dest("./css"));
};

const watchTask = () => {
  watch(["./scss/*.scss", "./scss/sections/*.scss"], buildStyles);
};

exports.default = series(buildStyles, watchTask);
