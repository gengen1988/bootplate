Ext.define('Bootplate.store.Message', {
    extend: 'Ext.data.Store',
    singleton: true,
    requires: [
        'Bootplate.model.Message',
        'Ext.data.proxy.LocalStorage'
    ],
    config: {
        autoLoad: true,
        autoSync: true,
        model: 'Bootplate.model.Message',
        storeId: 'message',
        proxy: 'localstorage'
    }
});