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

function myPlaces() {
	var ctrl = Alloy.createController('myPlaces');
	Alloy.Globals.menu.setContent(ctrl.getView());
	Alloy.Globals.menu.closeDrawer();
}

function places() {
	var ctrl = Alloy.createController('places');
	Alloy.Globals.menu.setContent(ctrl.getView());
	Alloy.Globals.menu.closeDrawer();
}

function about() {
	var opn = Alloy.createController('aboutApp');
	Alloy.Globals.menu.setContent(opn.getView());
	Alloy.Globals.menu.closeDrawer();
}

