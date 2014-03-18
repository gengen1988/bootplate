Ext.define('Runtime.view.Main', {
	extend: 'Ext.Container',
	controller: 'Runtime.controller.Main',
	config: {
        scrollable: {
            direction: 'vertical'
        },
		items: [{
            xtype: 'titlebar',
            title: 'Bootplate 相机测试'
        }, {
            xtype: 'togglefield',
            label: '读取相册',
            itemId: 'fromAlbum'
        }, {
            xtype: 'togglefield',
            label: '修正朝向(S4)',
            itemId: 'fixOrientation'
        }, {
            xtype: 'sliderfield',
            label: '图像尺寸',
            value: 500,
            minValue: 100,
            maxValue: 720,
            itemId: 'size'
        }, {
            xtype: 'image',
            itemId: 'preview',
            style: {
                border: '1px black solid'
            },
            width: 400,
            height: 400
        }, {
            xtype: 'toolbar',
            ui: 'neutral',
            docked: 'bottom',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [{
                xtype: 'button',
                iconCls: 'camera',
                itemId: 'takePhoto'
            }]
        }]
	}
});