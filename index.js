var LC = require('./vendor/literallycanvas-core.min.js');

module.exports = LiterallyCanvasReplay;

function LiterallyCanvasReplay(opts){
  opts = opts || {};

  var literalCanvas = LC.init(opts.canvasElement);

  return {};
}