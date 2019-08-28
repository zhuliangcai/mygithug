/*
* BackIndex({indexUrl: 'http:// www.4ting.wang',btnText: '返回首页',btnStyle: 'background: rgba(0,0,0,.3);color: #fff;})
**/
(function(window){
    var __INFO__ = {
        name: 'BackIndex',
        author: 'Tim Wang',
        version: '1.0.1.20180117'
    };
    var defaults={
        indexUrl: '',
        btnText: '回到首页',
        btnStyle: ''
    }
    var backIndex=function(options){
        var setting=Object.assign({},defaults,options);

        var btnBox=document.createElement('div');
        btnBox.innerText=setting.btnText;
        btnBox.style='position: fixed;top: 70%;right: 0;z-index:9999999;width: 50px;height: 50px;padding: 10px 5px;font-size:12px;text-align:center;background: rgba(0,0,0,.3);border-radius: 50%;overflow: hidden;box-sizing: border-box;cursor: pointer;'+setting.btnStyle;
        document.body.appendChild(btnBox);

        // 检测设备为pc端还是移动端
        var _device=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
        var clickEvent=_device?'touchstart':'mousedown';
        btnBox.addEventListener(clickEvent, function () {
            window.location.href=setting.indexUrl;
        })
    }
    window[__INFO__.name]=backIndex;
})(window!=="undefined"?window:this)