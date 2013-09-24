function hideMenu() {
	setTimeout(function() {
		Alloy.Globals.menu.toggleRightDrawer();
	}, 300);
}

function openList() {
	var ctrl = Alloy.createController('List');
	Alloy.Globals.menu.setContent(ctrl.getView());
	Alloy.Globals.menu.closeDrawer();
}

var x=Alloy.Collections.Catagory;
x.fetch();

function map(){
	Alloy.createController('markedMap').getView().open();
}