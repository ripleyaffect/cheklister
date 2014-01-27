// Karma configuration
// Generated on Sat Jan 25 2014 14:15:53 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // frameworks to use
    frameworks: ['ng-scenario'],

    // list of files / patterns to load in the browser
    files: [
      'checklist/static/lib/angular/angular.min.js',
      'checklist/static/lib/angular/angular-resource.min.js',
      'checklist/static/lib/jquery/jquery.min.js',
      'checklist/static/lib/bootstrap/bootstrap.min.js',
      'checklist/static/js/controllers.js',
      'checklist/static/js/app.js',
      'checklist/static/lib/angular/angular-mocks.js',
      'spec/*Spec.js'
    ],

    // list of files to exclude
    exclude: [
      
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // web server port
    port: 9876,

    urlRoot: '/__karma__/',

    proxies: {
        '/': 'http://localhost:5000'
    },

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
