Ext.define('Runtime.view.Main', {
	extend: 'Ext.Container',
	controller: 'Runtime.controller.Main',
	config: {
		items: [{
			xtype: 'button',
			itemId: 'hello',
			text: 'hello'
		}]
	}
});