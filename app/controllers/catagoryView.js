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
	
function list(e) {
	var index=e.itemIndex;
	var value=collection.at(index);
	var win = Ti.UI.createWindow({
		backgroundColor: 'white',
		navBarHidden:'true'
	});
	var list=Alloy.createController('List',{data:value}).getView();
	win.add(list);
	win.open();
};
