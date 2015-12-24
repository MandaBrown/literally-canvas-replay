# Literally Canvas Replay

When given an element to attach to and an array of whiteboard messages, this library builds a nice viewer for reviewing
the interactive canvas session.

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
- __drawBoundaries__: Sends `:width` and `:height` of the user's canvas.
