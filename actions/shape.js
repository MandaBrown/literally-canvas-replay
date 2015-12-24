var LC = require('../vendor/literallycanvas-core.min.js');

module.exports = Shape;

function Shape(canvas){
  var name = 'shape';
  var action = function(message) {
    canvas.saveShape(LC.JSONToShape(message.shape),
      false,
      message.previousShapeId
    );
  };

  return {
    name: name,
    action: action
  };
}
