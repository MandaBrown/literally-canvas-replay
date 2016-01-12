var LC = require('./vendor/literallycanvas-core.min.js');
var Actions = require('./actions/actions.js');
var FrameControls = require('./controls/frame_controls.js');
var Indicators = require('./indicators/indicators.js');


if (typeof module === "object" && module.exports) {
  module.exports = LiterallyCanvasReplay;
}

if (typeof define === "function" && define.amd) {
  define("literallycanvasreplay", [], function() {
    return LiterallyCanvasReplay;
  });
}

function LiterallyCanvasReplay(opts){
  opts = opts || {};
  var lcOptions = opts.lcOptions || {
    backgroundColor: '#FFF',
    imageSize: { width: 1000, height: 500 },
    keyboardShortcuts: false
  };

  var logger = new Logger(opts);

  var currentState = {
    studentDrawing: false
  };

  var literalCanvas = LC.init(opts.canvasElement, lcOptions);

  // Not sure why, but on initial load,
  // the canvas is stretched vertically.
  // Triggering a resize event fixes it.
  var onTimeout = function() {
    evt = window.document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);
  };
  setTimeout(onTimeout, 100);


  // Hack to turn off drawing.
  literalCanvas.setTool(new LC.tools.Eyedropper(literalCanvas));

  var indicators = new Indicators({
    canvasElement: opts.canvasElement
  });
  var canvasActions = new Actions(literalCanvas, indicators);
  var frameControls = new FrameControls({
    canvasElement: opts.canvasElement
  });

  var processActions = function(actions) {
    logger.log('About to process actions', actions);
    actions = filterActions(actions);
    frameControls.loadActions(actions, function(actionIndex) {
      processActionsToIndex(actions, actionIndex);
    });
    processActionsToIndex(actions, actions.length);
  };

  var processActionsToIndex = function(actions, index) {
    logger.log('Processing actions to index', actions, index);
    canvasActions.execute('clear');
    literalCanvas.backgroundShapes = [];
    indicators.startReplay();

    if (index > actions.length - 1) index = actions.length - 1;
    for (var i = 0; i <= index; i++) {
      action = actions[i];
      logger.log('Executing action', action.message.action, action.message);
      canvasActions.execute(action.message.action, action.message);
    }

    frameControls.setActiveDot(index);
    indicators.endReplay();
  };

  var filterActions = function(actions) {
    return actions.filter(function(action){
      return canvasActions.allowedActions.filter(function(a){
        return action.message.action == a;
      }).length > 0;
    });
  };

  return {
    processActions: processActions
  };
}

window.LiterallyCanvasReplay = LiterallyCanvasReplay;

function Logger(opts) {
  opts = opts || {};

  var log;

  if (opts.logToConsole) {
    log = function() { console.log(arguments) };
  } else {
    log = function() {};
  }

  return {
    log: log
  };
}
