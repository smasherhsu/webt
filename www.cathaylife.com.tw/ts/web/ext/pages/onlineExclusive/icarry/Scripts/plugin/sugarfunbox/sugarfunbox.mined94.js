(function(window,document,jQuery,undefined){"use strict";var $h=$("html"),$b=$("body"),$hb=$("html , body"),$w=$(window),$d=$(document),S=$.sugarfunbox=function(){S.open.apply(this,arguments)},_IE=navigator.userAgent.match(/msie/i),Browsers=function(){var e,t=navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(t[1])?(e=/\brv[ :]+(\d+)/g.exec(navigator.userAgent)||[],"IE "+(e[1]||"")):"Chrome"===t[1]&&(e=navigator.userAgent.match(/\b(OPR|Edge)\/(\d+)/),null!=e)?e.slice(1).join(" ").replace("OPR","Opera"):(t=t[2]?[t[1],t[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=navigator.userAgent.match(/version\/(\d+)/i))&&t.splice(1,1,e[1]),t.join(" "))},didUpdate=null,isTouch=document.createTouch!==undefined,devices=function(){return/Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||$d.width()<768?"M":/Android|webOS|iPad|BlackBerry/i.test(navigator.userAgent)?"T":"D"},isQuery=function(e){return e&&e.hasOwnProperty&&e instanceof $},isString=function(e){return e&&"string"===$.type(e)},isPercentage=function(e){if(isString(e)){if(e.indexOf("%")>0)return"%";if(e.indexOf("vw")>0)return"vw";if(e.indexOf("vh")>0)return"vh"}},isScrollable=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},getScalar=function(e,t){var i=parseInt(e,10)||0;return t&&("%"===isPercentage(e)?i=S.getViewport()[t]/100*i:"vw"===isPercentage(e)?i=S.getViewport()[t]/$w.width()*i:"vh"===isPercentage(e)&&(i=S.getViewport()[t]/$w.height()*i)),Math.ceil(i)},getValue=function(e,t){return getScalar(e,t)+"px"};$.extend(S,{version:"4.1.1",defaults:{width:{md:"auto",sm:"auto",xs:"auto"},height:{md:"auto",sm:"auto",xs:"auto"},closeBtn:!0,closeElem:"close",href:null,content:null,loadData:null,supportMobile:!1,overlay:{},beforeOpen:$.noop,afterOpen:$.noop,beforeClose:$.noop,afterClose:$.noop},tpl:{},ori:{width:{md:800,sm:"80%",xs:"90%"},height:{md:450,sm:375,xs:300}},class:{sbox:"sugarfunbox",overlay:"sugarfunbox-overlay",hd:"sugarfunbox-hd",bd:"sugarfunbox-bd",close:"sugarfunbox-close",loading:"sugarfunbox-loading",loadingBd:"sugarfunbox-loading-bd",loadingIcon:"sugarfunbox-icon-loading",iframe:"sugarfunbox-iframe"},keys:{close:[27]},regexHref:/^\#$|^javascript:;$/,topRatio:.5,leftRatio:.5,autoSize:{w:!0,h:!0},autoResize:!0,autoWidth:!1,autoHeight:!1,fitToView:!0,group:{},opts:{},options:{},pos:{},coming:null,autoCenter:!isTouch,isActive:!1,isOpen:!1,isOpened:!1,openEffect:"fade",openMethod:"zoomIn",openOpacity:!0,openSpeed:250,openEasing:"swing",closeEffect:"fade",closeMethod:"zoomOut",closeOpacity:!0,closeSpeed:250,closeEasing:"swing",mouseWheel:!0,scrolling:"auto",iframe:{scrolling:"auto",preload:!0},transitions:{},open:function(e,t){if(e&&($.isPlainObject(t)||(t={}),!1!==S.close(!0)))return $.isArray(e)||(e=isQuery(e)?$(e).get():[e]),S.tpl.wrap='<div class="'+S.class.sbox+'" tabIndex="-1" role="dialog" data-sugarfunbox><div class="'+S.class.hd+'"></div><div class="'+S.class.bd+'"></div></div>',S.tpl.overlay='<div class="'+S.class.overlay+'"></div>',S.tpl.iframe='<iframe id="'+S.class.iframe+'{rnd}" name="'+S.class.iframe+'{rnd}" class="'+S.class.iframe+'" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true"></iframe>',S.tpl.loading='<div class="'+S.class.loading+'"><div class="'+S.class.loadingBd+'"></div></div>',$.each(e,function(i,s){var o,a,n={};"object"===$.type(s)&&(s.nodeType&&(s=$(s)),isQuery(s)?(n={overlay:{closeClick:s.data("overlay-close")},width:s.data("width")?{md:s.data("width"),sm:s.data("width"),xs:s.data("width")}:"object"!=typeof t.width&&t.width?t.width:{md:s.data("width-md"),sm:s.data("width-sm"),xs:s.data("width-xs")},height:s.data("height")?{md:s.data("height"),sm:s.data("height"),xs:s.data("height")}:"object"!=typeof t.height&&t.height?t.height:{md:s.data("height-md"),sm:s.data("height-sm"),xs:s.data("height-xs")},closeBtn:s.data("close-btn"),closeElem:s.data("close-elem"),content:s.data("content"),loadData:s.data("load-data"),supportMobile:s.data("support-mobile"),href:s.data("href")||s.attr("href"),beforeOpen:s.data("before-open"),afterOpen:s.data("after-open"),beforeClose:s.data("before-close"),afterClose:s.data("after-close"),element:s},$.metadata&&$.extend(!0,n,s.metadata())):n=s),o=t.href||n.href||(isString(s)?s:null),a=t.content||n.content,$.extend(n,{href:o,content:a}),e[i]=n,S.options=t,S._autoSize(e)}),S.opts=$.extend(!0,{},S.defaults,t),S.group=e,S._start(S.opts.index)},cancel:function(){var e=S.coming;e&&!1!==S.trigger("onCancel")&&($(S.tpl.wrap)&&$(S.tpl.wrap).stop(!0,!0).trigger("onReset").remove(),S.coming||S._afterClose(e))},close:function(e){S.cancel(),!1!==S.trigger("beforeClose")&&(S.unbindEvents(),S.isActive&&(S.isOpen&&e!==!0?(S.isOpen=S.isOpened=!1,S.isClosing=!0,$("."+S.class.sbox).stop(!0,!0).removeClass(""+S.class.sbox+"-opened"),S.transitions[S.closeMethod]()):($("."+S.class.sbox).stop(!0).trigger("onReset").remove(),S._afterClose())))},reposition:function(e,t){var i,s=$("."+S.class.sbox);s&&(i=S._getPosition(t),e&&"scroll"===e.type?delete i.position:(s.css(i),S.pos=i))},update:function(e){var t=e&&e.type,i=!t||"orientationchange"===t;i&&(clearTimeout(didUpdate),didUpdate=null),S.isOpen&&!didUpdate&&(didUpdate=setTimeout(function(){var e=S.coming;e&&!S.isClosing&&($("."+S.class.sbox).removeClass(""+S.class.sbox+"-hide"),(i||"load"===t||"resize"===t&&S.autoResize)&&(devices(),S._setDimension(),S._autoSize(S.group),S.reposition(),S._mousewheel()),S.trigger("onUpdate"),didUpdate=null)},0))},unbindEvents:function(){$("."+S.class.sbox)&&isQuery($("."+S.class.sbox))&&$("."+S.class.sbox).off("mousewheel DOMMouseScroll"),$d.off("keydown")},bindEvents:function(){var e,t=(S.getViewport(),S.coming);t&&(e=S.keys,$w.on("orientationchange"+(isTouch?"":" resize")+(S.autoCenter&&!S.locked?" scroll":""),S.update),e&&$d.on("keydown",function(t){var i=t.which||t.keyCode,s=t.target||t.srcElement;return(27!==i||!S.coming)&&void(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey||s&&(s.type||$(s).is("[contenteditable]"))||$.each(e,function(e,s){return S.group.length>1&&s[i]!==undefined?(S[e](s[i]),t.preventDefault(),!1):$.inArray(i,s)>-1?(S[e](),t.preventDefault(),!1):void 0}))}),S._mousewheel())},resize:function(e,t){var i=(S.getViewport(),S.coming);e?"object"==typeof e?"D"===devices()?"auto"!==e[0]?i.width.md=e[0]:$("."+S.class.bd).width(""):"T"===devices()?"auto"!==e[1]?i.width.sm=e[1]:$("."+S.class.bd).width(""):"M"===devices()&&("auto"!==e[2]?i.width.xs=e[2]:$("."+S.class.bd).width("")):"auto"!==e&&(i.width.md=e,i.width.sm=e,i.width.xs=e):$("."+S.class.bd).width(""),t?"object"==typeof t?"D"===devices()?"auto"!==t[0]?i.height.md=t[0]:$("."+S.class.bd).height(""):"T"===devices()?"auto"!==t[1]?i.height.sm=t[1]:$("."+S.class.bd).height(""):"M"===devices()&&("auto"!==t[2]?i.height.xs=t[2]:$("."+S.class.bd).height("")):"auto"!==t&&(i.height.md=t,i.height.sm=t,i.height.xs=t):$("."+S.class.bd).height(""),S.autoWidth=!e||"object"==typeof e&&(("D"!==devices()||"auto"===e[0])&&(("T"!==devices()||"auto"===e[1])&&("M"!==devices()||"auto"===e[2]))),S.autoHeight=!t||"object"==typeof t&&(("D"!==devices()||"auto"===t[0])&&(("T"!==devices()||"auto"===t[1])&&("M"!==devices()||"auto"===t[2]))),S.update(),setTimeout(function(){S.bindEvents()},0)},trigger:function(event,o){var _ret,_obj=o||S.coming;if(_obj){if($.isFunction(_obj[event])?_ret=_obj[event](_obj.element,Array.prototype.slice.call(arguments,1)):!$.isFunction(_obj[event])&&_obj[event]&&eval(_obj[event])(_obj.element),_ret===!1)return!1;_obj.overlay&&$.isFunction(S.overlay[event])&&S.overlay[event]($.extend(!0,{},S.overlay.defaults,_obj.overlay),_obj),$d.trigger(event)}},hideLoading:function(){$d.off("keydown"),$("."+S.class.loading).remove()},showLoading:function(){var e;e=$(S.tpl.loading).click(S.cancel).appendTo("body"),null!==S.coming.loadData?$('<span class="'+S.class.loadingBd+'-img">'+S.coming.loadData+"</span>").appendTo("."+S.class.loadingBd).width($("."+S.class.loadingBd).width()).height($("."+S.class.loadingBd).height()):$('<span><i class="'+S.class.loadingIcon+'"></i><i class="'+S.class.loadingIcon+'"></i><i class="'+S.class.loadingIcon+'"></i></span>').appendTo("."+S.class.loadingBd),$d.on("keydown",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),S.cancel())})},getViewport:function(){var e=S.coming&&S.locked||!1,t={x:$w.scrollLeft(),y:$w.scrollTop()};return e?(t.w=e[0].clientWidth,t.h=e[0].clientHeight):(t.w=isTouch&&window.innerWidth?window.innerWidth:$w.width(),t.h=isTouch&&window.innerHeight?window.innerHeight:$w.height()),t},_mousewheel:function(){var e=S.getViewport(),t=S.coming,i=$d.scrollTop();("M"!==devices()||t.supportMobile)&&e.h>$("."+S.class.sbox).height()&&S.mouseWheel?($w.on("scroll",function(e){S.isActive&&S.isOpen&&S.isOpened&&(e.preventDefault(),e.stopPropagation(),$h.add($d).scrollTop(i),$hb.animate({scrollTop:i},"1"),$hb.stop(!0,!0))}),$("."+S.class.sbox+" , "+S.class.overlay).on("mousewheel DOMMouseScroll",function(e,t,i,s){e.preventDefault(),e.stopPropagation();for(var o=e.target||null,a=$(o),n=!1;a.length;){if(n||a.is("."+S.class.sbox+" *")){null!==$("."+S.class.sbox)&&$("."+S.class.sbox).off("mousewheel DOMMouseScroll");break}n=isScrollable(a[0]),a=$(a).parent()}}),$d.on("keydown",function(e){38!==e.keyCode&&40!==e.keyCode||(e.preventDefault(),e.stopPropagation())})):("M"!==devices()||t.supportMobile)&&e.h<$("."+S.class.sbox).height()&&S.mouseWheel&&S.unbindEvents()},_autoSize:function(e){S.autoSize.w=function(){return!S.options.width&&!e[0].width||(!S.options.width&&e[0].width?!("D"===devices()&&e[0].width.md&&"auto"!==e[0].width.md||"T"===devices()&&e[0].width.sm&&"auto"!==e[0].width.sm||"M"===devices()&&e[0].width.xs&&"auto"!==e[0].width.xs):!(S.options.width&&"auto"!==S.options.width&&!e[0].width))},S.autoSize.h=function(){return!S.options.height&&!e[0].height||(!S.options.height&&e[0].height?!("D"===devices()&&e[0].height.md&&"auto"!==e[0].height.md||"T"===devices()&&e[0].height.sm&&"auto"!==e[0].height.sm||"M"===devices()&&e[0].height.xs&&"auto"!==e[0].height.xs):!(S.options.height&&"auto"!==S.options.height&&!e[0].height))}},_respond:function(e){"D"===devices()?(S.autoWidth=!(!S.autoSize.w||"auto"!==e.width.md),S.autoHeight=!(!S.autoSize.h||"auto"!==e.height.md)):"T"===devices()?(S.autoWidth=!(!S.autoSize.w||"auto"!==e.width.sm),S.autoHeight=!(!S.autoSize.h||"auto"!==e.height.sm)):"M"===devices()&&(S.autoWidth=!(!S.autoSize.w||"auto"!==e.width.xs),S.autoHeight=!(!S.autoSize.h||"auto"!==e.height.xs))},_start:function(e){var t,i,s,o,a={};return e=getScalar(e),!!(t=S.group[e]||null)&&(a=$.extend(!0,{},S.opts,t),"object"==typeof a.width?"D"===devices()?a.width.md=a.width.md:"T"===devices()?a.width.sm=a.width.sm:"M"===devices()&&(a.width.xs=a.width.xs):(s=a.width,"object"!=typeof s?a.width={md:s,sm:s,xs:s}:a.width={md:s.md,sm:s.sm,xs:s.xs}),"object"==typeof a.height?"D"===devices()?a.height.md=a.height.md:"T"===devices()?a.height.sm=a.height.sm:"M"===devices()&&(a.height.xs=a.height.xs):(o=a.height,"object"!=typeof o?a.height={md:o,sm:o,xs:o}:a.height={md:o.md,sm:o.sm,xs:o.xs}),a.supportMobile||"M"!==devices()||$b.find("> *:not(."+S.class.sbox+"):not(script):not(link):not(style)").addClass(""+S.class.sbox+"-remove"),S._respond(a),a.index=e,S.coming=a,S.isActive=!0,i=a.href,$(S.tpl.wrap).addClass((a.supportMobile||"M"!==devices()?"":S.class.sbox+"-mobiles ")+""+S.class.sbox+"-hide").appendTo(a.parent||"body"),a||S._afterOpen(a),a.closeBtn&&$("."+S.class.hd).append('<button type="button" class="'+S.class.close+'"></button>'),a.closeElem.match(/(\<|\>)/g)?$("."+S.class.close).html(a.closeElem):$("."+S.class.close).html("<em></em>"),$("."+S.class.close).find("em").text(a.closeElem),S.trigger("onReady"),void(a.href&&!S.regexHref.exec(a.href)?S._loadIframe():S._afterLoad()))},_loadIframe:function(){var e=S.coming,t=$(S.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",isTouch?"auto":S.iframe.scrolling).attr("src",e.href);$("."+S.class.sbox).bind("onReset",function(){try{$("."+S.class.bd).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),S.iframe.preload&&(S.showLoading(),t.one("load",function(){$(this).data("ready",1),isTouch||$(this).bind("load",S.update),$(this).parents("."+S.class.sbox).width("100%").removeClass(""+S.class.sbox+"-hidden").show(),S._afterLoad(),S.hideLoading()})),e.content=t.appendTo("."+S.class.bd)},_afterLoad:function(){var e,t,i=S.coming;if(i&&S.isActive!==!1){if(!1===S.trigger("afterLoad",i))return $("."+S.class.sbox).stop(!0).trigger("onReset").remove(),void(S.coming=null);if(S.unbindEvents(),e=i.content,t=i.href,isQuery(e)){if(!isQuery(e)||!e.parent().is($("."+S.class.bd)))var s=e}else if(/^\#/.exec(e)||/^\./.exec(e))var s=$(e);else var s=e;0!==s.prev().length&&s.prev().attr("data-sugarfunbox-prev",1),$("."+S.class.bd).html(s.attr("style","display : block !important")),S.trigger("beforeOpen"),S._setDimension(),S.reposition(),S.isOpen=!1,S.bindEvents(),S.isOpened||$("."+S.class.sbox).not("."+S.class.sbox).stop(!0).trigger("onReset").remove(),S.transitions[S.isOpened?coming.nextMethod:S.openMethod]()}},_setDimension:function(){var e,t,i=S.getViewport(),s=S.coming,o=$("."+S.class.sbox),a=($("."+S.class.hd),$("."+S.class.bd)),n=.95;if(o.removeClass(""+S.class.sbox+"-hide"),s.href&&!S.regexHref.exec(s.href)){if(e=s.content,1===parseInt(e.data("ready"),10))try{"M"!==devices()||s.supportMobile?"D"===devices()?o.width("auto"===S.autoWidth?S.ori.width.md:s.width.md):"T"===devices()?o.width("auto"===S.autoWidth?S.ori.width.sm:s.width.sm):"M"===devices()&&o.width("auto"===S.autoWidth?S.ori.width.xs:s.width.xs):a.width("100%"),t=e[0].contentWindow.document.body||null,a.height(9999),"D"===devices()?"auto"===s.height.md&&t?a.height(S.ori.height.md):a.height(s.height.md):"T"===devices()?"auto"===s.height.sm&&t?a.height(S.ori.height.sm):a.height(s.height.sm):"M"===devices()&&s.supportMobile&&("auto"===s.height.xs&&t?a.height(S.ori.height.xs):a.height(s.height.xs))}catch(e){}}else S.autoWidth||S.autoHeight?(S.autoWidth||"M"===devices()&&!s.supportMobile||("D"===devices()?a.width(i.w<=s.width.md?i.w*n:s.width.md-(parseInt(a.css("padding-left"),10)+parseInt(a.css("padding-right"),10))):"T"===devices()?a.width(i.w*(getScalar(S.defaults.width.sm)/100)<=s.width.sm?"100%":s.width.sm-(parseInt(a.css("padding-left"),10)+parseInt(a.css("padding-right"),10))):"M"===devices()&&a.width(i.w*(getScalar(S.defaults.width.xs)/100)<=s.width.xs?"100%":s.width.xs-(parseInt(a.css("padding-left"),10)+parseInt(a.css("padding-right"),10)))),S.autoHeight||("D"===devices()?a.height(s.height.md):"T"===devices()?a.height(s.height.sm):"M"===devices()&&a.height(s.height.xs)),S.autoWidth&&("M"!==devices()||s.supportMobile)&&(o.width("auto"),"D"===devices()?s.width.md=i.w*n<=a.width()?S.defaults.width.md:a.width():"T"===devices()?s.width.sm=i.w*(getScalar(S.defaults.width.sm)/100)<=a.width()?S.defaults.width.sm:a.width():"M"===devices()&&(s.width.xs=i.w*(getScalar(S.defaults.width.xs)/100)<=a.width()?S.defaults.width.xs:a.width())),S.autoHeight&&(o.height("auto"),"D"===devices()?s.height.md=a.height():"T"===devices()?s.height.sm=a.height():"M"===devices()&&(s.height.xs=a.height()))):"D"===devices()?a.height(s.height.md):"T"===devices()?a.height(s.height.sm):"M"===devices()&&s.supportMobile&&a.height(s.height.xs);S.fitToView&&("D"===devices()?o.width(i.w<=s.width.md?i.w*n:s.width.md):"T"===devices()?o.width(i.w<=s.width.sm?i.w*n:s.width.sm):"M"===devices()&&(s.supportMobile?o.width(i.w<=s.width.xs?i.w*n:s.width.xs):o.width(i.w).height(i.h)))},_getPosition:function(e){var t=S.coming,i=S.getViewport(),s=$("."+S.class.sbox).width(),o=$("."+S.class.sbox).height(),a={top:"M"!==devices()||t.supportMobile?i.y:0,marginTop:0,marginLeft:"M"!==devices()||t.supportMobile?getValue(s*S.leftRatio*-1):0};return i.h>o&&(a.top="M"!==devices()||t.supportMobile?getValue(i.h*S.topRatio+i.y):0,a.marginTop="M"!==devices()||t.supportMobile?getValue(o*S.topRatio*-1):0),a},_afterOpen:function(){var e=S.coming;e&&(S.isOpen=S.isOpened=!0,$("."+S.class.sbox).css("overflow","visible").addClass(""+S.class.sbox+"-opened"),S.update(),e.closeBtn&&$("."+S.class.sbox).on("click","."+S.class.close,function(e){e.preventDefault(),S.close()}),S.trigger("afterOpen"))},_afterClose:function(e){if(e=e||S.coming,$.extend(S,{group:{},opts:{},pos:{},coming:null,current:null,autoWidth:!1,autoHeight:!1,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1}),isQuery(e.content))var t=e.content;else if(/^\#/.exec(e.content)||/^\./.exec(e.content))var t=$(e.content);t.removeAttr("style"),0!==$("[data-sugarfunbox-prev]").length&&$("[data-sugarfunbox-prev]").removeAttr("data-sugarfunbox-prev").after(t),$("."+S.class.sbox+"-remove").removeClass(""+S.class.sbox+"-remove"),$("."+S.class.sbox).trigger("onReset").remove(),S.trigger("afterClose",e)}}),S.transitions={getOrigPosition:function(){var e=S.coming,t=e.element,i=S.orig,s={},o=50,a=50,n=S.getViewport();return!i&&t.is(":visible")&&(i=t.find("img:first"),i.length||(i=t)),isQuery(i)?s=i.offset():(s.top=n.y+(n.h-a)*S.topRatio,s.left=n.x+(n.w-o)*S.leftRatio),("fixed"===$("."+S.class.sbox).css("position")||S.locked)&&(s.top-=n.y,s.left-=n.x),s={top:getValue(pos.top*S.topRatio),left:getValue(pos.left*S.leftRatio),width:getValue(o),height:getValue(a)}},zoomIn:function(){var e=(S.coming,S.pos),t=S.openEffect,i="elastic"===t,s=$.extend({opacity:1},e);delete s.position,i?(e=this.getOrigPosition(),S.openOpacity&&(e.opacity=.1)):"fade"===t&&(e.opacity=.1),$("."+S.class.sbox).css(e).animate(s,{duration:"none"===t?0:S.openSpeed,easing:S.openEasing,complete:S._afterOpen})},zoomOut:function(){var e=(S.coming,S.closeEffect),t="elastic"===e,i={opacity:.1};t&&(i=this.getOrigPosition(),S.closeOpacity&&(i.opacity=.1)),$("."+S.class.sbox).animate(i,{duration:"none"===e?0:S.closeSpeed,easing:S.closeEasing,complete:S._afterClose})}},S.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!isTouch,fixed:!0},overlay:null,fixed:!1,el:$h,create:function(e){e=$.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=$(S.tpl.overlay).addClass(""+S.class.overlay+"-"+(S.coming.supportMobile||"M"!==devices()?"desktops":"mobiles")),(S.coming.supportMobile&&"M"===devices()||"M"!==devices())&&this.overlay.appendTo(S.coming?S.coming.parent:e.parent)},open:function(e){var t=this;e=$.extend({},this.defaults,e),this.overlay?this.overlay.off(".overlay").width("auto").height("auto"):this.create(e),this.fixed||($w.bind("resize.overlay",$.proxy(this.update,this)),this.update()),e.closeClick?this.overlay.bind("click.overlay",function(e){if($(e.target).hasClass(S.class.overlay))return S.isActive?S.close():t.close(),!1}):this.overlay.addClass(""+S.class.overlay+"-cursor"),this.overlay.css(e.css).show()},close:function(){var e,t;$w.off("resize.overlay"),this.el.hasClass(""+S.class.sbox+"-lock")&&($("."+S.class.sbox+"-margin").removeClass(""+S.class.sbox+"-margin"),e=$w.scrollTop(),t=$w.scrollLeft(),this.el.removeClass(""+S.class.sbox+"-lock"),$w.scrollTop(e).scrollLeft(t)),$("."+S.class.sbox+"-overlay").remove().hide(),$("."+S.class.sbox+"-hide").removeClass(""+S.class.sbox+"-hide"),$.extend(this,{overlay:null,fixed:!1})},update:function(){var e,t="100%";this.overlay.width(t).height("100%"),_IE?(e=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),$d.width()>e&&(t=$d.width())):$d.width()>$w.width()&&(t=$d.width()),this.overlay.width(t).height($d.height())},onReady:function(e,t){var i=this.overlay;$("."+S.class.overlay).stop(!0,!0),i||this.create(e),e.locked&&this.fixed&&t.fixed&&(i||(this.margin=$d.height()>$w.height()&&$h.css("margin-right").replace("px","")),t.fixed=!1),e.showEarly===!0&&this.beforeOpen.apply(this,arguments)},beforeOpen:function(e,t){var i,s;t.locked&&(this.margin!==!1&&($("*").filter(function(){return"fixed"===$(this).css("position")&&!$(this).hasClass(S.class.overlay)&&!$(this).hasClass(S.class.sbox)}).addClass(""+S.class.sbox+"-margin"),this.el.addClass(""+S.class.sbox+"-margin")),i=$w.scrollTop(),s=$w.scrollLeft(),this.el.addClass(""+S.class.sbox+"-lock"),$w.scrollTop(i).scrollLeft(s)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!S.coming&&("MSIE 8"!==Browsers()?this.overlay.fadeOut(e.speedOut,$.proxy(this.close,this)):(this.overlay.hide(),this.close))}},$.fn.sugarfunbox=function(e){var t,i=$(this),s=this.selector||"",o=function(i){var s=$(this).blur(),o=t;i.ctrlKey||i.altKey||i.shiftKey||i.metaKey||s.is(".sugarfunbox")||(e.index=o,S.open(s,e)!==!1&&i.preventDefault())};return e=e||{},t=e.index||0,s&&e.live!==!1?$d.undelegate(s,"click").delegate(s,"click",o):i.off("click").on("click",o),this},$.extend(S.defaults,{fixed:$.support.fixedPosition,parent:$b})})(window,document,jQuery);