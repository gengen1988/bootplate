Ext.define('Runtime.view.Main', {
	extend: 'Ext.Container',
	controller: 'Runtime.controller.Main',
	config: {
		items: [{
            xtype: 'fieldset',
            items: [{
                xtype: 'textfield',
                label: 'username',
                itemId: 'username'
            }, {
                xtype: 'textfield',
                label: 'password',
                itemId: 'password'
            }]
        }, {
			xtype: 'button',
			itemId: 'signin',
			text: 'signin'
		}, {
            xtype: 'button',
            itemId: 'request',
            text: 'request'
        }, {
            xtype: 'button',
            itemId: 'signout',
            text: 'signout'
        }]
	}
});