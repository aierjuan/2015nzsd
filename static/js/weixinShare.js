// JavaScript Document

// 寰俊鍒嗕韩
var weixinShareImgUrl = "http://h5.youxiduo.com/hot/yxd2015/static/img/logo.jpg";
var weixinShareLineLink = location.href;
var weixinShareShareTitle = "绐佺牬路鏀瑰彉鈥斺€旀父鎴忓2015骞寸粓鐗瑰埆绛栧垝";
var weixinShareDescContent = "瀵掑啲宸茶嚦锛屾槬澶╄繕浼氳繙涔堬紵";
var appId,timestamp,nonceStr,signature;

$.ajax({
	url:'http://share.youxiduo.com/weixin/shareinfo',
	type:'GET',
	async:false,
	dataType: "json",
	data: {'url': encodeURI(encodeURI(weixinShareLineLink))},
	success:function(data){
		appId = data.appid;
		timestamp = data.timestamp;
		nonceStr = data.noncestr;
		signature = data.ticket;
	}
});

wx.config({
            debug: false, // 寮€鍚皟璇曟ā寮�,璋冪敤鐨勬墍鏈塧pi鐨勮繑鍥炲€间細鍦ㄥ鎴风alert鍑烘潵锛岃嫢瑕佹煡鐪嬩紶鍏ョ殑鍙傛暟锛屽彲浠ュ湪pc绔墦寮€锛屽弬鏁颁俊鎭細閫氳繃log鎵撳嚭锛屼粎鍦╬c绔椂鎵嶄細鎵撳嵃銆�
            appId: appId, // 蹇呭～锛屽叕浼楀彿鐨勫敮涓€鏍囪瘑
            timestamp: timestamp, // 蹇呭～锛岀敓鎴愮鍚嶇殑鏃堕棿鎴�
            nonceStr: nonceStr, // 蹇呭～锛岀敓鎴愮鍚嶇殑闅忔満涓�
            signature: signature,// 蹇呭～锛岀鍚嶏紝瑙侀檮褰�1
            jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'] // 蹇呭～锛岄渶瑕佷娇鐢ㄧ殑JS鎺ュ彛鍒楄〃锛屾墍鏈塉S鎺ュ彛鍒楄〃瑙侀檮褰�2
        });

wx.ready(function(){
	wx.onMenuShareTimeline({
		title: weixinShareShareTitle,
		link: weixinShareLineLink,
		imgUrl: weixinShareImgUrl,
		trigger: function (res) {
			// 涓嶈灏濊瘯鍦╰rigger涓娇鐢╝jax寮傛璇锋眰淇敼鏈鍒嗕韩鐨勫唴瀹癸紝鍥犱负瀹㈡埛绔垎浜搷浣滄槸涓€涓悓姝ユ搷浣滐紝杩欐椂鍊欎娇鐢╝jax鐨勫洖鍖呬細杩樻病鏈夎繑鍥�
			//alert('鐢ㄦ埛鐐瑰嚮鍒嗕韩鍒版湅鍙嬪湀');
		},
		success: function (res) {
			//alert('宸插垎浜�');
		},
		cancel: function (res) {
			//alert('宸插彇娑�');
		},
		fail: function (res) {
			//alert(JSON.stringify(res));
		}
	});
	wx.onMenuShareAppMessage({
		title: weixinShareShareTitle,
		link: weixinShareLineLink,
		desc: weixinShareDescContent,
		imgUrl: weixinShareImgUrl,
		trigger: function (res) {
			// 涓嶈灏濊瘯鍦╰rigger涓娇鐢╝jax寮傛璇锋眰淇敼鏈鍒嗕韩鐨勫唴瀹癸紝鍥犱负瀹㈡埛绔垎浜搷浣滄槸涓€涓悓姝ユ搷浣滐紝杩欐椂鍊欎娇鐢╝jax鐨勫洖鍖呬細杩樻病鏈夎繑鍥�
			//alert('鐢ㄦ埛鐐瑰嚮鍙戦€佺粰鏈嬪弸');
		},
		success: function (res) {
			//alert('宸插垎浜�');
		},
		cancel: function (res) {
			//alert('宸插彇娑�');
		},
		fail: function (res) {
			//alert(JSON.stringify(res));
		}
	});
	
});