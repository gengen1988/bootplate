module.exports = function (grunt) {
    var exec = require('child_process').exec;
    var rimraf = require('rimraf');
    var fs = require('fs');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 1841,
                    base: __dirname,
                    open: 'http://localhost:1841',
                    keepalive: true,
                    middleware: function (connect, options) {
                        var middlewares = [];
                        var directory = options.directory || options.base[options.base.length - 1];
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }
                        options.base.forEach(function(base) {
                        // Serve static files.
                            middlewares.push(connect.static(base));
                        });
                        // Make directory browse-able.
                        middlewares.push(connect.directory(directory));
                        middlewares.push(function (req, res, next) {
                            if (req.url == '/cordova.js') {
                                res.writeHead(200, {
                                    'Content-Type': 'text/javascript'
                                });
                                res.end('console.warn("当前处于网页调试状态，所有设备功能将不可用")');
                                return;
                            }
                            next();
                        });
                        return middlewares;
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    var registry = grunt.file.readJSON('registry.json');
    var readApp = function (method) {
        var filename = 'app.json'
        var app = grunt.file.readJSON(filename);
        method(app);
    };

    var editApp = function (method) {
        var filename = 'app.json';
        readApp(function (app) {
            method(app);
            fs.writeFileSync(filename, JSON.stringify(app, null, 4));
        });
    };

    grunt.registerTask('init', function () {
    	var log = grunt.log.write('Installing touch library ...');
    	var done = this.async();
    	exec('git submodule update --init', function (err, stdout, stderr) {
    	    if (err) {
                log.error(stderr);
                done(false);
    	        return;
    	    }
            log.ok();
            done();
    	});
    });

    grunt.registerTask('register', function (packageName) {
        var log = grunt.log.write('add ' + packageName + ' to app.json...');
        editApp(function (app) {
            if (app.requires.indexOf(packageName) < 0) {
                app.requires.push(packageName);
            }
        });
        log.ok();
    });

    grunt.registerTask('unregister', function (packageName) {
        var log = grunt.log.write('remove ' + packageName + ' from app.json...');
        editApp(function (app) {
            var index = app.requires.indexOf(packageName);
            if (!(index < 0)) {
                app.requires.splice(index, 1);
            };
        });
        log.ok();
    });

    grunt.registerTask('refresh', function () {
        var log = grunt.log.write('refreshing sencha app...');
        var done = this.async();
        exec('sencha app refresh', function (err, stdout, stderr) {
            if (err) {
                done(false);
                return;
            }
            log.ok();
            done();
        });
    });

    grunt.registerTask('download', function (packageName) {
        var log = grunt.log.write('download ' + packageName + '...');
        var done = this.async();
        exec('git clone ' + registry[packageName] + ' packages/' + packageName, function (err, stdout, stderr) {
            if (err) {
                done(false);
                return;
            }
            log.ok();
            done();
        });
    });

    grunt.registerTask('delete', function (packageName) {
        var log = grunt.log.write('delete ' + packageName + '...');
        var done = this.async();
        rimraf('packages/' + packageName, function (err) {
            if (err) {
                done(false);
                return;
            }
            log.ok();
            done();
        });
    });

    grunt.registerTask('ls', function () {
        var log = grunt.log.writeln('listing installed packages');
        readApp(function (app) {
            console.log(app.requires);
        });
        log.ok();
    });

    grunt.registerTask('remove', function (packageName) {
        grunt.task.run('delete:' + packageName, 'unregister:' + packageName, 'refresh');

    });

    grunt.registerTask('install', function (packageName) {
        grunt.task.run('delete:' + packageName, 'download:' + packageName, 'register:' + packageName, 'refresh');
    });

    grunt.registerTask('default', ['connect']);
};
