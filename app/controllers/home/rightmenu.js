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
		type : 1,
		title : 'مناسك الحج'
	});
	Alloy.Globals.menu.setContent(ctrl.getView());
	Alloy.Globals.menu.closeDrawer();
}


function openOmra(e) {
	var ctrl = Alloy.createController("catagoryView", {
		type : 2,
		title : 'مناسك العمرة'
	});
	Alloy.Globals.menu.setContent(ctrl.getView());
	Alloy.Globals.menu.closeDrawer();
}

function openAzkar(e) {
	var ctrl = Alloy.createController("catagoryView", {
		type : 3,
		title : 'اذكار'
	});
	
	Alloy.Globals.menu.setContent(ctrl.getView());
	Alloy.Globals.menu.closeDrawer();
}

function about() {
	var opn = Alloy.createController('aboutApp');
	Alloy.Globals.menu.setContent(opn.getView());
	Alloy.Globals.menu.closeDrawer();
}

var hajPlaylist = "PLWN82HMvn_KyDs4lh1p2TTp2Ot0Tey21O", data;

function hajVideos() {
	var ctrl = Alloy.createController('youtubeView' , {
		playlist : hajPlaylist 
	});
	Alloy.Globals.menu.setContent(ctrl.getView());
	Alloy.Globals.menu.closeDrawer();
}
var ormaPlaylist = "PL8I4VP2ZKwSaOsSxHOPoGStj72FNaVgqC", data;

function omraVideos() {
	var ctrl = Alloy.createController('youtubeView' , {
		playlist : ormaPlaylist 
	});
	Alloy.Globals.menu.setContent(ctrl.getView());
	Alloy.Globals.menu.closeDrawer();	
}
