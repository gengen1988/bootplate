Bootplate
=========
Bootplate is a Sencha Touch template. It help developer write and debug Sencha Touch MVC application without Sencha CMD.

Installation
---------
This template need git and grunt to work. As you come here, I assume you have already installed git. So you just need install Node.js and grunt-cli before coding.

### Prerequirements ###
 - git http://git-scm.com/
 - Node.js http://nodejs.org/
 - grunt-cli (npm install -g grunt-cli)

### Initialize Project ###
```bash
git clone https://github.com/gengen1988/Bootplate.git
npm install
grunt
```

Usage
---------
Once you complete install, you can import ```bootplate``` folder to Eclipse.

### Start Debug Server ###
```bash
grunt serve
```

### Install Package ###
```bash
grunt install <package-name>
```

Available Packages
---------
 - deft
 - etframework
 - underscore
 - async
 - cuttingedge

to be complete...

How to build my project to production edition?
---------
You need install Android SDK / Cordova / Sencha CMD, config them all and run:
```bash
sencha app build native
```

Now go ```app```, write your next Fastbook!