$.header.rightNavButton.addEventListener('click', function() {

	Alloy.Globals.menu.toggleRightDrawer();
});
var args = arguments[0] || {};

var type = args.type;
$.header.title.text = args.title;
var collection = Alloy.Collections.catagory;
collection.fetch({
		// query: 'SELECT * FROM model WHERE columns
		query: {
			statement: 'SELECT * FROM catagory WHERE type = ?',
			params: [type]
		}
	});