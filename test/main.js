'use strict';

var concatFilenames = require('../index.js'),
    chai = require('chai'),
    sinonChai = require('sinon-chai'),
    expect = chai.expect;

chai.use(sinonChai);




describe('Given gulp-concat-filenames', function () {
    describe('When I do not provide a filename', function () {
        it('Then it should error', function () {

            function nofilenameProvided() {
                concatFilenames();
            }

            expect(nofilenameProvided)
                .to
                .throw(Error);

        });

    });
    describe('When I do provide a filename', function () {


    });

});