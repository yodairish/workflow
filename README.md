# Yodairish workflow

Basic set of plugins and instructions that you can use when starting a new project.

## Getting started

  - Clone the repository to a some folder or just download zip.

  - Copy files to root of your new project.

  - Change in `packege.json` and `bower.json` the required fields like 'name', 'description', 'authors'.. then use `npm install`.
  
  - Move files from `hooks` folder to `.git/hooks`.

## Style guides

  JS: [style guide](https://github.com/yodairish/javascript).
  CSS/HTML: [style guide](https://github.com/yodairish/sass-guide).
  
## List of plugins

  - [bower](http://bower.io/): package manager for front-end.

  - [gemini](https://github.com/bem/gemini): utility for testing markup.

  - [gulp](http://gulpjs.com/): build system.

  - [gulp-csscomb](https://github.com/koistya/gulp-csscomb): coding style formatter for CSS.

  - [gulp-jscs](https://github.com/jscs-dev/gulp-jscs/): js code style checker.

  - [gulp-jshint](https://github.com/spenceralger/gulp-jshint): js linter.

  - [gulp-postcss](https://github.com/w0rm/gulp-postcss): framework for CSS postprocessors. Include autoprefixer and css minifier.

  - [gulp-sass](https://github.com/dlmanning/gulp-sass): css preprocessor.

  - [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps): create sourcemaps.

  - [gulp-webpack](http://webpack.github.io/): module bundler.

  - [jest-cli](https://facebook.github.io/jest/): js unit testing framework.
 
## Git hooks

  - pre-commit: run gulp linter tasks for js and css diff files.

## Helpful modules

  - paramFiles.js: allow you to send the selected files to the gulp task.

## License

MIT © Yodairish 2014
