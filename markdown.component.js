/*
	Misojs Markdown component

	This component allows rendering of markdown - by default it will render both client and server side, however in miso you are able to serve static markdown on the client side, by simply including the file manually like so:

	var Markdown = require('../node_modules/misojs-markdown-component/markdown.component.js')({});

	This works because miso can compile separate server and client versions of the code automatically.
*/
/* Markdown component */
module.exports = require("./markdown.component.server.js");
