Ext.define('Bootplate.controller.Main', {
	extend: 'ETFramework.app.Controller',
	requires: [
        'Bootplate.util.Backend',
        'Bootplate.util.Address'
	],
	config: {
		views: [
		    'Drawer'
		]
	},

	configRoutes: function (routes) {
		routes = this.callParent(arguments);
		routes[Address.ENTRY] = 'entry';
		routes[Address.MAIN] = 'showMain';
		return routes;
	},

	entry: function () {
		this.redirectTo(Address.MAIN);
	},

	showMain: function () {
		this.showView('drawer');
	}
});