var exec = require('child_process').exec;
var express = require('express');
var http = require('http');

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    // Default task(s).
    grunt.registerTask('default', function () {
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
    
    grunt.registerTask('serve', function () {
    	var log = grunt.log.write('staring server on 1841 ...');
    	var done = this.async();
    	var app = express();
    	var server = http.createServer(app);
    	app.use(express.static(__dirname));
    	server.listen(1841, function (err, stdout, stderr) {
    		if (err) {
    			log.error();
    			done();
    			return;
    		}
    		log.ok();
    	});
    	
    });
};