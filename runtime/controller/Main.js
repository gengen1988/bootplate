Ext.define('Runtime.controller.Main', {
	extend: 'Deft.ViewController',
    requires: [
        'ETFramework.Backend'
    ],
	control: {
		signin: {
			tap: 'tapSignIn'
		},
        signout: {
            tap: 'tapSignOut'
        },
        request: {
            tap: 'tapRequest'
        }
	},

    init: function () {
        this.callParent(arguments);

        if (ETFramework.Backend.isSignIn()) {
            this.getView().down('#username').setValue(localStorage.username);
            this.getView().down('#password').setValue(localStorage.password);
        }
    },

	tapSignIn: function () {
		console.log('==== login test ====');
        var username = this.getView().down('#username').getValue();
        var password = this.getView().down('#password').getValue();

        ETFramework.Backend.signIn({
            params: {
                username: username,
                password: password
            },
            callback: this.signInHandler
        });
	},
    tapSignOut: function () {
        console.log('==== logout test ====');
        ETFramework.Backend.signOut();

        this.getView().down('#username').reset();
        this.getView().down('#password').reset();
    },
    tapRequest: function () {
        console.log('==== request test ====');
        ETFramework.Backend.request({
            bo: 'edu.self.AuthTestBO',
            params: {
                ni: 'hao'
            },
            callback: this.requestHandler
        });
    },
    signInHandler: function (err) {
        console.log(err.message);
    },
    requestHandler: function (err, str, nub) {
        console.log(err.message);
    }
});