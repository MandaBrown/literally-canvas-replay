module.exports = TurnOffDrawing;

function TurnOffDrawing(studentDrawingIndicator){
  var name = 'turnOffDrawing';
  var action = function(message) {
    studentDrawingIndicator.updateState(false);
  };

  return {
    name: name,
    action: action
  };
}
