const MAX_IMAGE_WIDTH = 1000;
const MAX_IMAGE_HEIGHT = 500;

var LiterallyCanvasReplay = require('./index.js');

var id = 'replay-canvas';
var canvasElement = document.getElementById(id);
var lcOptions = {
  defaultStrokeWidth: 4,
  primaryColor: '#000',
  secondaryColor: 'transparent',
  backgroundColor: '#FFF',
  imageSize: { width: MAX_IMAGE_WIDTH, height: MAX_IMAGE_HEIGHT }
};

var opts = {
  canvasElement: canvasElement,
  lcOptions: lcOptions
};

lcr = new LiterallyCanvasReplay(opts);
