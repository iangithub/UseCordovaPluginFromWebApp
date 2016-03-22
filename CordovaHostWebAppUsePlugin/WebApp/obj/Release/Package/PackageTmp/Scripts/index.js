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



//(function () {
//    "use strict";

  

//    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

//    function onDeviceReady() {
//        // 處理 Cordova 暫停與繼續事件
//        document.addEventListener('pause', onPause.bind(this), false);
//        document.addEventListener('resume', onResume.bind(this), false);

//        // TODO: Cordova 已載入。請在這裡執行任何需要 Cordova 的初始化作業。


//        var cameraBtn = document.getElementById('cameraBtn');
//        cameraBtn.addEventListener('click', takePicture);

//    };

//    function onPause() {
//        // TODO: 這個應用程式已暫停。請在這裡儲存應用程式狀態。
//    };

//    function onResume() {
//        // TODO: 這個應用程式已重新啟動。請在這裡還原應用程式狀態。
//    };

//    function takePicture() {
//        if (!navigator.camera) {
//            alert("Camera API not supported");
//            return;
//        }
//        navigator.camera.getPicture(onSuccess, onFail, {
//            quality: 50,
//            destinationType: Camera.DestinationType.DATA_URL
//        });
//        return false;
//    }
//    function onSuccess(imageData) {
//        //var image = document.getElementById('myImage');
//        //image.src = "data:image/jpeg;base64," + imageData;
//        console.log('takePicture onSuccess:' + imageData);
//    }

//    function onFail(message) {
//        //alert('Failed because: ' + message);
//        console.log('takePicture onFail:' + message);
//    }
//})();