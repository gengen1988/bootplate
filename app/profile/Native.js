Ext.define('Bootplate.profile.Native', {
    extend: 'Ext.app.Profile',
    config: {
        controllers: [
            'Main'
        ],
    },

    isActive: function () {
        return Ext.browser.is.Cordova;
    }
});