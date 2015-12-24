var LiterallyCanvasReplay = require('./index.js');

var id = 'replay-canvas';
var canvasElement = document.getElementById(id);
var opts = {
  canvasElement: canvasElement
};

lcr = new LiterallyCanvasReplay(opts);
