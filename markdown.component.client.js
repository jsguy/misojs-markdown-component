/*
	Misojs Markdown component - client version
	This markdown component grabs the markdown from the DOM, 
	and statically shows it when rendered.

	Note: This is a hacky implementation that relies on the 
	order of markdown elements - this means you only render it
	server side, and we don't need to include a copy of the 
	"marked" library in client side code.
*/
var m = require('mithril');

//	Grab all the markdown elements
//	Note: this will only work once... very hacky.
var markdownElements = document.getElementsByClassName("markdown"),
	markdownTexts = [],
	count = 0, i;

for(i = 0; i < markdownElements.length; i += 1) {
	markdownTexts.push(markdownElements[i].innerHTML);
}

/* Markdown component */
var MarkdownComponent = {
	view: function(ctrl, args) {
		count += 1;
		return m("div", {"class": "markdown"},
			m.trust(markdownTexts[count -1])
		);
	}
};

//	Allow the user to pass in arguments when loading.
module.exports = function(args){
	return MarkdownComponent;
};