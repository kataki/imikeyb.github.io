// ┏━┓┏━┳┓╋╋┏┳┓╋┏┓╋╋╋┏━┓┏━┳━┓┏━┓
// ┃┃┗┛┃┃┗┓┏┛┃┃╋┃┃╋╋╋┗┓┗┛┏┻┓┗┛┏┛
// ┃┏┓┏┓┣┓┗┛┏┫┗━┫┃┏━━┓┗┓┏┛╋┗┓┏┛
// ┃┃┃┃┃┃┗┓┏┛┃┏┓┃┃┃┏┓┃┏┛┗┓╋┏┛┗┓
// ┃┃┃┃┃┃╋┃┃╋┃┗┛┃┗┫┗┛┣┛┏┓┗┳┛┏┓┗┓
// ┗┛┗┛┗┛╋┗┛╋┗━━┻━┻━━┻━┛┗━┻━┛┗━┛
// 0.081420 by MYXXdev
//
// Powered by MYXX FM
// #1 for Spanglish Hits!
// A DJ MikeyB Station"
// MYXXfm.com | MYXX-DB | Dallas, TX

function FindProxyForURL(url, host)

{
    if (
	shExpMatch(url, "*.2o7.net") ||
	shExpMatch(url, "*.bbelements.*") ||    
	shExpMatch(url, "*adpushup*") ||        
	shExpMatch(url, "*adserv*-*") ||
	shExpMatch(url, "*adserv*.*") ||
	shExpMatch(url, "*adsrv*-*") ||
	shExpMatch(url, "*adsrv*.*") ||
	shExpMatch(url, "*analytic*-*") ||
	shExpMatch(url, "*analytic*.*") ||
	shExpMatch(url, "*lijit*-*") ||        
	shExpMatch(url, "*splicky*") ||
	shExpMatch(url, "*vibrantmedia*") ||         
	shExpMatch(url, ".voodoo*.*") || 
	shExpMatch(url, "ad.*") ||
	shExpMatch(url, "ad0*-*") ||
	shExpMatch(url, "ad1*.*") ||
	shExpMatch(url, "ad2*-*") ||
	shExpMatch(url, "ad2*-*") ||
	shExpMatch(url, "ad2*.*") ||
	shExpMatch(url, "ad3*-*") ||
	shExpMatch(url, "ad3*-*") ||
	shExpMatch(url, "ad3*.*") ||
	shExpMatch(url, "ad4*-*") ||
	shExpMatch(url, "ad4*-*") ||
	shExpMatch(url, "ad4*.*") ||
	shExpMatch(url, "ad5*-*") ||
	shExpMatch(url, "ad5*-*") ||
	shExpMatch(url, "ad5*.*") ||
	shExpMatch(url, "ad6*-*") ||
	shExpMatch(url, "ad6*-*") ||
	shExpMatch(url, "ad6*.*") ||
	shExpMatch(url, "ad7*-*") ||
	shExpMatch(url, "ad7*-*") ||
	shExpMatch(url, "ad7*.*") ||
	shExpMatch(url, "ad8*-*") ||
	shExpMatch(url, "ad8*-*") ||
	shExpMatch(url, "ad8*.*") ||
	shExpMatch(url, "ad9*-*") ||
	shExpMatch(url, "ad9*-*") ||
	shExpMatch(url, "ad9*.*") ||
	shExpMatch(url, "adbanner*-*") ||
	shExpMatch(url, "adbanner*.*") ||
	shExpMatch(url, "adimag*-*") ||
	shExpMatch(url, "adimag*.*") ||
	shExpMatch(url, "adimg*-*") ||
	shExpMatch(url, "adimg*.*") ||
	shExpMatch(url, "adlog*-*") ||
	shExpMatch(url, "adlog*.*") ||
	shExpMatch(url, "adlogs*-*") ||
	shExpMatch(url, "adlogs*.*") ||
	shExpMatch(url, "admob*-*") ||
	shExpMatch(url, "admob*.*") ||
	shExpMatch(url, "adnet*-*") ||
	shExpMatch(url, "adnet*.*") ||
	shExpMatch(url, "adnetwork*-*") ||
	shExpMatch(url, "adnetwork*.*") ||
	shExpMatch(url, "ads-*") ||
	shExpMatch(url, "ads.*") ||
	shExpMatch(url, "ads1*.*") ||
	shExpMatch(url, "ads2*-*") ||
	shExpMatch(url, "ads2*.*") ||
	shExpMatch(url, "ads3*-*") ||
	shExpMatch(url, "ads3*.*") ||
	shExpMatch(url, "ads4*-*") ||
	shExpMatch(url, "ads4*.*") ||
	shExpMatch(url, "ads5*-*") ||
	shExpMatch(url, "ads5*.*") ||
	shExpMatch(url, "ads6*-*") ||
	shExpMatch(url, "ads6*.*") ||
	shExpMatch(url, "ads7*-*") ||
	shExpMatch(url, "ads7*.*") ||
	shExpMatch(url, "ads8*-*") ||
	shExpMatch(url, "ads8*.*") ||
	shExpMatch(url, "ads9*-*") ||
	shExpMatch(url, "ads9*.*") ||
	shExpMatch(url, "adsapi*-*") ||
	shExpMatch(url, "adsapi*.*") ||
	shExpMatch(url, "adsdk*-*") ||
	shExpMatch(url, "adsdk*.*") ||
	shExpMatch(url, "adservice*-*") ||
	shExpMatch(url, "adservice*.*") ||
	shExpMatch(url, "adserving*-*") ||
	shExpMatch(url, "adserving*.*") ||
	shExpMatch(url, "adtrack*-*") ||
	shExpMatch(url, "adtrack*.*") ||
	shExpMatch(url, "advert*-*") ||
	shExpMatch(url, "advert*.*") ||
	shExpMatch(url, "affiliate*-*") ||
	shExpMatch(url, "affiliate*.*") ||
	shExpMatch(url, "banner*-*") ||
	shExpMatch(url, "banner*.*") ||
	shExpMatch(url, "cdn*-*") ||
	shExpMatch(url, "cdn*.*") ||
	shExpMatch(url, "cdnads*-*") ||
	shExpMatch(url, "cdnads*.*") ||
	shExpMatch(url, "clicktrack*.*") ||        
	shExpMatch(url, "collector*-*") ||
	shExpMatch(url, "collector*.*") ||
	shExpMatch(url, "count-*") ||
	shExpMatch(url, "count.*") ||
	shExpMatch(url, "cpcalendars*-*") ||
	shExpMatch(url, "cpcalendars*.*") ||
	shExpMatch(url, "cpcontacts*-*") ||
	shExpMatch(url, "cpcontacts*.*") ||
	shExpMatch(url, "iad*-*") ||
	shExpMatch(url, "iad*.*") ||
	shExpMatch(url, "logger*-*") ||
	shExpMatch(url, "logger*.*") ||
	shExpMatch(url, "logging*-*") ||
	shExpMatch(url, "logging*.*") ||
	shExpMatch(url, "logs*-*") ||
	shExpMatch(url, "logs*.*") ||
	shExpMatch(url, "marketing*-*") ||
	shExpMatch(url, "marketing*.*") ||
	shExpMatch(url, "metrics*-*") ||
	shExpMatch(url, "metrics*.*") ||
	shExpMatch(url, "ocsp-*") ||
	shExpMatch(url, "ocsp.*") ||
	shExpMatch(url, "offers*-*") ||
	shExpMatch(url, "offers*.*") ||
	shExpMatch(url, "partner*-*") ||
	shExpMatch(url, "partner*.*") ||
	shExpMatch(url, "popunder*-*") ||
	shExpMatch(url, "popunder*.*") ||
	shExpMatch(url, "popup*-*") ||
	shExpMatch(url, "popup*.*") ||
	shExpMatch(url, "promo*-*") ||
	shExpMatch(url, "promo*.*") ||
	shExpMatch(url, "redir*-*") ||
	shExpMatch(url, "redir*.*") ||
	shExpMatch(url, "statistic*-*") ||
	shExpMatch(url, "statistic*.*") ||
	shExpMatch(url, "stats*-*") ||
	shExpMatch(url, "stats*.*") ||
	shExpMatch(url, "track*-*") ||
	shExpMatch(url, "track*.*") ||
	shExpMatch(url, "trk*-*") ||
	shExpMatch(url, "trk*.*") ||
 	shExpMatch(url, "*tradedoubler*") ||       
    shExpMarch(url, "ads*.*") ||
    shExpMatch(url, "*-advertising*") ||
    shExpMatch(url, "*.am15.net") ||
    shExpMatch(url, "*.deltadna.net*") ||
    shExpMatch(url, "*.fractionalmedia.*") ||  
    shExpMatch(url, "*.impact-ad*") ||
    shExpMatch(url, "*.marketo.*") ||
    shExpMatch(url, "*.media.net") ||
    shExpMatch(url, "*.mydas.mobi*") ||
    shExpMatch(url, "*.sextracker*.*") ||
    shExpMatch(url, "*.stats.esomniture.com") ||
    shExpMatch(url, "*.undertone*") ||
    shExpMatch(url, "*.xiti.com*") ||
    shExpMatch(url, "*adcolony*") ||
    shExpMatch(url, "*adtech*") ||
    shExpMatch(url, "*bidvertiser*") || 
    shExpMatch(url, "*buysellads*") || 
    shExpMatch(url, "*conversant*") ||
    shExpMatch(url, "*cqcounter*") ||
    shExpMatch(url, "*crittercism*") ||
    shExpMatch(url, "*doubleclick*") ||
    shExpMatch(url, "*doubleverify*") ||
    shExpMatch(url, "*exacttarget*") ||
    shExpMatch(url, "*fastclick*") ||   
    shExpMatch(url, "*googleads*") ||
    shExpMatch(url, "*googleadservices*") ||
    shExpMatch(url, "*hitbox*") ||
    shExpMatch(url, "*infolinks*") ||
    shExpMatch(url, "*intellitxt*") ||
    shExpMatch(url, "*iwanttodeliver*") ||
    shExpMatch(url, "*mobileads*") ||
    shExpMatch(url, "*mobileapptracking*") ||
    shExpMatch(url, "*smartyads*") ||
    shExpMatch(url, "*spylog*") ||
    shExpMatch(url, "*statcounter*") ||
    shExpMatch(url, "*swrve*") ||
    shExpMatch(url, "*taboola*") ||
    shExpMatch(url, "*zeroredirect*") ||
    shExpMatch(url, "ad-*") ||
    shExpMatch(url, "ad0*-*") ||
    shExpMatch(url, "ad0*.*") ||
    shExpMatch(url, "ad1*-*") ||
    shExpMatch(url, "ad1*-*") ||
    shExpMatch(url, "adblade*") ||
    shExpMatch(url, "adlooxtracking*") ||
    shExpMatch(url, "ads*-*") ||
    shExpMatch(url, "ads0*-*") ||
    shExpMatch(url, "ads0*.*") ||
    shExpMatch(url, "ads1*-*") ||
    shExpMatch(url, "adscience*.*") ||
    shExpMatch(url, "clickserv*.*") ||
    shExpMatch(url, "clickstats*.*") ||
    shExpMatch(url, "pagead*-*") ||
    shExpMatch(url, "pagead*.*") ||
    shExpMatch(url, "textad*-*") ||
    shExpMatch(url, "textad*.*") ||
    shExpMatch(url, "webads*-*") ||   
    shExpMatch(url, "webads*.*") || 
    shExpMatch(url, "yads*-*") ||
    shExpMatch(url, "yads*.*")
    )
    {return "PROXY 8.8.8.8:53";}

return "DIRECT";

}