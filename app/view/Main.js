Ext.define('Bootplate.view.Main', {
	extend: 'Ext.dataview.List',
	alias: 'widget.main',
	requires: [
		'Ext.TitleBar',
		'Ext.Toolbar',
		'Ext.field.Text',
	    'Bootplate.store.Message'
	],
	config: {
		store: 'message',
		itemTpl: '{name}',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			title: 'quickmessenger'
		}, {
			xtype: 'toolbar',
			ui: 'neutral',
			docked: 'bottom',
			items: [{
				xtype: 'textfield',
				flex: 1
			}, {
				xtype: 'button',
				ui: 'confirm',
				action: 'send',
				text: 'send'
			}]
		}]
	}
});
