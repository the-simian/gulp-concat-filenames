[![Build Status](https://travis-ci.org/the-simian/gulp-concat-filenames.svg?branch=master)](https://travis-ci.org/the-simian/gulp-concat-filenames)

[![Coverage Status](https://img.shields.io/coveralls/the-simian/gulp-concat-filenames.svg)](https://coveralls.io/r/the-simian/gulp-concat-filenames)




# Information

|              |                                                                                                               |
|--------------|---------------------------------------------------------------------------------------------------------------|
| Package      | gulp-concat-filenames                                                                                         |
| Description  | Similar to concat, but creates a list of names in the output file, rather than all the contents being merged. |
| Node Version | >= 0.10                                                                                                       |

## Usage


### Basic Usage, No options.
```js
var concatFilenames = require('gulp-concat-filenames');

var concatFilenamesOptions = {

};

function fileManifest(){
  gulp
      .src('./lib/**/*.*')
      .pipe(concatFilenames('manifest.txt', concatFilenamesOptions))
      .pipe(gulp.dest('./output/'));
}


gulp.task('file-manifest', fileManifest);

```