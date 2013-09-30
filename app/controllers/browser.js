var args = arguments[0] || {};

var image = args.image;
var video = args.video;

if (video) {
	if (video.length < 18) {
		$.header.title.text = video;
		$.show.setUrl(video);
	} else {
		var x = video.substring(6, 21);
		$.header.title.text = x;
		$.show.setUrl(video);
	}
} else {
	$.header.title.text = image;
	$.show.setHtml('<html><body> <img src=image /> </body></html>');
}

$.show.addEventListener('load', function(e) {
	$.header.title.text = $.show.evalJS("document.title");
});

