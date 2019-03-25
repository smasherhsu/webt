$(document).ready(function(){
	//alert("ready!!:"+document.URL+" location.hostname:"+location.hostname);
	var isMobile = false;
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
	{
	    isMobile = true;
		//alert("行動裝置!!");
		if(document.URL.indexOf("pages/onlineExclusive/travel")!=-1) //旅平險判斷裝置轉導至手機版
		{
		var page = document.URL.substr(document.URL.indexOf("travel"));
		//alert("取文字2"+document.URL.substr(document.URL.indexOf("travel")));
			if(document.URL.indexOf("index-2.html")!=-1 || document.URL.indexOf("faq.html")!=-1 || document.URL.indexOf("gift.html")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/" + page;}
			else if(document.URL.indexOf("travel/ta.html")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/travel/qualification.html";}
			else if(document.URL.indexOf("travel/rule.html")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/travel/rules.html";}
			else if(document.URL.indexOf("pages/onlineExclusive/travel")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/travel/";}
		}
		
		if(document.URL.indexOf("pages/onlineExclusive/saving")!=-1) //儲蓄險判斷裝置轉導至手機版
		{
		var page = document.URL.substr(document.URL.indexOf("saving"));
			if(document.URL.indexOf("index-2.html")!=-1 || document.URL.indexOf("case-study.html")!=-1 || document.URL.indexOf("ta.html")!=-1 || document.URL.indexOf("rule.html")!=-1 || document.URL.indexOf("faq.html")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/" + page;}
			else if(document.URL.indexOf("pages/onlineExclusive/saving")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/saving/";}
		}
		
		if(document.URL.indexOf("pages/onlineExclusive/microlove")!=-1) //微心i判斷裝置轉導至手機版
		{
		var page = document.URL.substr(document.URL.indexOf("microlove"));
			if(document.URL.indexOf("index-2.html")!=-1 || document.URL.indexOf("ta-2.html")!=-1 || document.URL.indexOf("rule.html")!=-1 || document.URL.indexOf("faq.html")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/" + page;}
			else if(document.URL.indexOf("pages/onlineExclusive/microlove")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/microlove/";}
		}
		
		if(document.URL.indexOf("pages/onlineExclusive/one-day-travel")!=-1) //一日平安判斷裝置轉導至手機版
		{
		var page = document.URL.substr(document.URL.indexOf("one-day-travel"));
			if(document.URL.indexOf("index-2.html")!=-1 || document.URL.indexOf("faq.html")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/" + page;}
			else if(document.URL.indexOf("one-day-travel/ta.html")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/one-day-travel/qualification.html";}
			else if(document.URL.indexOf("one-day-travel/rule.html")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/one-day-travel/rules.html";}
			else if(document.URL.indexOf("pages/onlineExclusive/one-day-travel")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/one-day-travel/";}
		}
		
		if(document.URL.indexOf("pages/onlineExclusive/accident")!=-1) //新e路平安傷害保險判斷裝置轉導至手機版
		{
		var page = document.URL.substr(document.URL.indexOf("accident"));
			if(document.URL.indexOf("index-2.html")!=-1 || document.URL.indexOf("knowledge.html")!=-1 || document.URL.indexOf("qualification.html")!=-1 || document.URL.indexOf("rules.html")!=-1 || document.URL.indexOf("faq.html")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/" + page;}
			else if(document.URL.indexOf("pages/onlineExclusive/accident")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/accident/";}
		}
		
		if(document.URL.indexOf("pages/onlineExclusive/life")!=-1) //定期壽險判斷裝置轉導至手機版
		{
		var page = "term-"+document.URL.substr(document.URL.indexOf("onlineExclusive/life")+16);
			if(document.URL.indexOf("index-2.html")!=-1 || document.URL.indexOf("knowledge.html")!=-1 || document.URL.indexOf("qualification.html")!=-1 || document.URL.indexOf("rules.html")!=-1 || document.URL.indexOf("faq.html")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/" + page;}
			else if(document.URL.indexOf("pages/onlineExclusive/life")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/term-life/";}
		}
		
		if(document.URL.indexOf("pages/onlineExclusive/3money")!=-1) //鑫Money判斷裝置轉導至手機版
		{
		var page = document.URL.substr(document.URL.indexOf("3money"));
			if(document.URL.indexOf("index-2.html")!=-1 || document.URL.indexOf("case-study.html")!=-1 || document.URL.indexOf("ta.html")!=-1 || document.URL.indexOf("rule.html")!=-1 || document.URL.indexOf("faq.html")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/" + page;}
			else if(document.URL.indexOf("pages/onlineExclusive/3money")!=-1)
			{document.location.href="https://" + location.hostname + "/bc/web/m/product/online/3money/";}
		}
		/*
		if(document.URL.indexOf("pages/onlineExclusive")!=-1 || document.URL.indexOf("pages/onlineExclusive/index.html")!=-1) //網路投保首頁判斷裝置轉導至手機版
		{
			document.location.href="https://" + location.hostname + "/bc/web/m/product/online/";
		}*/

	}else{
		//alert("電腦!!");
		//document.location.href="https://www.cathaylife.com.tw/life/web/ext/pages/onlineExclusive/saving/";
	}
});



function goWI(type){
//var Today=new Date(); 
//var currDate = Date.parse(Today); //當下日期
//var starting_Time = "2018/02/03 07:00:00";
//var end_Time = "2018/03/03 08:30:00";
//var startingTime = Date.parse(starting_Time);
//var endTime = Date.parse(end_Time);
	$(function () {            
		$.ajax({
		    url: "https://" + location.hostname + "/website/PFWeb/html/PF/WI/getOnlineInsuranceDate.jsp?enu={TYPE:goWI}",   //存取Json的網址
			type: "GET",
			cache:false,
			dataType: 'json',
			success: function (data) {
					//alert("RETURN_MSG:"+data.RETURN_MSG); 
					//alert("RETURN_CODE:"+data.RETURN_CODE);
					//alert("mDateStart:"+data.mDateStart); 
					//alert("mDateEnd:"+data.mDateEnd); 
					//alert("CURRENT_TIME:"+data.CURRENT_TIME); 
					//alert("GO_WI:"+data.GO_WI);
					if(data.RETURN_CODE == '0'){
						if(data.GO_WI == 'true'){
							//if(data.GO_WI_MES == '2018'){
							//	alert("【系統維護】2018/07/15(日)03:00-06:00該時段內國泰人壽網路投保僅限使用「信用卡」進行繳費，相關作業請提前或延後，如造成不便，敬請見諒!");
							//}
							if(type == 'travel'){
										//Aixon tracking code(事件程式碼)
										var dmp_id ="";
										try {
											dmp_id = document.cookie.split('cubcsapersisted=')[1].split(';')[0].split('null_0_')[1].split('_')[0] || "";
										}catch(err) {
											
										}
										var SiteExperience__UserFlowType = ["商品資訊", "網路投保", "旅遊平安險"];
										var SiteExperience__UIType = ["線上投保"];
										//========= PLEASE DO NOT CHANGE BELOW =========
										if (typeof(window.APPIER_RETARGET)  == 'undefined') {
											(function(w, d, s, m) {
												var f = d.getElementsByTagName('script')[0],
											j = d.createElement('script'),
													ns = 'APPIER_RETARGET';
												w._appierSendQueue = w._appierSendQueue || [];
												w['appierRetargetJson'] = { id: s, site: m};
												j.async = true;
												j.src = '../../../../../../../../../jscdn.appier.net/aa5445.js?id='+m;
												f.parentNode.insertBefore(j, f);
												!w[ns] && (w[ns] = {});
												(!w[ns].send) && (w[ns].send = function(j){
													w._appierSendQueue.push(j);
												});
											})(window, document, "Uj4k", "cathaylife.com.tw");
										}
										window.APPIER_RETARGET.send({"t":"type_conversion", "content":"addcart_travel", "action_id": "A0CzrA4Gj0I62CQ", "track_id":"7I3ExxjGCzfUbbI", "dmp_id": dmp_id, "opts":{unique_key: "true"}, "taxonomy": {
												"SiteExperience__UserFlowType": SiteExperience__UserFlowType,
												"SiteExperience__UIType": SiteExperience__UIType
											}
										});
										//Aixon tracking code(事件程式碼)end
										var short_term='';
										fbq('trackCustom', 'OnlinePurchase');
										try {
										ga('send', 'event', 'link', 'click', '旅平險立即投保');
										}catch(err) {
										}
										var d = new Date();
										d.setTime(d.getTime() + (1*24*60*60*1000));
										var expires = ";expires="+d.toUTCString();
										var cookie_1_str = "SYS_NO_FIX=yC+389Hw/91i3ZJ4XmWiAA==;path=/;domain=cathaylife.com.tw"+expires;//CB00
										var cookie_2_str = "TRN_CONTENT=;path=/;domain=cathaylife.com.tw"+expires;
										var cookie_3_str = "isGoWI=Y;path=/;domain=cathaylife.com.tw"+expires;
										document.cookie=cookie_1_str;
										document.cookie=cookie_2_str;
										document.cookie=cookie_3_str;
										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=yC+389Hw/91i3ZJ4XmWiAA==&SHORT_TERM="+short_term+"&toBTN=WI";
										location.href=action_url;
									}else if(type == 'saving'){ //mLhX73piY6mpV3C6ch03CA== >> 'AT02'
										//Aixon tracking code(事件程式碼)
										var dmp_id ="";
										try {
											dmp_id = document.cookie.split('cubcsapersisted=')[1].split(';')[0].split('null_0_')[1].split('_')[0] || "";
										}catch(err) {
											
										}
										var SiteExperience__UserFlowType = ["商品資訊", "網路投保", "儲蓄型保險"];
										var SiteExperience__UIType = ["線上投保"];
										//========= PLEASE DO NOT CHANGE BELOW =========
										if (typeof(window.APPIER_RETARGET)  == 'undefined') {
											(function(w, d, s, m) {
												var f = d.getElementsByTagName('script')[0],
											j = d.createElement('script'),
													ns = 'APPIER_RETARGET';
												w._appierSendQueue = w._appierSendQueue || [];
												w['appierRetargetJson'] = { id: s, site: m};
												j.async = true;
												j.src = '../../../../../../../../../jscdn.appier.net/aa5445.js?id='+m;
												f.parentNode.insertBefore(j, f);
												!w[ns] && (w[ns] = {});
												(!w[ns].send) && (w[ns].send = function(j){
													w._appierSendQueue.push(j);
												});
											})(window, document, "Uj4k", "cathaylife.com.tw");
										}
										window.APPIER_RETARGET.send({"t":"type_conversion", "content":"addcart_saving", "action_id": "Wmzv8zAUYpUG61A", "track_id":"7I3ExxjGCzfUbbI", "dmp_id": dmp_id, "opts":{unique_key: "true"}, "taxonomy": {
												"SiteExperience__UserFlowType": SiteExperience__UserFlowType,
												"SiteExperience__UIType": SiteExperience__UIType
											}
										});
										//Aixon tracking code(事件程式碼)end
										fbq('trackCustom', 'OnlinePurchase');
										try {
										ga('send', 'event', 'link', 'click', '年金險立即投保');
										}catch(err) {
										}
										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=mLhX73piY6mpV3C6ch03CA==&toBTN=WI";
										location.href=action_url;
										return;
									}else if(type == '1day'){
										//Aixon tracking code(事件程式碼)
										var dmp_id ="";
										try {
											dmp_id = document.cookie.split('cubcsapersisted=')[1].split(';')[0].split('null_0_')[1].split('_')[0] || "";
										}catch(err) {
											
										}
										var SiteExperience__UserFlowType = ["商品資訊", "網路投保", "一日平安險"];
										var SiteExperience__UIType = ["線上投保"];
										//========= PLEASE DO NOT CHANGE BELOW =========
										if (typeof(window.APPIER_RETARGET)  == 'undefined') {
											(function(w, d, s, m) {
												var f = d.getElementsByTagName('script')[0],
											j = d.createElement('script'),
													ns = 'APPIER_RETARGET';
												w._appierSendQueue = w._appierSendQueue || [];
												w['appierRetargetJson'] = { id: s, site: m};
												j.async = true;
												j.src = '../../../../../../../../../jscdn.appier.net/aa5445.js?id='+m;
												f.parentNode.insertBefore(j, f);
												!w[ns] && (w[ns] = {});
												(!w[ns].send) && (w[ns].send = function(j){
													w._appierSendQueue.push(j);
												});
											})(window, document, "Uj4k", "cathaylife.com.tw");
										}
										window.APPIER_RETARGET.send({"t":"type_conversion", "content":"addcart_one-day-travel", "action_id": "vA82b8xUr9QxU6m", "track_id":"7I3ExxjGCzfUbbI", "dmp_id": dmp_id, "opts":{unique_key: "true"}, "taxonomy": {
												"SiteExperience__UserFlowType": SiteExperience__UserFlowType,
												"SiteExperience__UIType": SiteExperience__UIType
											}
										});
										//Aixon tracking code(事件程式碼)end
										fbq('init', '969821003117684'); // Insert your pixel ID here.
										fbq('track', 'PageView');
										fbq('trackCustom', 'OnlinePurchase');
										try {
										ga('send', 'event', 'link', 'click', '一日平安保險立即投保');
										}catch(err) {
										}
										var short_term='';
										if(type == '1day'){
											short_term='24';//TODO: 1 dya travel
										}
										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=yC+389Hw/91i3ZJ4XmWiAA==&SHORT_TERM="+short_term+"&toBTN=WI";
										location.href=action_url;
									}else if(type == 'microlove'){ //pX75AMWT3uU6wLf7KN7h4Q== >> 'AT03'
										//Aixon tracking code(事件程式碼)
										var dmp_id ="";
										try {
											dmp_id = document.cookie.split('cubcsapersisted=')[1].split(';')[0].split('null_0_')[1].split('_')[0] || "";
										}catch(err) {
											
										}
										var SiteExperience__UserFlowType = ["商品資訊", "網路投保", "小額終身壽險"];
										var SiteExperience__UIType = ["線上投保"];
										//========= PLEASE DO NOT CHANGE BELOW =========
										if (typeof(window.APPIER_RETARGET)  == 'undefined') {
											(function(w, d, s, m) {
												var f = d.getElementsByTagName('script')[0],
											j = d.createElement('script'),
													ns = 'APPIER_RETARGET';
												w._appierSendQueue = w._appierSendQueue || [];
												w['appierRetargetJson'] = { id: s, site: m};
												j.async = true;
												j.src = '../../../../../../../../../jscdn.appier.net/aa5445.js?id='+m;
												f.parentNode.insertBefore(j, f);
												!w[ns] && (w[ns] = {});
												(!w[ns].send) && (w[ns].send = function(j){
													w._appierSendQueue.push(j);
												});
											})(window, document, "Uj4k", "cathaylife.com.tw");
										}
										window.APPIER_RETARGET.send({"t":"type_conversion", "content":"addcart_microlove", "action_id": "58tEYIW799tKvpz", "track_id":"7I3ExxjGCzfUbbI", "dmp_id": dmp_id, "opts":{unique_key: "true"}, "taxonomy": {
												"SiteExperience__UserFlowType": SiteExperience__UserFlowType,
												"SiteExperience__UIType": SiteExperience__UIType
											}
										});
										//Aixon tracking code(事件程式碼)end
										fbq('trackCustom', 'OnlinePurchase');
										try {
										ga('send', 'event', 'link', 'click', '微心i立即投保');
										}catch(err) {
										}
										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=pX75AMWT3uU6wLf7KN7h4Q==&toBTN=WI";
										location.href=action_url;
										return;
									}else if(type == 'life'){
										//Aixon tracking code(事件程式碼)
										var dmp_id ="";
										try {
											dmp_id = document.cookie.split('cubcsapersisted=')[1].split(';')[0].split('null_0_')[1].split('_')[0] || "";
										}catch(err) {
											
										}
										var SiteExperience__UserFlowType = ["商品資訊", "網路投保", "定期壽險"];
										var SiteExperience__UIType = ["線上投保"];
										//========= PLEASE DO NOT CHANGE BELOW =========
										if (typeof(window.APPIER_RETARGET)  == 'undefined') {
											(function(w, d, s, m) {
												var f = d.getElementsByTagName('script')[0],
											j = d.createElement('script'),
													ns = 'APPIER_RETARGET';
												w._appierSendQueue = w._appierSendQueue || [];
												w['appierRetargetJson'] = { id: s, site: m};
												j.async = true;
												j.src = '../../../../../../../../../jscdn.appier.net/aa5445.js?id='+m;
												f.parentNode.insertBefore(j, f);
												!w[ns] && (w[ns] = {});
												(!w[ns].send) && (w[ns].send = function(j){
													w._appierSendQueue.push(j);
												});
											})(window, document, "Uj4k", "cathaylife.com.tw");
										}
										window.APPIER_RETARGET.send({"t":"type_conversion", "content":"addcart_life", "action_id": "tWdEhAtNxEtxN1N", "track_id":"7I3ExxjGCzfUbbI", "dmp_id": dmp_id, "opts":{unique_key: "true"}, "taxonomy": {
												"SiteExperience__UserFlowType": SiteExperience__UserFlowType,
												"SiteExperience__UIType": SiteExperience__UIType
											}
										});
										//Aixon tracking code(事件程式碼)end									
										fbq('trackCustom', 'OnlinePurchase');
										try {
										ga('send', 'event', 'link', 'click', '定期壽險立即投保');
										}catch(err) {
										}
										var d = new Date();
										d.setTime(d.getTime() + (1*24*60*60*1000));
										var expires = ";expires="+d.toUTCString();
										var cookie_1_str= "SYS_NO_FIX=Nj2T3V+6h1ZkHc4m64Yq9A==;path=/;domain=cathaylife.com.tw"+ expires;//AT01 定期壽險
										var cookie_2_str= "TRN_CONTENT=;path=/;domain=cathaylife.com.tw"+ expires;
										document.cookie=cookie_1_str;
										document.cookie=cookie_2_str;

										
										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=Nj2T3V+6h1ZkHc4m64Yq9A==&toBTN=WI";
										location.href=action_url;
									}else if(type == 'accident'){
										//Aixon tracking code(事件程式碼)
										var dmp_id ="";
										try {
											dmp_id = document.cookie.split('cubcsapersisted=')[1].split(';')[0].split('null_0_')[1].split('_')[0] || "";
										}catch(err) {
											
										}
										var SiteExperience__UserFlowType = ["商品資訊", "網路投保", "意外傷害險"];
										var SiteExperience__UIType = ["線上投保"];
										//========= PLEASE DO NOT CHANGE BELOW =========
										if (typeof(window.APPIER_RETARGET)  == 'undefined') {
											(function(w, d, s, m) {
												var f = d.getElementsByTagName('script')[0],
											j = d.createElement('script'),
													ns = 'APPIER_RETARGET';
												w._appierSendQueue = w._appierSendQueue || [];
												w['appierRetargetJson'] = { id: s, site: m};
												j.async = true;
												j.src = '../../../../../../../../../jscdn.appier.net/aa5445.js?id='+m;
												f.parentNode.insertBefore(j, f);
												!w[ns] && (w[ns] = {});
												(!w[ns].send) && (w[ns].send = function(j){
													w._appierSendQueue.push(j);
												});
											})(window, document, "Uj4k", "cathaylife.com.tw");
										}
										window.APPIER_RETARGET.send({"t":"type_conversion", "content":"addcart_accident", "action_id": "Qxtx35rzCWvbmEz", "track_id":"7I3ExxjGCzfUbbI", "dmp_id": dmp_id, "opts":{unique_key: "true"}, "taxonomy": {
												"SiteExperience__UserFlowType": SiteExperience__UserFlowType,
												"SiteExperience__UIType": SiteExperience__UIType
											}
										});
										//Aixon tracking code(事件程式碼)end
										fbq('trackCustom', 'OnlinePurchase');
										try {
										ga('send', 'event', 'link', 'click', '傷害險立即投保');
										}catch(err) {
										}
										var d = new Date();
										d.setTime(d.getTime() + (1*24*60*60*1000));
										var expires = ";expires="+d.toUTCString();
										var cookie_1_str= "SYS_NO_FIX=gC6j8mvah/fKgtPpyVZYMA==;path=/;domain=cathaylife.com.tw"+ expires;//CB00
										var cookie_2_str= "TRN_CONTENT=;path=/;domain=cathaylife.com.tw"+ expires;
										document.cookie=cookie_1_str;
										document.cookie=cookie_2_str;

										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=gC6j8mvah/fKgtPpyVZYMA==&toBTN=WI";
										location.href=action_url;
									}else if(type == '3money'){  //lTZhAQMAHt9Pd+gfjgZzdg== >> 'AT02'
										//alert("testtest!");
										//Aixon tracking code(事件程式碼)
										//Aixon tracking code(事件程式碼)
										var dmp_id ="";
										try {
											dmp_id = document.cookie.split('cubcsapersisted=')[1].split(';')[0].split('null_0_')[1].split('_')[0] || "";
										}catch(err) {
											
										}
										var SiteExperience__UserFlowType = ["商品資訊", "網路投保", "鑫Money"];
										var SiteExperience__UIType = ["線上投保"];
										//========= PLEASE DO NOT CHANGE BELOW =========
										if (typeof(window.APPIER_RETARGET)  == 'undefined') {
											(function(w, d, s, m) {
												var f = d.getElementsByTagName('script')[0],
											j = d.createElement('script'),
													ns = 'APPIER_RETARGET';
												w._appierSendQueue = w._appierSendQueue || [];
												w['appierRetargetJson'] = { id: s, site: m};
												j.async = true;
												j.src = '../../../../../../../../../jscdn.appier.net/aa5445.js?id='+m;
												f.parentNode.insertBefore(j, f);
												!w[ns] && (w[ns] = {});
												(!w[ns].send) && (w[ns].send = function(j){
													w._appierSendQueue.push(j);
												});
											})(window, document, "Uj4k", "cathaylife.com.tw");
										}
										window.APPIER_RETARGET.send({"t":"type_conversion", "content":"addcart_3money", "action_id": "SfQEGxbbjEGmIWf", "track_id":"7I3ExxjGCzfUbbI", "dmp_id": dmp_id, "opts":{unique_key: "true"}, "taxonomy": {
												"SiteExperience__UserFlowType": SiteExperience__UserFlowType,
												"SiteExperience__UIType": SiteExperience__UIType
											}
										});
										//Aixon tracking code(事件程式碼)end
										fbq('trackCustom', 'OnlinePurchase');
										try {
										ga('send', 'event', 'link', 'click', '鑫Money立即投保');
										}catch(err) {
										}
										var d = new Date();
										d.setTime(d.getTime() + (1*24*60*60*1000));
										var expires = ";expires="+d.toUTCString();
										var cookie_1_str= "SYS_NO_FIX=gC6j8mvah/fKgtPpyVZYMA==;path=/;domain=cathaylife.com.tw"+ expires;//CB00
										var cookie_2_str= "TRN_CONTENT=;path=/;domain=cathaylife.com.tw"+ expires;
										document.cookie=cookie_1_str;
										document.cookie=cookie_2_str;

										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=lTZhAQMAHt9Pd+gfjgZzdg==&toBTN=WI";
										location.href=action_url;
									}else if(type == 'icarry'){  //X1ZvXPNXQoHFLmygi/f00Q==
										//alert("icarry!");
										$.ajax({
											url: 		"https://" + location.hostname + "/website/PFWeb/servlet/HttpDispatcher/PFOI_0200/prompt",   //存取Json的網址
											type: 		"POST",
											cache:      false,
											dataType: 	"JSON",
											success: 	function(data){	
												var ErrorMsg = data.errorMsg;
												var Remaining_Quota = data.Remaining_Quota;
												var MAX_PRIZE = data.MAX_PRIZE;
													
												if(ErrorMsg == "目前時間不在活動時間內"){
													common.popup('.alert2');
												}else if(Remaining_Quota == "0"){
													common.popup('.alert1');
												}else{
													var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=X1ZvXPNXQoHFLmygi/f00Q==&toBTN=WI&SYS_TIME="+data.eCurrentTime;
												location.href=action_url;;
												}
											}		
										});
									}else if(type == 'go_icarry'){  //X1ZvXPNXQoHFLmygi/f00Q==
											var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=X1ZvXPNXQoHFLmygi/f00Q==&toBTN=WI&SYS_TIME=";
											location.href=action_url;
									}
						}else if(data.GO_WI == 'false'){
							  //alert("【系統維護】02/03(六)07:00-08:30因保險公會系統進行維護作業，該時段內國泰人壽網路投保暫時停止服務，相關作業請提前或延後。");
							  alert(data.WI_MSG);
						}else{
						alert("時間判斷有誤");
						}
					}else{
						alert("查詢失敗:"+data.RETURN_MSG);
					}
			},

			error: function (xhr, ajaxOptions, thrownError) {
					//alert(xhr.status);
					//alert(thrownError);
									if(type == 'travel'){
							            var short_term='';
										fbq('trackCustom', 'OnlinePurchase');
										//ga('send', 'event', 'link', 'click', '旅平險立即投保');
										var d = new Date();
										d.setTime(d.getTime() + (1*24*60*60*1000));
										var expires = ";expires="+d.toUTCString();
										var cookie_1_str = "SYS_NO_FIX=yC+389Hw/91i3ZJ4XmWiAA==;path=/;domain=cathaylife.com.tw"+expires;//CB00
										var cookie_2_str = "TRN_CONTENT=;path=/;domain=cathaylife.com.tw"+expires;
										var cookie_3_str = "isGoWI=Y;path=/;domain=cathaylife.com.tw"+expires;
										document.cookie=cookie_1_str;
										document.cookie=cookie_2_str;
										document.cookie=cookie_3_str;
										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=yC+389Hw/91i3ZJ4XmWiAA==&SHORT_TERM="+short_term+"&toBTN=WI";
										location.href=action_url;
									}else if(type == 'saving'){ //mLhX73piY6mpV3C6ch03CA== >> 'AT02'
										fbq('trackCustom', 'OnlinePurchase');
										//ga('send', 'event', 'link', 'click', '年金險立即投保');
										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=mLhX73piY6mpV3C6ch03CA==&toBTN=WI";
										location.href=action_url;
										return;
									}else if(type == '1day'){
										fbq('init', '969821003117684'); // Insert your pixel ID here.
										fbq('track', 'PageView');
										fbq('trackCustom', 'OnlinePurchase');
										//ga('send', 'event', 'link', 'click', '一日平安保險立即投保');
										var short_term='';
										if(type == '1day'){
											short_term='24';//TODO: 1 dya travel
										}
										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=yC+389Hw/91i3ZJ4XmWiAA==&SHORT_TERM="+short_term+"&toBTN=WI";
										location.href=action_url;
									}else if(type == 'microlove'){ //pX75AMWT3uU6wLf7KN7h4Q== >> 'AT03'
										fbq('trackCustom', 'OnlinePurchase');
										//ga('send', 'event', 'link', 'click', '微心i立即投保');
										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=pX75AMWT3uU6wLf7KN7h4Q==&toBTN=WI";
										location.href=action_url;
										return;
									}else if(type == 'life'){
										fbq('trackCustom', 'OnlinePurchase');
										//ga('send', 'event', 'link', 'click', '定期壽險立即投保');
										var d = new Date();
										d.setTime(d.getTime() + (1*24*60*60*1000));
										var expires = ";expires="+d.toUTCString();
										var cookie_1_str= "SYS_NO_FIX=Nj2T3V+6h1ZkHc4m64Yq9A==;path=/;domain=cathaylife.com.tw"+ expires;//AT01 定期壽險
										var cookie_2_str= "TRN_CONTENT=;path=/;domain=cathaylife.com.tw"+ expires;
										document.cookie=cookie_1_str;
										document.cookie=cookie_2_str;

										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=Nj2T3V+6h1ZkHc4m64Yq9A==&toBTN=WI";
										location.href=action_url;
									}else if(type == 'accident'){
										fbq('trackCustom', 'OnlinePurchase');
										//ga('send', 'event', 'link', 'click', '傷害險立即投保');
										var d = new Date();
										d.setTime(d.getTime() + (1*24*60*60*1000));
										var expires = ";expires="+d.toUTCString();
										var cookie_1_str= "SYS_NO_FIX=gC6j8mvah/fKgtPpyVZYMA==;path=/;domain=cathaylife.com.tw"+ expires;//CB00
										var cookie_2_str= "TRN_CONTENT=;path=/;domain=cathaylife.com.tw"+ expires;
										document.cookie=cookie_1_str;
										document.cookie=cookie_2_str;

										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=gC6j8mvah/fKgtPpyVZYMA==&toBTN=WI";
										location.href=action_url;
									}else if(type == '3money'){
										fbq('trackCustom', 'OnlinePurchase');
										//ga('send', 'event', 'link', 'click', '鑫Money立即投保');
										var d = new Date();
										d.setTime(d.getTime() + (1*24*60*60*1000));
										var expires = ";expires="+d.toUTCString();
										var cookie_1_str= "SYS_NO_FIX=gC6j8mvah/fKgtPpyVZYMA==;path=/;domain=cathaylife.com.tw"+ expires;//CB00
										var cookie_2_str= "TRN_CONTENT=;path=/;domain=cathaylife.com.tw"+ expires;
										document.cookie=cookie_1_str;
										document.cookie=cookie_2_str;

										var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=lTZhAQMAHt9Pd+gfjgZzdg==&toBTN=WI";
										location.href=action_url;
									}else if(type == 'icarry'){  //X1ZvXPNXQoHFLmygi/f00Q==
										//alert("icarry!");
										$.ajax({
											url: 		"https://" + location.hostname + "/website/PFWeb/servlet/HttpDispatcher/PFOI_0200/prompt",   //存取Json的網址
											type: 		"POST",
											cache:      false,
											dataType: 	"JSON",
											success: 	function(data){	
												var ErrorMsg = data.errorMsg;
												var Remaining_Quota = data.Remaining_Quota;
												var MAX_PRIZE = data.MAX_PRIZE;
													
												if(ErrorMsg == "目前時間不在活動時間內"){
													common.popup('.alert2');
												}else if(Remaining_Quota == "0"){
													common.popup('.alert1');
												}else{
													var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=X1ZvXPNXQoHFLmygi/f00Q==&toBTN=WI&SYS_TIME="+data.eCurrentTime;
													location.href=action_url;;
												}
											}		
										});
									}else if(type == 'go_icarry'){  //X1ZvXPNXQoHFLmygi/f00Q==
											var action_url = location.protocol+"//"+ location.hostname.replace("www.cathayholdings.com", "").replace("www.cathaylife.com.tw", "") +"www.cathaylife.com.tw/bcauth/WIWeb/servlet/HttpDispatcher/OnLineInsurance/prompt?SYS_NO_FIX=X1ZvXPNXQoHFLmygi/f00Q==&toBTN=WI&SYS_TIME=";
											location.href=action_url;
									}
			}
			});

	});
	
};
