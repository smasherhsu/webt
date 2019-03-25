'use strict';

var tracking = new trackingFn();

function trackingFn() {
};

trackingFn.prototype.report = function (self , e) {
    var $self = jQuery(self);
    var _url    = $self.attr('href'),
        _google = $self.data('google'),
        _fb     = $self.data('fb'),
        _yahoo  = $self.data('yahoo');

    if ( typeof(gtag) !== 'undefined' ) {
        e.preventDefault();

        gtag('event', 'conversion',
            {
                'send_to'        : _google,
                'event_callback' : function () {
                    if ( typeof(_url) !== 'undefined' ) {
                        window.location = _url;
                    }
                }
            }
        );
    }

    if ( _fb ) {
        fbq('track', _fb);
    }

    if ( _yahoo ) {
        window.uetq = window.uetq || []; 
        window.uetq.push
        ({ 'ec':_yahoo, 'ea':_yahoo, 'el':_yahoo, 'ev':'0' });
    }
};

trackingFn.prototype.appier = function (self) {
    var $self = jQuery(self);
    var _uiType = $self.data('appier-tag'),
        _actionID = $self.data('appier-id');

    var dmp_id ="";
    try {
        dmp_id = document.cookie.split('cubcsapersisted=')[1].split(';')[0].split('null_0_')[1].split('_')[0] || "";
    } catch(err) {
    
    }

    var SiteExperience__UserFlowType = ["商品資訊", "網路投保", "iCarry意外險"];
    var SiteExperience__UIType = [_uiType]; 
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
    window.APPIER_RETARGET.send({"t":"type_conversion", "content":"icarry", "action_id": _actionID, "track_id":"7I3ExxjGCzfUbbI", "dmp_id": dmp_id, "opts":{unique_key: "true"}, "taxonomy": {
            "SiteExperience__UserFlowType": SiteExperience__UserFlowType,
            "SiteExperience__UIType": SiteExperience__UIType
        }
    });
};