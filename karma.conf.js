module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: ['script/helpers.js', 'test/test.js'],
    eporters: ['progress', 'mocha', 'coverage'],
    port: 9876,  // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome', 'Firefox', 'IE'],
    autoWatch: true,
    concurrency: Infinity,
     browserConsoleLogOptions: {
      level: 'error',
      format: '%b %T: %m',
      terminal: true
    }
  })
}