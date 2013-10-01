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

$.header.title.text=args.data.get('name');

function itemDetails(e){
	var index=e.itemIndex;
	var value=collection.at(index);
	var opn=Alloy.createController('ItemDetails',{data:value});
	opn.getView().open();
	
}
