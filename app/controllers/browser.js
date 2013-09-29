var args = arguments[0] || {};

var image = args.image;
var video = args.address;

if (video) {
	$.show.setUrl(video);
} else {
	$.show.setHtml('<html><body> <img src=image /> </body></html>');
        
}

