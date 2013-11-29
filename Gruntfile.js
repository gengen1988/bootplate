module.exports = function (grunt) {
    var exec = require('child_process').exec;

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 1841,
                    base: __dirname,
                    open: 'http://localhost:1841',
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('init', function () {
    	var log = grunt.log.write('Installing touch library ...');
    	var done = this.async();
    	exec('git submodule update --init', function (err, stdout, stderr) {
    	    if (err) {
                log.error();
                done();
    	        return;
    	    }
            log.ok();
            done();
    	});
    });
    
    grunt.registerTask('default', ['connect']);
};
