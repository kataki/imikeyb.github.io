// MYbloXX
// 0.081420 by MYXXdev
// 
// Powered by MYXX FM
// #1 for Spanglish Hits!
// A DJ MikeyB Station
// MYXXfm.com | MYXX-DB | Dallas, TX

function FindProxyForURL(url, host)

{
    if (
        shExpMatch(url, "*/click/*") || shExpMatch(url, "*-advertising*") || shExpMatch(url, "*.2o7.net") || shExpMatch(url, "*.am15.net") || shExpMatch(url, "*.bbelements.*") || shExpMatch(url, "*.deltadna.net*") || shExpMatch(url, "*.fractionalmedia.*") || shExpMatch(url, "*.impact-ad*") || shExpMatch(url, "*.marketo.*") || shExpMatch(url, "*.media.net*") || shExpMatch(url, "*.mydas.mobi*") || shExpMatch(url, "*.sextracker*") || shExpMatch(url, "*.stats.esomniture.com*") || shExpMatch(url, "*.undertone*") || shExpMatch(url, "*.voodoo*.*") || shExpMatch(url, "*.xiti.com*") || shExpMatch(url, "acloudimages*") || shExpMatch(url, "acloudvideos*") || shExpMatch(url, "ad-*") || shExpMatch(url, "ad.*") || shExpMatch(url, "*ad0*-*") || shExpMatch(url, "*ad0*.*") || shExpMatch(url, "*ad1*-*") || shExpMatch(url, "*ad1*.*") || shExpMatch(url, "*ad2*-*") || shExpMatch(url, "*ad2*.*") || shExpMatch(url, "*ad3*-*") || shExpMatch(url, "*ad3*.*") || shExpMatch(url, "*ad4*-*") || shExpMatch(url, "*ad4*.*") || shExpMatch(url, "*ad5*-*") || shExpMatch(url, "*ad5*.*") || shExpMatch(url, "*ad6*-*") || shExpMatch(url, "*ad6*.*") || shExpMatch(url, "*ad7*-*") || shExpMatch(url, "*ad7*.*") || shExpMatch(url, "*ad8*-*") || shExpMatch(url, "*ad8*.*") || shExpMatch(url, "*ad9*-*") || shExpMatch(url, "*ad9*.*") || shExpMatch(url, "*adbanner*-*") || shExpMatch(url, "*adbanner*.*") || shExpMatch(url, "*adblade*") || shExpMatch(url, "*adcolony*") || shExpMatch(url, "*adimag*") || shExpMatch(url, "*adimg*") || shExpMatch(url, "*adlog*") || shExpMatch(url, "*adlogs*") || shExpMatch(url, "*adlooxtracking*") || shExpMatch(url, "*admedit*") || shExpMatch(url, "*admitad*") || shExpMatch(url, "*admob*") || shExpMatch(url, "*adnet*") || shExpMatch(url, "*adnetwork*") || shExpMatch(url, "*adpushup*") || shExpMatch(url, "ads-*") || shExpMatch(url, "ads.*") || shExpMatch(url, "*ads0*") || shExpMatch(url, "*ads1*") || shExpMatch(url, "*ads2*") || shExpMatch(url, "*ads3*") || shExpMatch(url, "*ads4*") || shExpMatch(url, "*ads5*") || shExpMatch(url, "*ads6*") || shExpMatch(url, "*ads7*") || shExpMatch(url, "*ads8*") || shExpMatch(url, "*ads9*") || shExpMatch(url, "*adsapi*") || shExpMatch(url, "*adsatt.*") || shExpMatch(url, "*adscience*.*") || shExpMatch(url, "*adsdk*") || shExpMatch(url, "*adserv*") || shExpMatch(url, "*adservice*") || shExpMatch(url, "*adserving*") || shExpMatch(url, "*adsperk*") || shExpMatch(url, "*adsrv*") || shExpMatch(url, "*adstreamcanvas*") || shExpMatch(url, "*adtech*") || shExpMatch(url, "*adtng*") || shExpMatch(url, "*adtrack*") || shExpMatch(url, "*advert*") || shExpMatch(url, "*affiliate*") || shExpMatch(url, "*analytic*") || shExpMatch(url, "*anamuel-careslie*") || shExpMatch(url, "*atlant-track*") || shExpMatch(url, "*banner*") || shExpMatch(url, "*Banner-Ad*") || shExpMatch(url, "*beonixom*") || shExpMatch(url, "*betgorebysson*") || shExpMatch(url, "*bidvertiser*") || shExpMatch(url, "*buysellads*") || shExpMatch(url, "*_campaign=*") || shExpMatch(url, "*cdnads*") || shExpMatch(url, "*clickserv*.*") || shExpMatch(url, "*clickstat*") || shExpMatch(url, "*clicktrack*") || shExpMatch(url, "*clksite*") || shExpMatch(url, "*cloudfront.net*") || shExpMatch(url, "collector*") || shExpMatch(url, "*conversant*") || shExpMatch(url, "count-*") || shExpMatch(url, "count.*") || shExpMatch(url, "counter-*") || shExpMatch(url, "counter.*") || shExpMatch(url, "*cpcalendars*") || shExpMatch(url, "*cpcontacts*") || shExpMatch(url, "*cqcounter*") || shExpMatch(url, "*creativecdn*") || shExpMatch(url, "*crittercism*") || shExpMatch(url, "*doubleclick*") || shExpMatch(url, "*doubleverify*") || shExpMatch(url, "*eikegolehem*") || shExpMatch(url, "*exacttarget*") || shExpMatch(url, "*exoclick*") || shExpMatch(url, "*exosrv*") || shExpMatch(url, "*familinger*") || shExpMatch(url, "*fastclick*") || shExpMatch(url, "*fcukfriend*") || shExpMatch(url, "*getadmiral*") || shExpMatch(url, "*goaffmy*") || shExpMatch(url, "*googleads*") || shExpMatch(url, "*googleadservices*") || shExpMatch(url, "*googlesyndication*") || shExpMatch(url, "*graizoah*") || shExpMatch(url, "*grooksom*") || shExpMatch(url, "*hitbox*") || shExpMatch(url, "*hsh51nvkrv*") || shExpMatch(url, "iad.*") || shExpMatch(url, "iadnet*") || shExpMatch(url, "iads.*") || shExpMatch(url, "*inpagepush*") || shExpMatch(url, "*infolinks*") || shExpMatch(url, "*infopicked*") || shExpMatch(url, "*intellitxt*") || shExpMatch(url, "*interad*") || shExpMatch(url, "*interstitial-ad*") || shExpMatch(url, "*iwanttodeliver*") || shExpMatch(url, "*lijit*-*") || shExpMatch(url, "*lalaping*") || shExpMatch(url, "logger-*") || shExpMatch(url, "logger.*") || shExpMatch(url, "logging-*") || shExpMatch(url, "logging.*") || shExpMatch(url, "logs-*") || shExpMatch(url, "logs.*") || shExpMatch(url, "*marketing-*") || shExpMatch(url, "*marketing.*") || shExpMatch(url, "*meowpushnot*") || shExpMatch(url, "*metrics*-*") || shExpMatch(url, "*metrics*.*") || shExpMatch(url, "*mobileads*") || shExpMatch(url, "*mobileapptracking*") || shExpMatch(url, "*mopinion*") ||shExpMatch(url, "*mrjb7hvcks*") || shExpMatch(url, "*newsandpromotions*") || shExpMatch(url, "*ocsp*") || shExpMatch(url, "*offerimage*") || shExpMatch(url, "*offers-*") || shExpMatch(url, "*offers.*") || shExpMatch(url, "*onelink.me*") || shExpMatch(url, "*onstunkyr*") || shExpMatch(url, "*pagead*") || shExpMatch(url, "*partner*-*") || shExpMatch(url, "*partner*.*") || shExpMatch(url, "*popunder*") || shExpMatch(url, "*popup*") || shExpMatch(url, "*promo-*") || shExpMatch(url, "*promo.*") || shExpMatch(url, "*realsrv*") || shExpMatch(url, "*redir*") || shExpMatch(url, "*rsaltsjt*") || shExpMatch(url, "*rtbsuperhub*") || shExpMatch(url, "*runative*") || shExpMatch(url, "*rusenov*") || shExpMatch(url, "*smartyads*") || shExpMatch(url, "*sillrochester*") || shExpMatch(url, "*splicky*") || shExpMatch(url, "*spylog*") || shExpMatch(url, "*statcounter*") || shExpMatch(url, "*statistic-*") || shExpMatch(url, "*statistic.*") || shExpMatch(url, "*stats-*") || shExpMatch(url, "*stats.*") || shExpMatch(url, "*swrve*") || shExpMatch(url, "*taboola*") || shExpMatch(url, "*textad*") || shExpMatch(url, "*.top") || shExpMatch(url, "track-*") || shExpMatch(url, "track.*") || shExpMatch(url, "*tradedoubler*") || shExpMatch(url, "*trafficstars*") || shExpMatch(url, "trk*") || shExpMatch(url, "trk.*") || shExpMatch(url, "tsyndicate*") || shExpMatch(url, "*upgulpinon*") || shExpMatch(url, "*ushoofop*") || shExpMatch(url, "*vibrantmedia*") || shExpMatch(url, "*vpnadefenseplus*") || shExpMatch(url, "*webads*") || shExpMatch(url, "*webgains*") || shExpMatch(url, "*xuossk3tu6hb*") || shExpMatch(url, "*yahoo*ads*") || shExpMatch(url, "*yads-*") || shExpMatch(url, "*yads.*") || shExpMatch(url, "*zeroredirect*")
        )
    {return "PROXY 8.8.8.8:53";}

return "DIRECT";

}