var LC = require('./vendor/literallycanvas-core.min.js');
var Actions = require('./actions/actions.js');

module.exports = LiterallyCanvasReplay;

function LiterallyCanvasReplay(opts){
  opts = opts || {};

  var literalCanvas = LC.init(opts.canvasElement, opts.lcOptions);
  var canvasActions = new Actions(literalCanvas);

  var processActions = function(actions) {
    actions.forEach(function(action){
      canvasActions.execute(action.action, action);
    });
  };

  return {
    processActions: processActions
  };
}
