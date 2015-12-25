module.exports = TurnOnDrawing;

function TurnOnDrawing(studentDrawingIndicator){
  var name = 'turnOnDrawing';
  var action = function(message) {
    studentDrawingIndicator.updateState(true);
  };

  return {
    name: name,
    action: action
  };
}
