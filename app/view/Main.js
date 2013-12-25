Ext.define('Bootplate.view.Main', {
	extend: 'Ext.Container',
	alias: 'widget.main',
	requires: [
	    'Ext.TitleBar'
	],
	config: {
		html: 'nihao',
		items: [{
			xtype: 'titlebar',
			title: '欢迎'
		}]
	}
});
