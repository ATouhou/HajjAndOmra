function hideMenu() {
	setTimeout(function() {
		Alloy.Globals.menu.toggleRightDrawer();
	}, 300);
}

function openItemDetails() {
	var ctrl = Alloy.createController('ItemDetails');
	ctrl.getView().open();
}

var x=Alloy.Collections.Catagory;
x.fetch();

function map(){
	Alloy.createController('markedMap').getView().open();
}