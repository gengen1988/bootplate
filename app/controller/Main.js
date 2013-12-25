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
		var view = Ext.Viewport.query('main')[0] || {
			xtype: 'main'
		};
		Ext.Viewport.setActiveItem(view);
	}

});