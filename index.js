var LC = require('./vendor/literallycanvas-core.min.js');
var Actions = require('./actions/actions.js');
var FrameControls = require('./controls/frame_controls.js');

module.exports = LiterallyCanvasReplay;

function LiterallyCanvasReplay(opts){
  opts = opts || {};

  var literalCanvas = LC.init(opts.canvasElement, opts.lcOptions);
  var canvasActions = new Actions(literalCanvas);
  var frameControls = new FrameControls({
    canvasElement: opts.canvasElement
  });

  var processActions = function(actions) {
    frameControls.loadActions(actions.length);
    actions.forEach(function(action){
      canvasActions.execute(action.action, action);
    });
  };

  return {
    processActions: processActions
  };
}
