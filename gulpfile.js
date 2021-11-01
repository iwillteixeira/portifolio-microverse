const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const babel =require('gulp-babel');

// Sass Task
function scssTask(){
  return src('src/scss/**/*.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('style', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask(){
  return src(['src/js/**/*.js', 'node_modules/jquery/dist/jquery.js' , 'node_modules/bootstrap/dist/js/bootstrap.js'], { sourcemaps: true })
    .pipe(babel())
    .pipe(terser())
    .pipe(dest('js', { sourcemaps: '.' }));
}

//imagemin

// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
  watch('*.html', browsersyncReload);
  watch(['src/scss/**/*.scss', 'src/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);



//First Gulp file

