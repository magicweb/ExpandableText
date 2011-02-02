/*
---
name: ExpandableText
description: mootools based expandable text with shortening facility

authors:
  - Magic Web Solutions (http://www.magicwebsolutions.co.uk)

license:
  - MIT-style

requires:
  core/1.3:   '*'

provides:
  - ExpandableText
...
*/

var ExpandableText = new Class({
	initialize: function(options) {
		options = $merge({
			'more': "[more...]",
			'less': "[less]",
			height: 45,
			width: 300
			}, options);
		this.divId = options.divId;
		this.more = options.more;
		this.less = options.less;
		this.baseHeight = options.height;
		this.baseWidth = options.width;
	},
	
	start: function(){	
        $(this.divId).setStyle('height', "");
        $(this.divId).setStyle('width', this.baseWidth);
		var coordinates = null;
        coordinates = $(this.divId).getCoordinates();
        if(coordinates.height <= this.baseHeight){			
                return;
       	} 
        this.longText = $(this.divId).innerHTML;
		var splitText = this.longText.split(' ');
		$(this.divId).innerHTML = '';
		var limit = true;
		var i = 0;
		var text = "";
		this.shortText = "";
		for (i=0; i<splitText.length&&limit; i++) {
			text += (splitText[i]+" ");
			$(this.divId).innerHTML = (text+this.more);
			coordinates = $(this.divId).getCoordinates();
			if(coordinates.height > this.baseHeight){			
				limit = false;
			} 
			else {
				this.shortText = text;				 
			}
		}
		$(this.divId).innerHTML = this.shortText;
		if (i < splitText.length)
			this.addMoreLink();
	},
	
	addMoreLink: function(){
		var a = new Element('a', {
		    events: {click: this.moreClick.bind(this)},
		    href: 'javascript:;'
		});
		a.appendText(this.more);		
		a.injectInside($(this.divId));
	},
	
	addLessLink: function(){
		var a = new Element('a', {
			events: {click: this.lessClick.bind(this)},
			href: 'javascript:;' 
		});
		a.appendText(this.less);
		a.injectInside($(this.divId));
	},	
	
	lessClick: function(){
		$(this.divId).innerHTML = this.shortText;
		this.addMoreLink();
	},
	
	moreClick: function(){
		$(this.divId).innerHTML = this.longText;
		this.addLessLink();
	}
	
});

