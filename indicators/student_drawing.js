var ShinyTransition = require('../utils/shiny-transition.js')

module.exports = StudentDrawing;

function StudentDrawing() {
  var name = 'studentDrawing';
  var state = null;
  var pending = true;
  var el = document.createElement('div');
  el.innerText = 'Student Drawing'
  var transition = new ShinyTransition(el);

  var addElement = function(parentEl) {
    parentEl.appendChild(el);
  };

  var updateState = function(newState){
    state = newState;
    if (pending) return;

    if (state)
      transition.changeClass('student-drawing active');
    else
      transition.changeClass('student-drawing');
  };

  var clear = function() {
    state = false;
    pending = true;
  };

  var runPending = function() {
    pending = false;
    updateState(state);
  };

  clear();

  return {
    name: name,
    updateState: updateState,
    addElement: addElement,
    clear: clear,
    runPending: runPending
  };
}
