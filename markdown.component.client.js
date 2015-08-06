/*
	Misojs Markdown component - client version
	This markdown component grabs the markdown from the DOM, 
	and statically shows it when rendered, it is a somewhat hacky
	implementation that relies on the order of markdown elements - 
	this means you only render it server side, and we don't need 
	to include a copy of the "marked" library in client side code.
*/
var m = require('mithril');

//	Grab all the markdown elements
var markdownElements = document.getElementsByClassName("markdown"),
	markdownHtml = [],
	count = 0, i;

for(i = 0; i < markdownElements.length; i += 1) {
	markdownHtml.push(markdownElements[i].innerHTML);
}

/* Markdown component */
var MarkdownComponent = {
	view: function(ctrl, args) {
		count += 1;
		return m("div", {"class": "markdown"},
			//	Use our grabbed markdown html
			m.trust(markdownHtml[count -1])
		);
	}
};

//	Allow the user to pass in arguments when loading.
module.exports = function(args){
	return MarkdownComponent;
};