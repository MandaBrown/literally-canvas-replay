var Shapes = require('../utils/whiteboard-shapes');

module.exports = SetBackground;

function SetBackground(canvas){
  var name = 'setBackground';
  var action = function(message) {
    var bgShapes = [];

    if (message.background === 'graphPaper') {
      bgShapes = Shapes.graphPaper();
    }

    canvas.backgroundShapes = bgShapes;
    canvas.repaintAllLayers();
  };

  return {
    name: name,
    action: action
  };
}
