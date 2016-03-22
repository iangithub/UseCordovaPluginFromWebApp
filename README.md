# Use Plugin from Hosted Web App Lab #

> 在遠端的Web頁面使用Plugin來驅動設備原生功能(強烈建議以device來測試功能) 

1. Cordova App 加入Camera Plugin
2. build Cordova App for android,windows,ios
3. 開啟platforms\android\assets\www (此為android build完後的目錄,windows平台則為platforms\windows\www)
4. Host Web App新增cordovalib目錄 (目錄名稱可自訂)
5. 在cordovalib目錄分別為各平台建立子目錄 (cordovalib\android ; cordovalib\windows)
6. 將Cordova App build出來的cordova-js-src、plugins、scripts、cordova.js & cordova_plugins.js 複製到Host Web App的cordovalib\平台目錄下(請注意必須實際複製於cordova app各平台build出來的檔案,不同平台間的檔案內容不同)
7. 開啟Host Web App/index.html將< meta http-equiv="Content-Security-Policy"... > 使用以下程式碼取代 (http://codeian.idv.tw/ 改為你的Web App網址)

		<meta http-equiv="Content-Security-Policy" content="default-src 'self' 
		data: gap: http://codeian.idv.tw/ https://ssl.gstatic.com 'unsafe-eval'; 
		style-src 'self' 'unsafe-inline'; media-src *">

8. Host Web App/index.html引用js (為了demo使用，這裡以for android為例，所以引用的是android/cordova.js)


		<script src="cordovalib/android/cordova.js"></script>
9. Host Web App/index.html加入以下html內容

		<button id="cameraBtn">Camera</button>

10. Host Web App建立index.js,並撰寫以下程式碼


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
        	console.log('takePicture onSuccess:' + imageData);
    	}

    	function onFail(message) {
        	console.log('takePicture onFail:' + message);
    	}
		})();



11. Host Web App/index.html引用index.js

		<body>

    	<button id="cameraBtn" class="btn btn-primary btn-lg">Camera</button>
	    <script src="Scripts/index.js"></script>
    
		</body>

12. 發行Host Web App專案,以device來測試功能


> 動態判斷device載入相對應的cordova.js版本(以mvc為例)



1. cordova app/index.js的onDeviceReady裡置入以下程式碼，透過cordova.platform參數的傳遞，將使用端的device type傳回遠端server網頁

		var targetUrl = "http://cordovawebmvc.azurewebsites.net?platform="+cordova.platformId;
        
        window.location.replace(targetUrl);

2. 在mvc的controller撰寫以下程式碼，處理cordova.platform參數

		const string platformCookieKey = "user_platform";

        public ActionResult Index(string platform)
        {
            if (!string.IsNullOrWhiteSpace(platform))
            {
                HttpContext.Response.SetCookie(new HttpCookie(platformCookieKey, platform));
            }
            else
            {
                platform = "web";
            }
           
            ViewBag.Platform = platform;
            return View();
        }

3. 在mvc的view撰寫以下程式碼，處理動態載入相對應的cordova.js版本

		@if (platform == "android" || platform == "ios" || platform == "windows")
    	{
        	@Scripts.Render("~/cordovalib/" + platform + "/cordova.js")
    	}




