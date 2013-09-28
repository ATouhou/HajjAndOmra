var args = arguments[0] || {};

var image = args.image;
var video = args.video;

if (video) {
	$.show.setUrl(video);
} else {
	$.show.setHtml('<html><body> <img src=image /> </body></html>');
        
}

