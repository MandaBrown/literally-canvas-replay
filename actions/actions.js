var Shape = require('./shape.js');
var Clear = require('./clear.js');
var TurnOnDrawing = require('./turnOnDrawing.js');
var TurnOffDrawing = require('./turnOffDrawing.js');
var UpdateShape = require('./updateShape.js');
var ShapeDeleted = require('./shapeDeleted.js');
var SetBoundaries = require('./setBoundaries.js');

module.exports = Actions;

function Actions(literalCanvas, indicators){

  var shape = new Shape(literalCanvas);
  var clear = new Clear(literalCanvas);
  var studentDrawingIndicator = indicators.findByName('studentDrawing');
  var turnOnDrawing = new TurnOnDrawing(studentDrawingIndicator);
  var turnOffDrawing = new TurnOffDrawing(studentDrawingIndicator);
  var updateShape = new UpdateShape(literalCanvas);
  var shapeDeleted = new ShapeDeleted(literalCanvas);
  var setBoundaries = new SetBoundaries(literalCanvas);

  var actions = [
    shape,
    clear,
    turnOnDrawing,
    turnOffDrawing,
    updateShape,
    shapeDeleted,
    setBoundaries
  ];

  var allowedActions = function() {
    return actions.map(function(action) {
      return action.name;
    });
  };

  var findActionByName = function(actionName) {
    filtered = actions.filter(function(action){
      return action.name === actionName;
    })
    if (filtered == null) return;
    return filtered[0];
  };

  var execute = function(actionName, params) {
    action = findActionByName(actionName);
    if (action == null) return;

    action.action(params);
  };

  return {
    execute: execute,
    allowedActions: allowedActions()
  };
}
