# Literally Canvas Replay

When given an element to attach to and an array of whiteboard messages, this library builds a nice viewer for reviewing
the interactive canvas session.

## Setup for Development

- `npm install`: Installs dev dependencies.
- `npm run start`: Starts [budo](https://github.com/mattdesl/budo).
- `npm run build`: Builds js for demo.
- `npm run build-dist`: Builds js for distribution.

*You may need to install uglify globally depending on your system: `npm install -g uglify-js`*

## To Use

- Include `literally-canvas-replay.min.js` & `literally-canvas-replay.css` in your project. Take a look at `index.html` & `demo.js` for an example of usage.

## Message Format

- __displayName__: Person drawing
- __sentAt__ : Time sent (in UTC)
- __message__ : Whiteboard action

## Actions

- __shape__: New `:shape` to save to the canvas.
- __clear__: Clear the canvas.
- __turnOnDrawing__: Turn on student drawing indicator.
- __turnOffDrawing__: Turn off student drawing indicator.
- __shapeDeleted__: Removes `:shape` from the canvas.
- __shapeMoved__: Moves `:shape` on the canvas to a new location.
- __shapeSelected__: Selects `:shape`.

*- __drawBoundaries__: Sends `:width` and `:height` of the user's canvas. __Not yet implemented.__*
*- __setBackground__: Toggles background images -- just 'graphPaper', so far. __Not yet implemented.__*
