module.exports = ActionDot;

function ActionDot(actionIndex, onClick){
  var el = document.createElement('div');
  var actionIndex = actionIndex;
  var className = 'action-dot';
  var activeClassName = 'active';
  var inactiveClassName = 'inactive';

  var onElClick = function() {
    onClick(actionIndex);
  };

  var setActiveState = function(active) {
    var dotStateClass;
    if (active) {
      dotStateClass = activeClassName;
    } else {
      dotStateClass = inactiveClassName;
    }

    el.className = className + ' ' + dotStateClass;
  };

  el.addEventListener('click', onElClick);
  setActiveState(false);

  return {
    el: el,
    actionIndex: actionIndex,
    setActiveState: setActiveState
  };
}
