const { task, series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const clean = require('gulp-clean');

function buildScripts() {
  return src('./assets/js/main.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('./assets/js'))
    .pipe(browserSync.stream());
}

function buildStyles() {
  return src('./assets/scss/style.scss')
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'] }))
    .pipe(concat('style.min.css'))
    .pipe(sass({ style: 'compressed' }))
    .pipe(dest('./assets/css'))
    .pipe(browserSync.stream());
}

function watching() {
  watch(['./assets/scss/style.scss'], buildStyles);
  watch(['./assets/js/main.js'], buildScripts);
  watch(['./assets/**/*.html']).on('change', browserSync.reload);
}

function browserSyncInit() {
  browserSync.init({
    server: {
      baseDir: 'assets',
    },
  });
}

function building() {
  return src(
    ['assets/css/style.min.css', 'assets/js/main.min.js', 'assets/*.html'],
    { base: 'assets' }
  ).pipe(dest('dist'));
}

function cleanDist() {
  return src('dist').pipe(clean());
}
exports.buildStyles = buildStyles;
exports.buildScripts = buildScripts;
exports.watching = watching;
exports.browserSyncInit = browserSyncInit;

exports.build = series(cleanDist, building);

exports.default = parallel(
  buildStyles,
  buildScripts,
  browserSyncInit,
  watching
);
