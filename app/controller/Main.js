Ext.define('Bootplate.controller.Main', {
	extend: 'Ext.app.Controller',
	requires: [
	    'Bootplate.view.Main'
	],
	config: {
		routes: {
			'': 'entry',
			'main': 'showMain'
		}
	},
	entry: function () {
		this.redirectTo('main');
	},
	showMain: function () {
		Ext.require('Runtime.view.Main', function () {
			Ext.Viewport.setActiveItem(Ext.create('Runtime.view.Main'));
		});
		/*
		var view = Ext.Viewport.query('main')[0] || {
			xtype: 'main'
		};
		Ext.Viewport.setActiveItem(view);
		*/
	}
});