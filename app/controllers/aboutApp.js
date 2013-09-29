function go() {
	var text = $.web.text;
	var brws = Alloy.createController('browser', {
		address : text
	}).getView();
	brws.open();
}

$.header.rightNavButton.addEventListener('click', function() {
	Alloy.Globals.menu.toggleRightDrawer();
}); 
