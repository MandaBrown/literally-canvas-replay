var LC = require('../vendor/literallycanvas-core.min.js');
var CanvasUtils = require('../utils/canvas-utils');

module.exports = UpdateShape;

function UpdateShape(canvas){
  var utils = new CanvasUtils(canvas);

  var name = 'updateShape';
  var action = function(message) {
    var shape = LC.JSONToShape(message.shape);
    utils.deleteShape(shape, false);
    canvas.saveShape(shape, false);
  };

  return {
    name: name,
    action: action
  };
}
