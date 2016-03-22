(function () {
    "use strict";

    var cameraBtn = document.getElementById('cameraBtn');
    cameraBtn.addEventListener('click', takePicture);

    function takePicture() {
        if (!navigator.camera) {
            alert("Camera API not supported");
            return;
        }
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });
        return false;
    }
    function onSuccess(imageData) {
        //var image = document.getElementById('myImage');
        //image.src = "data:image/jpeg;base64," + imageData;
        console.log('takePicture onSuccess:' + imageData);
    }

    function onFail(message) {
        //alert('Failed because: ' + message);
        console.log('takePicture onFail:' + message);
    }
})();