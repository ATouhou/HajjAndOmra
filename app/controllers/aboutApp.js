function go() {
	var text = $.web.text;
	var brws = Alloy.createController('browser', {
		video : text
	}).getView();
	brws.open();
}

$.header.rightNavButton.addEventListener('click', function() {
	Alloy.Globals.menu.toggleRightDrawer();
}); 

function face() {
	var text = $.web.text;
	var brws = Alloy.createController('browser', {
		video : 'http://m.facebook.com'
	}).getView();
	brws.open();
}

function web() {
	var text = $.web.text;
	var brws = Alloy.createController('browser', {
		video : 'http://www.hashapps.com/HashApps'
	}).getView();
	brws.open();
}

function twitter() {
	var text = $.web.text;
	var brws = Alloy.createController('browser', {
		video : 'http://mobile.twitter.com/HashAppsCo'
	}).getView();
	brws.open();
}
