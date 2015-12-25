module.exports = StudentDrawing;

function StudentDrawing() {
  var name = 'studentDrawing';
  var state = null;
  var el = document.createElement('div');
  el.innerText = 'Student Drawing'

  var addElement = function(parentEl) {
    parentEl.appendChild(el);
  };

  var updateState = function(newState){
    state = newState;
    if (state)
      el.className = 'student-drawing active';
    else
      el.className = 'student-drawing';
  };

  var clear = function() {
    updateState(false);
  };

  updateState(false);

  return {
    name: name,
    updateState: updateState,
    addElement: addElement,
    clear: clear
  };
}
