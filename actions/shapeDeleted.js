var LC = require('../vendor/literallycanvas-core.min.js');
var CanvasUtils = require('../utils/canvas-utils');

module.exports = ShapeDeleted;

function ShapeDeleted(canvas){
  var utils = new CanvasUtils(canvas);

  var name = 'shapeDeleted';
  var action = function(shape) {
    var shape = LC.JSONToShape(message.shape);
    utils.deleteShape(shape, false);
  };

  return {
    name: name,
    action: action
  };
}
