var through = require('through');
var path = require('path');
var gutil = require('gulp-util');
var File = gutil.File;
var PluginError = gutil.PluginError;

function concatFilenames(filename, opts) {
    'use strict';

    opts = opts || {};
    if (!filename) {
        throw new PluginError('gulp-concat-filenames', 'Missing fileName option for gulp-concat-filenames');
    }

    if (typeof opts.newLine !== 'string') {
        opts.newLine = gutil.linefeed;
    }

    var buffer = [],
        firstfile;

    function bufferContents(file) {
        if (file.isNull()) {
            return;
        }

        if (file.isStream()) {
            var errorNoStream = new PluginError('gulp-concat-filenames', 'Streaming not supported');
            return this.emit('error', errorNoStream);
        }

        firstfile = firstfile || file;

        var requirePath = path.resolve(file.path);


        requirePath = opts.root ?
            path.relative(opts.root, requirePath) :
            requirePath;

        var thisRequire = [
                    opts.prepend || '',
                    requirePath.replace(/\\/g, '\/'),
                    opts.append || '',
                    opts.newLine
                ].join('');

        buffer.push(new Buffer(thisRequire));
    }

    function endStream() {
        if (buffer.length === 0) {
            return this.emit('end');
        }

        var outFileContents = Buffer.concat(buffer),
            outFilePath = path.join(firstfile.base, filename);

        var outFile = new File({
            cwd: firstfile.cwd,
            base: firstfile.base,
            path: outFilePath,
            contents: outFileContents
        });




        this.emit('data', outFile);
        this.emit('end');
    }

    return through(bufferContents, endStream);
}

module.exports = concatFilenames;