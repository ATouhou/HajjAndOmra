$.titleBar.rightNavButton.addEventListener('click', function() {
	Alloy.Globals.menu.toggleRightDrawer();
});

Alloy.Globals.menu.on('open:[right]', function() {
	$.overlay.visible = true;
});

Alloy.Globals.menu.on('close:[right]', function() {
	$.overlay.visible = false;
});

function toggleMenu() {
	Alloy.Globals.menu.toggleRightDrawer();
}

function splashScreen(argument) {
	Ti.App.Properties.setBool('myBool', true);
	var ctrl = Alloy.createController('helpWin');
	ctrl.getView().open();
}

var result = Ti.App.Properties.getBool('myBool');
if ( result == null ) {
	splashScreen();
} else {

}

