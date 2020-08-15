// Credits
// Thank you to http://pgl.yoyo.org for the list of ad servers.
// Thank you to saudor on the macrumors for his/her script that inspired this one.

var DESTROY_AD = "PROXY 8.8.8.8:53";
var ACTUAL_CONTENT = "DIRECT";
var AD_DOMAIN_BLACKLIST = ["101com.com", "zmedia.com"];


function FindProxyForURL(url, host) {
  if (isAnAd(url, host)) {
    return DESTROY_AD;
  } else {
    return ACTUAL_CONTENT;
  }
}

function isAnAd(url, host) {
  return domainAdMatch(host);
}

function regexAdMatch(url) {
  // implement this later
  return false; //if (shExpMatch(url, "*.ad./*")) return true;
}

function domainAdMatch(host) {
  //return AD_DOMAIN_BLACKLIST.some((elem) => dnsDomainIs(host, elem));
  return true;
}