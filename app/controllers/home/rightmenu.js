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



function openHaj(e) {
	var ctrl = Alloy.createController("catagoryView", {
		type : 1
	});
	ctrl.getView.open();
}


function openOmra(e) {
	var ctrl = Alloy.createController("catagoryView", {
		type : 2
	});
	ctrl.getView.open();
}