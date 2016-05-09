'use strict';

module.exports = function (grunt) {

    if (grunt.option('help')) {
        require('load-grunt-tasks')(grunt);
    } else {
        require('jit-grunt')(grunt, {
            protractor: 'grunt-protractor-runner'
        });
    }

    grunt.initConfig({
        config: {
            files: {
                e2eTests: 'tests/e2e/**/*.js'
            }
        }
    });

    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['protractor:e2e']);

    // DRY protractor args between using Jasmine and Cucumber.

    // Common args.
    var protractorArgs = {
        baseUrl: 'http://localhost:9000/',
        capabilities: {
            browserName: 'chrome'
        }
    };
    // Jasmine specific.
    var protractorJasmineArgs = {
        allScriptsTimeout: 11000,
        jasmineNodeOpts: {
            defaultTimeoutInterval: 30000
        }
    };

    // Build protractor spec args for e2e tests (using Jasmine).
    var e2eArgs = {
        specs: [
            '<%= config.files.e2eTests %>'
        ]
    };
    Object.assign(e2eArgs, protractorArgs, protractorJasmineArgs);

    grunt.config.merge({
        protractor: {
            options: {
                keepAlive: false,
                webdriverManagerUpdate: true,
                // Place all config here in Grunt so file expansion can be used.
                configFile: 'protractor-empty.conf.js'
            },
            e2e: {
                options: {
                    args: e2eArgs
                }
            }
        }
    });

};
