var touchStartX = 0,
	touchStarted = false,
	content;

var drawer = {
  is_opened: false,
  initialize: function(content) {
    this.setWidth(content.width);
    this.add(content);
  },
  openDrawer: function() {
    this.fireEvent('open');
    $.content.animate(this.getDrawerOpenAnimation());
    this.is_opened = true;
  },
  closeDrawer: function() {
    this.fireEvent('close');
    $.content.animate(this.getDrawerCloseAnimation());
    this.is_opened = false;
  },
  toggleDrawer: function() {
    if(this.is_opened) {
      this.closeDrawer();
    }
    else {
      this.openDrawer();
    }
  }
};

_.extend($.rightDrawer, drawer, {
  getDrawerOpenAnimation: function() {
    var width = this.width;
    return Ti.UI.createAnimation({
      left : - width,
      curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
      duration : 150
    });
  },
  getDrawerCloseAnimation: function() {
    return Ti.UI.createAnimation({
      left : 0,
      curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
      duration : 150
    });
  }
});



$.rightDrawer.addEventListener('open', function(){
  $.rightDrawer.zIndex = 2;
  $.trigger('open:[right]');
});
$.rightDrawer.addEventListener('close', function(){
  $.trigger('close:[right]');
});


exports.init = function(options) {
	if (options.hasOwnProperty('content')){
		exports.setContent(options.content);
	}
  
  if(options.hasOwnProperty('rightDrawer')) {
    $.rightDrawer.initialize(options.rightDrawer);
  }
  else {
    $.slideMenu.remove($.rightDrawer);
  }

};

exports.toggleRightDrawer = function(){ 
	$.rightDrawer.toggleDrawer(); 
};

exports.closeDrawer = function(){ 
  $.rightDrawer.closeDrawer(); 
};

exports.setContent = function(newContent){
	for(var i=0,j=$.content.children.length; i<j; i++){
		$.content.remove($.content.children[i]);
	};
	content = newContent;
	$.content.add(newContent);
};
