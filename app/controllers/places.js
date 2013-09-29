var data = Alloy.Collections.places;
data.fetch();

function maping(e) {
	var index = e.itemIndex;
	var value = data.at(index);
	var map = Alloy.createController('markedMap', {
		details : value
	});
	map.getView().open();
}

$.header.rightNavButton.addEventListener('click', function() {
	Alloy.Globals.menu.toggleRightDrawer();
}); 