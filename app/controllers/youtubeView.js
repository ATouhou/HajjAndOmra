$.header.rightNavButton.addEventListener('click', function() {

	Alloy.Globals.menu.toggleRightDrawer();
});
var collec = Alloy.Collections.Youtube;
var mdl;

var playlist = "PLWN82HMvn_KyDs4lh1p2TTp2Ot0Tey21O", data;
var loader = Titanium.Network.createHTTPClient();

loader.open("GET", "http://gdata.youtube.com/feeds/api/playlists/" + playlist + "?v=2");

loader.onload = function(e) {

	data = [];
	var doc = this.responseXML.documentElement;
	var items = doc.getElementsByTagName("entry");
	for (var c = 0; c < items.length; c++) {
		var item = items.item(c);
		var thumbnails = item.getElementsByTagName("media:thumbnail");
		if (thumbnails && thumbnails.length > 0) {
			var media = thumbnails.item(0).getAttribute("url");
			//thumbnail image

			var title = item.getElementsByTagName("title").item(0).text;

			//video title
			var videoId = item.getElementsByTagName("yt:videoid").item(0).text;
			//video id

			// do what you want with the data
				
		}
		
			mdl = Alloy.createModel('Youtube', {
					name : title,
					description : videoId,
					thumb : media,
				});
				collec.add(mdl);
	}
	 

};
function info(e) {
		var index = e.itemIndex;
		var m = collec.at(index);
		Ti.Platform.openURL("http://www.youtube.com/watch?v=" + m.get('description'));
	}

loader.send();
