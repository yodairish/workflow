var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    // css
    csscomb = require('gulp-csscomb'),
    autoprefixer = require('autoprefixer-core'),
    csswring = require('csswring'),
    postcss = require('gulp-postcss'),
    // js
    sass = require('gulp-sass'),
    jshint = require("gulp-jshint"),
    jscs = require("gulp-jscs"),
    webpack = require('gulp-webpack');

gulp.task('csslint', function() {
  var files = getChosenFiles(process.argv);

  if (!files) {
    files = ['css/**/*.scss'];
  }
  
  return gulp.src(files)
    .pipe(csscomb(__dirname + '/.csscomb.json'))
    .pipe(gulp.dest('css'));
});

gulp.task('css', ['csslint'], function() {
  var processors = [
    autoprefixer({
      browsers: ['last 2 version']
    }),
    csswring({
      removeAllComments: true
    })
  ];
  
  return gulp.src(['css/components/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('public/css/map'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('jslint', function() {
  var files = getChosenFiles(process.argv);

  if (!files) {
    files = ['js/**/*.js'];
  }
  
  return gulp.src(files)
    .pipe(gulp.dest('client/js/hint/result'))
    .pipe(jshint.extract())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(jscs({
      "preset": "airbnb"
    }));
});

gulp.task('js', ['jslint'], function() {
  return gulp.src(['js/components/**/*.js'])
    .pipe(webpack({
      
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['js', 'css']);

/**
 * Tries to get the files sent as an argument
 * @param {Array.<string>}
 * @return {?Array}
 */
function getChosenFiles(argv) {
  var chosen = false,
      files = [];
  
  argv.forEach(function(arg) {
    if (arg.indexOf('-files') === 0 || arg.indexOf('-file') === 0) {
      var value = arg.split('=')[1];
      
      if (value) {
        value.split(',').forEach(function(file) {
          if (file) {
            files.push(file);
          }
        });
      }
      
      chosen = true;
    }
  });
  
  return (chosen ? files : null);
}