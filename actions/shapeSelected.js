var LC = require('../vendor/literallycanvas-core.min.js');
var CanvasUtils = require('../utils/canvas-utils');

module.exports = ShapeSelected;

function ShapeSelected(canvas){
  var utils = new CanvasUtils(canvas);

  var name = 'shapeSelected';
  var action = function(shape) {
    utils.setSelectedShape(shape);
  };

  return {
    name: name,
    action: action
  };
}
