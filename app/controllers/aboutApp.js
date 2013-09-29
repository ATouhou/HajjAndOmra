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
		video : 'http//:www.facebook.com'
	}).getView();
	brws.open();
}

function web() {
	var text = $.web.text;
	var brws = Alloy.createController('browser', {
		video : 'http://www.hashapps.com'
	}).getView();
	brws.open();
}

function twitter() {
	var text = $.web.text;
	var brws = Alloy.createController('browser', {
		video : 'http//:www.twitter.com'
	}).getView();
	brws.open();
}
