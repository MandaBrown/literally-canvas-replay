# Literally Canvas Replay

When given an element to attach to and an array of whiteboard messages, this library builds a nice viewer for reviewing
the interactive canvas session.

## Setup for Development

- `npm install`: Installs dev dependencies.
- `npm run start`: Starts [budo](https://github.com/mattdesl/budo)
- `npm run build`: Builds `bundle.js` for demo page
- `npm run build-dist`: Builds js and css for distribution *Not yet implemented*

## Message Format

- __displayName__: Person drawing
- __sentAt__ : Time sent (in UTC)
- __message__ : Whiteboard action

## Actions

~~- __drawStart__: Thrown away.~~

~~- __drawEnd__: Thrown away.~~

- __shape__: New `:shape` to save to the canvas.
- __clear__: Clear the canvas.
- __turnOnDrawing__: Turn on student drawing indicator.
- __turnOffDrawing__: Turn off student drawing indicator.
- __drawBoundaries__: Sends `:width` and `:height` of the user's canvas. *Not yet implemented.*
