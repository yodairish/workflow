'use strict';

var gulp = require('gulp');
var pf = require('./js/paramFiles');
//css
var csscomb = require('gulp-csscomb');
// js
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
// constants
var SRC_FOLDER = './src';
var PUBLIC_FOLDER = './public';

/**
 * Linting SCSS files
 * Possible send files to param -files=...
 */
gulp.task('csslint', function() {
  var files = pf.paramFiles();
  var stream;

  if (files) {
    stream = gulp.src(files)
      .pipe(csscomb('.csscomb.json'))
      .pipe(gulp.dest('./'));

  } else {
    stream = gulp.src(pf.css(SRC_FOLDER))
      .pipe(csscomb('.csscomb.json'))
      .pipe(gulp.dest(SRC_FOLDER));
  }

  return stream;
});

/**
 * Linting JS files
 * Possible send files to param -files=...
 */
gulp.task('jslint', function() {
  var files = pf.paramFiles();

  if (!files) {
    files = pf.js(SRC_FOLDER);
  }

  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
    .pipe(jscs());
});

gulp.task('lint', ['csslint', 'jslint']);

gulp.task('build', ['lint'], function() {
  return gulp.src('')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(PUBLIC_FOLDER));
});

gulp.task('default', ['build']);
