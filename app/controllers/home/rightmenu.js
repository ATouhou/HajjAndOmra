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
	Alloy.createController('markedMap').getView().open();
}

function test(){
	var ctrl = Alloy.createController('myPlaces');
	Alloy.Globals.menu.setContent(ctrl.getView());
	Alloy.Globals.menu.closeDrawer();
}

function test(){
	var ctrl = Alloy.createController('myPlaces');
	Alloy.Globals.menu.setContent(ctrl.getView());
	Alloy.Globals.menu.closeDrawer();
}

function test2(){
	var ctrl = Alloy.createController('places');
	Alloy.Globals.menu.setContent(ctrl.getView());
	Alloy.Globals.menu.closeDrawer();
}

