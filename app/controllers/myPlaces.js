var data = Alloy.Collections.myplaces;
data.fetch();

function maping(e) {
	var index = e.itemIndex;
	var value = data.at(index);
	var map = Alloy.createController('markedMap', {
		details : value
	});
	map.getView().open();
}

$.header.rightNavButton.addEventListener('click', function() {
	Alloy.Globals.menu.toggleRightDrawer();
});

$.header.leftNavButton.addEventListener('click', function() {
	var ctrl = Alloy.createController('AddNewPlaces');
	ctrl.getView().open();
});

Ti.App.addEventListener('app:update', function(argument) {
	data.fetch();
});



function edit (argument) {
 var dialog = Ti.UI.createAlertDialog({
			buttonNames : ['Edit', 'Delete' , 'Cancel'],
			message : 'قم بتعديل اماكنك',
			title : 'تعديل المكان'
		});
		dialog.addEventListener('click' , function(e) {
		  if (e.index == 0) {
		  	
		  }else if (e.index == 1) {
		  	data.remove(e.index);
		  	data.fetch();
		  	//data.at(e.index).destroy();
		  }else if (e.index == 2) {
		  	
		  };
		});
		dialog.show();
}