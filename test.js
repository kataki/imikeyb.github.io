var BLOCK = "PROXY 8.8.8.8:53";
var DIRECT = "DIRECT";
var MYBLOXX = ["ocsp.apple.com","cnn.com"];


function FindProxyForURL(url, host) {
  if (isAnAd(url, host)) {
    return BLOCK;
  } else {
    return DIRECT;
  }
}

function isAnAd(url, host) {
  return domainAdMatch(host);
}

function regexAdMatch(url) {
  return false; //if (shExpMatch(url, "*.ad./*")) return true;
}

function domainAdMatch(host) {
  //return MYBLOXX.some((elem) => dnsDomainIs(host, elem));
  return true;
}