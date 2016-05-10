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
                e2eTests: 'tests/e2e/**/*.js',
                features: 'tests/features/**/*.feature',
                featureHelpers: 'tests/features/**/*.js'
            }
        }
    });

    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['protractor:e2e', 'protractor:features']);

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
    // Cucumber specific from http://angular.github.io/protractor/#/frameworks#using-cucumber.
    var protractorCucumberArgs = {
        // set to 'custom' instead of cucumber.
        framework: 'custom',
        // path relative to the current config file
        frameworkPath: require.resolve('protractor-cucumber-framework'),
        // relevant cucumber command line options
        cucumberOpts: {
            format: 'summary',
            require: '<%= config.files.featureHelpers %>'
        }
    };

    // Build protractor spec args for e2e tests (using Jasmine).
    var e2eArgs = {
        specs: [
            '<%= config.files.e2eTests %>'
        ]
    };
    Object.assign(e2eArgs, protractorArgs, protractorJasmineArgs);

    // Build protractor spec args for feature tests (using Cucumber).
    var featureArgs = {
        specs: [
            '<%= config.files.features %>'
        ]
    };
    Object.assign(featureArgs, protractorArgs, protractorCucumberArgs);

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
            },
            features: {
                options: {
                    args: featureArgs
                }
            }
        }
    });

};
