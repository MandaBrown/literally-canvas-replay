var LC = require('./vendor/literallycanvas-core.min.js');
var Actions = require('./actions/actions.js');
var FrameControls = require('./controls/frame_controls.js');

module.exports = LiterallyCanvasReplay;

function LiterallyCanvasReplay(opts){
  opts = opts || {};

  var literalCanvas = LC.init(opts.canvasElement, opts.lcOptions);
  // Hack to turn off drawing.
  literalCanvas.setTool(new LC.tools.Eyedropper(literalCanvas));

  var canvasActions = new Actions(literalCanvas);
  var frameControls = new FrameControls({
    canvasElement: opts.canvasElement
  });

  var processActions = function(actions) {
    frameControls.loadActions(actions, function(actionIndex) {
      processActionsToIndex(actions, actionIndex);
    });
    processActionsToIndex(actions, actions.length);
  };

  var processActionsToIndex = function(actions, index) {
    canvasActions.execute('clear');

    if (index > actions.length - 1) index = actions.length - 1;
    for (var i = 0; i <= index; i++) {
      action = actions[i];
      canvasActions.execute(action.message.action, action.message);
    }

    frameControls.setActiveDot(index);
  };

  return {
    processActions: processActions
  };
}
