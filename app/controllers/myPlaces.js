var data = Alloy.Collections.myplaces;
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

Ti.App.addEventListener('app:update', function(argument) {
	data.fetch();
});

function openAddNew() {
	var ctrl = Alloy.createController('AddNewPlaces');
	ctrl.getView().open();
}