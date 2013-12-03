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
    grunt.registerTask('install', function (packageName) {
        var done = this.async();
        var log = grunt.log.write('adding...');
        // 创建了一个 Package 文件夹 下载到里面去 
        rimraf('packages/' + packageName, function (error) {
            if(error){
                done(false);
            }else{
                child = exec('git clone https://github.com/gengen1988/'+packageName+' packages'+'/'+packageName, function(error, stdout, stderr) {
                    if(error){
                        done(false);       
                    }else{
                        log.write(packageName);
                        var parpk = grunt.file.readJSON('app.json');
                        if (parpk.requires.indexOf(packageName)<0) {
                            parpk.requires.push(packageName);
                        };
                        fs.writeFileSync('app.json', JSON.stringify(parpk), {encoding: 'utf-8'});
                        done();
                    }
                });
            }
        });
    });
    grunt.registerTask('default', ['connect']);
};
