/*
	TODO:

	* We only want this to load marked on the server side, 
	as there is no rendering to be done client side, and 
	adding the 'marked' code to miso just adds to the 
	bulk of miso.js

*/
//	Renders markdown using marked
var m = require('mithril'),
	marked = require('marked'),
	//	Create custom renderer
	renderer = new marked.Renderer();

//	Custom anchored headings
renderer.heading = function (text, level) {
	var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

	return '<h' + level + '><a name="' +
		escapedText +
		'" class="anchor" href="#' +
		escapedText +
		'"><span class="header-link">' +
		text + '</span></a></h' + level + '>';
};

//	Override the links
renderer.link = function (href, title, text) {
	var target;

	if(href.indexOf("http") == 0) {
		//	If starts with "http", we want a _blank target
		target = "_blank";
	}

	return '<a href="' + href + '"' + 
		(title? ' title="' + title + '"': '') + 
		(target? ' target="' + target + '"': '') + 
		'>' + text + '</a>';
};

//	Render markdown
var renderMarkdown = function(str){
	return marked(str, {
		gfm: true,
		renderer: renderer
	});
};

/* Markdown component */
var MarkdownComponent = {
	view: function(ctrl, args) {
		return m("div",{"class": "markdown", id: "bleh"},
			m.trust(renderMarkdown(args.value))
		);
	}
};

//	Allow the user to pass in arguments when loading.
module.exports = function(args){
	if(args && args.basePath) {
		basePath = args.basePath;
	}
	return MarkdownComponent;
};