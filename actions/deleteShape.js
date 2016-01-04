var LC = require('../vendor/literallycanvas-core.min.js');
var CanvasUtils = require('../utils/canvas-utils');

module.exports = DeleteShape;

function DeleteShape(canvas){
  var utils = new CanvasUtils(canvas);

  var name = 'deleteShape';
  var action = function(message) {
    var shape = LC.JSONToShape(message.shape);
    utils.deleteShape(shape, false);
  };

  return {
    name: name,
    action: action
  };
}
