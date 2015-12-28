var LC = require('../vendor/literallycanvas-core.min.js');
var CanvasUtils = require('../utils/canvas-utils');

module.exports = ShapeMoved;

function ShapeMoved(canvas){
  var utils = new CanvasUtils(canvas);

  var name = 'shapeMoved';
  var action = function(shape) {
    var shape = LC.JSONToShape(message.shape);
    utils.deleteShape(shape, false);
    canvas.saveShape(shape, false);
  };

  return {
    name: name,
    action: action
  };
}
