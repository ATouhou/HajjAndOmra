function hideMenu() {
	setTimeout(function() {
		Alloy.Globals.menu.toggleRightDrawer();
	}, 300);
}

function openList() {
	var ctrl = Alloy.createController('AddNewPlaces');
	//Alloy.Globals.menu.setContent(ctrl.getView());
	ctrl.getView().open();
	Alloy.Globals.menu.closeDrawer();
}

var x=Alloy.Collections.Catagory;
x.fetch();

function map(){
	Alloy.createController('myPlaces').getView().open();
}