// TutuBoxHelper + SHAB by iMikeyB
// Sponsored by MYXX FM - #1 for Spanglish Hits!
// A DJ MikeyB Station | MYXX-DB | Dallas, TX | MYXXfm.com
// Updated: 08/01/2020 / 00:44

function FindProxyForURL(url, host)

{
    if (
	shExpMatch(url, "*cnn.com*") ||
	shExpMatch(url, "*ocsp.apple.com*")
    )
    {return "PROXY 8.8.8.8:53";}

return "DIRECT";

}