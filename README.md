ExpandableText
===========

Add an expandable text block on your page to make it less cluttered. The JavaScript plugin will accurately cut the text by word. 

![Screenshot](http://www.magicwebsolutions.co.uk/demos/text_description/screenshot.png)

How to Use
----------

JavaScript

	window.addEvent('domready', function(){
	    new ExpandableText({
	        divId: "textBlock",
	        height: 45,
	        width: 600
	    }).start();
	});

Options:

    * divId - Div id containing the text
    * width - Width the text block
    * height - Height of the text block
    * more - Link label to be used in the compact mode. The default is "[more...]".
    * less - Link label to be used in the expanded mode. The default is "[less]".
