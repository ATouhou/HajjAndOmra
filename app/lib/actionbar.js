function init(headerbar, window){
	if(OS_ANDROID){
		headerbar.setParentContainer(window);
		headerbar.setBackground({
		    color:'#cacaca'
		});
		
		headerbar.setBlackAngle();
		headerbar.setTitle({
		    text: window.title,
		    color:'#6f6f6f'
		});
		
		//headerbar.hideBottomLine();
		//headerbar.showAngle();
		
		headerbar.setBack(function(){
		    Alloy.Globals.close(window);
		});
	}
}

exports.init = init;