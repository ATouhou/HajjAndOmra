$.header.rightNavButton.addEventListener('click', function() {
	Alloy.Globals.menu.toggleRightDrawer();
});

var args = arguments[0] || {};
var catagoryID = args.data.get('id');
var collection = Alloy.Collections.item;
collection.fetch({
	// query: 'SELECT * FROM model WHERE columns
	query : {
		statement : 'SELECT * FROM Item WHERE catagoryID = ?',
		params : [catagoryID]
	}
});

Alloy.Collections.item.fetch();

$.header.title.text=args.data.get('name');
