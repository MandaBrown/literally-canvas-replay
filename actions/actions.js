var Shape = require('./shape.js');
var Clear = require('./clear.js');

module.exports = Actions;

function Actions(literalCanvas){

  var shape = new Shape(literalCanvas);
  var clear = new Clear(literalCanvas);

  var actions = [
    shape,
    clear
  ];

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
    execute: execute
  };
}
