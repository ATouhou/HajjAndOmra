
$.titleBar.rightNavButton.addEventListener('click', function(){
	Alloy.Globals.menu.toggleRightDrawer();
});



Alloy.Globals.menu.on('open:[right]', function(){
	$.overlay.visible = true;
});

Alloy.Globals.menu.on('close:[right]', function(){
	$.overlay.visible = false;
});

function toggleMenu() {
	Alloy.Globals.menu.toggleRightDrawer();
}
