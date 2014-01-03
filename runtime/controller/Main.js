Ext.define('Runtime.controller.Main', {
	extend: 'Deft.ViewController',
	control: {
		hello: {
			tap: 'tapHello'
		}
	},
    init: function () {
        this.callParent(arguments);
        EasyTracker.sendView('Main');
    },
	tapHello: function () {
		console.log('world');
        EasyTracker.sendEvent('ux', 'click', 'offline', 1);
	}
});