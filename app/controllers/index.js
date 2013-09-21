var actionbar = require('actionbar');

if (OS_IOS && Alloy.isHandheld) {
	Alloy.Globals.navgroup = $.navgroup;	
}


if (OS_ANDROID){
	$.main.open();
} else {
	$.index.open();
}


Alloy.Globals.menu = $.menu; 

$.menu.init({
  rightDrawer:  Alloy.createController('home/rightmenu').getView(),
  content: Alloy.createController('home/home').getView()
});

