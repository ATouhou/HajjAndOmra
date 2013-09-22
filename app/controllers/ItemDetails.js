var args = arguments[0] || {};

if (args.get) {
	$.header.text = args.get('name');
	$.image.image = args.get('image');
	$.details.text = args.get('details');

} 

