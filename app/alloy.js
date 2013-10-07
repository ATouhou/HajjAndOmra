// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

var customFont = 'FrutigerLTArabic-55Roman';
Alloy.Globals.customFont;

if(Alloy.isTablet){
	Alloy.Globals.paragraph = {
		fontSize: 30
	};
	Alloy.Globals.h1 = {
		fontSize: 40
	};
}else{
	if (Ti.Platform.displayCaps.platformHeight < 480 ){
		Alloy.Globals.paragraph = {
			fontSize: 14
		};
		Alloy.Globals.h1 = {
			fontSize: 16
		};
	}else{
		Alloy.Globals.paragraph = {
			fontSize: 18
		};
		Alloy.Globals.h1 = {
			fontSize: 20
		};
	}
}


