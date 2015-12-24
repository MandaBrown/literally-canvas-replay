var LC = require('./vendor/literallycanvas-core.min.js');
var Actions = require('./actions/actions.js');

module.exports = LiterallyCanvasReplay;

function LiterallyCanvasReplay(opts){
  opts = opts || {};

  var literalCanvas = LC.init(opts.canvasElement);
  var actions = Actions.new(literalCanvas);

  return {};
}
