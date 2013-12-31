Ext.define('Runtime.controller.Main', {
	extend: 'Deft.ViewController',
	control: {
		hello: {
			tap: 'tapHello'
		}
	},
	tapHello: function () {
		console.log('world');
	}
});