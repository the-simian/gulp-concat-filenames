
# Information

|              |                                                                                                               |
|--------------|---------------------------------------------------------------------------------------------------------------|
| Package      | gulp-concat-filenames                                                                                         |
| Description  | Similar to concat, but creates a list of names in the output file, rather than all the contents being merged. |
| Node Version | >= 0.10                                                                                                       |

## Usage

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