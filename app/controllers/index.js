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

//var x=Alloy.createCollection('Catagory');
// i use here Alloy.createCollection not Alloy.collection because i didn't make collection in xml
//alert(x.fetch());

