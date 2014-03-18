Ext.define('Runtime.controller.Main', {
	extend: 'Deft.ViewController',
    requires: [
        'ETFramework.Backend'
    ],

	control: {
        takePhoto: {
            tap: 'tapPhoto'
        }
	},
    tapPhoto: function () {
        var view = this.getView();
        var album = view.down('#fromAlbum').getValue();
        var orientation = view.down('#fixOrientation').getValue();
        var size = view.down('#size').getValue()[0];

        var sourceType = Camera.PictureSourceType.CAMERA;
        if (album == 1) {
            sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
        }

        var correctOrientation = false;
        if (orientation == 1) {
            correctOrientation = true;
        }

        navigator.camera.getPicture(this.cameraSuccess.bind(this), this.cameraFailure, {
            quality: 100,
            sourceType: sourceType,
            correctOrientation: correctOrientation,
            targetHeight: size,
            destinationType: Camera.DestinationType.DATA_URL
        });
    },
    cameraSuccess: function (imageData) {
        var preview = this.getView().down('#preview');

        preview.setSrc('data:image/jpeg;base64,' + imageData)
    },
    cameraFailure: function () {
        Ext.Msg.alert('error');
    }

});