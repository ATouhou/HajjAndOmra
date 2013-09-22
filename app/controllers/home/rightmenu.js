

function hideMenu(){
	setTimeout(function(){
		Alloy.Globals.menu.toggleRightDrawer();
	}, 300)
;}

function safar() {
  Alloy.Globals.menu.closeDrawer();
  var ctrl = Alloy.createController('home/MainView');
  ctrl.getView().open();
  
}

