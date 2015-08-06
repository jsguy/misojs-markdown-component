# misojs-markdown-component

This component allows rendering of markdown in misojs.

## installation

In your main misojs application directory:

```
npm install misojs-markdown-component --save
```

## Usage

Acceess the component in your mvc entities like so:

```javascript
var Markdown = require('misojs-markdown-component')();
```

In your controller, you might set a value like so:

```javascript
this.markdownValue = [
	"## Markdown",
	"The mark-up that likes to get down!",
	"* Amazing!",
	"* Awesome!"].join("\n");
```

And in your view:

```javascript
m.component(Markdown, {
	value: ctrl.markdownValue
}),
```

This will render the markdown.

## Controlling the render

By default the misojs markdown component will render both client and server side, however in miso you are able to serve static markdown on the client side, by simply including the file manually like so:

```javascript
var Markdown = require('../node_modules/misojs-markdown-component/markdown.component.js')({});
```

This works because miso can compile separate server and client versions of the code automatically, and any directly referenced files will be included. See markdown.component.client.js for details on how the client side implementation works, and if it is suitable for your use.